# Tailwind CSS 기반 디자인 시스템 구축 로드맵

> 🎯 목표: Tailwind CSS를 기반으로, 다크모드 및 반응형을 고려한 자체 디자인 시스템을 단계적으로 구축한다.

---

## 🏁 Step 0: 초기 세팅

- Tailwind 설정 파일(`tailwind.config.ts`)에서 `darkMode: 'class'`로 설정
- 테마 확장을 통해 색상, 폰트, spacing, radius 등의 디자인 토큰을 정의
- 전역 Reset 및 기본 스타일(`@layer base`) 설정
- 다크모드 전환을 위한 HTML 클래스 토글 로직 구현
- CSS 유틸리티 클래스 사용 시 줄 정렬, 그룹화 등 가독성을 위한 규칙 정립

---

## 🔹 Step 1: Foundation 컴포넌트

**디자인 시스템의 핵심 토대가 되는 요소들**

### 1. Color Palette
- primary, secondary, background, surface, border, foreground 등의 색상 체계 정의
- light/dark 모드에 따라 대응되는 컬러셋 구성

### 2. Typography
- Heading, body, caption, label 등 텍스트 스타일 정의
- 텍스트 계층 구조 설계 및 시멘틱한 클래스 적용

### 3. Spacing & Layout
- padding, margin, grid/gap 시스템 정의
- 기본 Layout 단위: Container, Section, FlexRow, FlexCol, Stack 등 설계

### 4. Theme Provider
- 다크모드 전환을 위한 toggle 기능 제공
- 사용자 설정을 LocalStorage 등에 저장하여 유지

---

## 🔹 Step 2: Atomic 컴포넌트

**하나의 기능 또는 역할을 가진 가장 작은 UI 단위**

### 1. Button
- 다양한 variant와 size 제공
- 기본 상태, hover, focus, disabled 상태 지원
- 다크모드 대응

### 2. Input / Textarea
- label, placeholder, error 메시지 구조 설계
- focus, disabled, invalid 상태 처리

### 3. Label / HelperText / ErrorText
- 접근성을 고려한 label과 설명 컴포넌트 분리
- 상태에 따라 텍스트 컬러 및 크기 변화

### 4. Badge / Chip / Tag
- 색상 variant, outline 여부, 삭제 가능 여부 등 옵션 제공

### 5. Icon
- 컬러/크기 조정 가능
- SVG 기반이거나 아이콘 라이브러리 연동 고려

### 6. Skeleton / Loading Spinner
- 로딩 상태를 보여주기 위한 기본 컴포넌트
- 다크모드 시 명도 대비 고려

---

## 🔹 Step 3: Composite 컴포넌트

**여러 Atomic 컴포넌트를 조합한 복합 UI 요소**

### 1. Card
- Header, Body, Footer 구조 구성
- 그림자, padding, radius 적용
- 반응형 너비 대응

### 2. Modal
- 오버레이, 포커스 트랩, 키보드 제어 등 포함
- 다크모드 시 배경 흐림/명도 고려

### 3. Dropdown
- 트리거 + 아이템 리스트 구조
- 외부 클릭 감지 및 키보드 접근성 고려

### 4. Tabs / Accordion
- 다크모드/반응형 상태 모두 대응
- 상태 관리 구조 명확히 정의

### 5. Toast / Snackbar
- 메시지 타입(success, error, info 등)에 따른 스타일 변경
- 위치, 자동 종료, 애니메이션 처리 고려

---

## 🔹 Step 4: Template Layout

**전체 페이지 구조 설계를 위한 레이아웃 구성 요소**

### 1. AppLayout
- Header, Sidebar, Content 구조화
- 반응형으로 사이드바 show/hide 지원

### 2. DashboardLayout
- 카드 기반의 그리드 레이아웃
- 다양한 해상도에서 보기 좋게 구성

### 3. AuthLayout
- 폼 중심의 중앙 정렬 레이아웃
- 모바일 최적화

### 4. PageSection
- 제목, 설명, 콘텐츠로 구성된 섹션 단위
- 페이지 구성 재사용성 확보

---

## 📱 반응형 설계 전략

- Tailwind의 breakpoint 유틸리티(`sm:`, `md:`, `lg:` 등)를 적극 활용
- 기본은 모바일 중심(Mobile-first), 점진적으로 해상도 확장
- Grid 레이아웃, Flex 컬럼 조합으로 적응형 레이아웃 구성
- 필요 시 Container Query 기능도 활용하여 부모 너비 기반 반응형 처리

---

## 🌗 다크모드 설계 전략

- `darkMode: 'class'` 설정을 기반으로, HTML 태그에 class를 제어
- `dark:` prefix 유틸리티로 다크모드 스타일 지정
- 디자인 토큰(`bg-surface`, `text-foreground` 등)을 라이트/다크 양쪽에 맞게 지정
- 다크모드 전환 UI 구현 및 사용자 설정 저장

---

## 🛠 디자인 시스템 확장 전략

- 공통 스타일은 `@apply`, `@layer components`를 활용해 추출
- `clsx`, `tailwind-variants` 등 유틸리티로 스타일 재사용성과 가독성 확보
- 각 컴포넌트는 문서화하여 Storybook 또는 UI 문서 페이지로 정리

---

## 🎯 구축 순서 요약

1. 초기 설정 (Tailwind + 다크모드 + 토큰 구성)
2. Foundation 설계 (색상, 타이포그래피, 레이아웃 기준)
3. Atomic 컴포넌트 정의 (단일 역할 UI 구성요소)
4. Composite 컴포넌트 구성 (재사용 가능한 복합 UI)
5. Template Layout 설계 (전체 페이지 구조)
6. 반응형, 다크모드 전략 정비
7. 디자인 시스템 문서화 및 배포

---

