// Spacing & Layout 디자인 시스템 예시 구현

import React from "react";

// 컨테이너 컴포넌트
export function Container({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`max-w-5xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}

// 섹션 컴포넌트
export function Section({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <section className={`my-8 ${className}`}>
      {children}
    </section>
  );
}

// FlexRow 컴포넌트
export function FlexRow({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`flex flex-row gap-4 ${className}`}>
      {children}
    </div>
  );
}

// FlexCol 컴포넌트
export function FlexCol({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {children}
    </div>
  );
}

// Stack 컴포넌트 (수직 간격)
export function Stack({ children, space = 4, className = "" }: React.PropsWithChildren<{ space?: number; className?: string }>) {
  return (
    <div className={`space-y-${space} ${className}`}>
      {children}
    </div>
  );
}

// 사용 예시
export default function LayoutExample() {
  return (
    <Container>
      <Section>
        <h2 className="text-xl font-bold mb-4">Spacing & Layout 예시</h2>
        <FlexRow>
          <div className="bg-blue-100 p-4 rounded">Row 1</div>
          <div className="bg-blue-200 p-4 rounded">Row 2</div>
        </FlexRow>
        <FlexCol className="mt-6">
          <div className="bg-green-100 p-4 rounded">Col 1</div>
          <div className="bg-green-200 p-4 rounded">Col 2</div>
        </FlexCol>
        <Stack space={6} className="mt-6">
          <div className="bg-yellow-100 p-4 rounded">Stack 1</div>
          <div className="bg-yellow-200 p-4 rounded">Stack 2</div>
        </Stack>
      </Section>
    </Container>
  );
}