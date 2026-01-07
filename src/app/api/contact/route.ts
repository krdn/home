import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ==================== Rate Limiting ====================
// 메모리 기반 Rate Limiter (IP당 시간당 10회 제한)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1시간
const RATE_LIMIT_MAX = 10; // 시간당 최대 요청 수

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

// 주기적으로 만료된 레코드 정리 (메모리 누수 방지)
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 60 * 60 * 1000); // 1시간마다 정리

// ==================== CSRF/Origin 검증 ====================
const ALLOWED_ORIGINS = [
  'https://krdn.kr',
  'https://www.krdn.kr',
  'http://localhost:3000',
  'http://localhost:3100',
];

function isValidOrigin(origin: string | null): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed));
}

// Gmail SMTP 트랜스포터 설정
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// 이메일 발송 함수
async function sendNotificationEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}): Promise<boolean> {
  // 환경변수가 설정되지 않은 경우 스킵
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.CONTACT_EMAIL) {
    console.warn('이메일 설정이 없어 알림을 건너뜁니다.');
    return false;
  }

  const mailOptions = {
    from: `"KRDN Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: data.email,
    subject: `[KRDN 문의] ${data.subject} - ${data.name}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">새로운 문의가 접수되었습니다</h1>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 120px;">이름</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">이메일</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">문의 유형</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${data.subject}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">접수 시간</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${new Date(data.timestamp).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <h3 style="color: #64748b; font-size: 14px; margin-bottom: 12px;">메시지 내용</h3>
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
          </div>
          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}"
               style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500;">
              답장하기
            </a>
          </div>
        </div>
        <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
          이 메일은 KRDN 홈페이지 Contact 폼에서 자동 발송되었습니다.
        </p>
      </div>
    `,
    text: `
새로운 문의가 접수되었습니다.

이름: ${data.name}
이메일: ${data.email}
문의 유형: ${data.subject}
접수 시간: ${new Date(data.timestamp).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}

메시지 내용:
${data.message}
    `.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('📧 이메일 알림 발송 완료:', data.email);
    return true;
  } catch (error) {
    console.error('이메일 발송 실패:', error);
    return false;
  }
}

// 간단한 이메일 유효성 검사
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 입력값 정제 (XSS 방지)
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    // CSRF/Origin 검증
    const origin = request.headers.get('origin');
    if (!isValidOrigin(origin)) {
      return NextResponse.json(
        { error: '허용되지 않은 요청입니다.' },
        { status: 403 }
      );
    }

    // Rate Limiting 검증
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';

    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.' },
        {
          status: 429,
          headers: {
            'Retry-After': '3600',
            'X-RateLimit-Remaining': '0',
          }
        }
      );
    }

    const body: ContactFormData = await request.json();

    // 필수 필드 검증
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: '이름, 이메일, 메시지는 필수 항목입니다.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식이 아닙니다.' },
        { status: 400 }
      );
    }

    // 입력값 길이 제한
    if (body.name.length > 100 || body.email.length > 100 || body.message.length > 5000) {
      return NextResponse.json(
        { error: '입력값이 너무 깁니다.' },
        { status: 400 }
      );
    }

    // 입력값 정제
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      subject: sanitizeInput(body.subject || '일반 문의'),
      message: sanitizeInput(body.message),
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
    };

    // 메시지 저장 (파일 기반)
    const messagesDir = path.join(process.cwd(), 'data', 'messages');
    await fs.mkdir(messagesDir, { recursive: true });

    const fileName = `${Date.now()}-${sanitizedData.email.replace(/[@.]/g, '_')}.json`;
    const filePath = path.join(messagesDir, fileName);

    await fs.writeFile(filePath, JSON.stringify(sanitizedData, null, 2), 'utf-8');

    // 이메일 알림 발송
    const emailSent = await sendNotificationEmail({
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      message: sanitizedData.message,
      timestamp: sanitizedData.timestamp,
    });

    // 콘솔 로그 (개발/디버깅용)
    if (process.env.NODE_ENV === 'development') {
      console.log('📧 새 문의 메시지:', {
        name: sanitizedData.name,
        email: sanitizedData.email,
        subject: sanitizedData.subject,
        timestamp: sanitizedData.timestamp,
        emailSent,
      });
    }

    return NextResponse.json({
      success: true,
      message: '메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: '메시지 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
