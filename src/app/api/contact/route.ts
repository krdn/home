import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
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

    // 콘솔 로그 (개발/디버깅용)
    console.log('📧 새 문의 메시지:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      timestamp: sanitizedData.timestamp,
    });

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
