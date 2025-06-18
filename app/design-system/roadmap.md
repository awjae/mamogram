# Tailwind CSS v4 학습 로드맵 📘

Tailwind CSS를 처음 배우는 개발자를 위한 실습 중심 로드맵입니다.  
각 주제별로 자주 사용하는 유틸리티 클래스와 예제 코드를 포함하여 실전 감각을 키울 수 있도록 구성했습니다.

---

## 박스 모델과 텍스트 스타일링

**목표**  
텍스트 색상, 배경색, 여백, 패딩, 테두리 등 기초적인 스타일 속성을 익힌다.

**주요 클래스**
- `text-`: 텍스트 색상, 크기
- `bg-`: 배경 색상
- `p-`, `m-`: 패딩/마진
- `rounded`: 테두리 둥글기
- `border`, `shadow`: 테두리 및 그림자
- `font-`, `text-center`: 글꼴 스타일, 정렬

**예제**
```html
<div class="bg-blue-100 text-blue-800 p-6 m-4 rounded-lg shadow font-semibold text-center">
  Hello, Tailwind CSS!
</div>
```

---

## 레이아웃 구성 (Flexbox & Grid)

**목표**  
요소를 가로로 배치하고 정렬하며, 반응형 그리드 구성을 익힌다.

**주요 클래스**
- `flex`, `justify-`, `items-`: Flexbox 정렬
- `gap-`: 요소 간 간격
- `grid`, `grid-cols-`, `place-items-`: CSS Grid 레이아웃

**예제**
```html
<div class="flex justify-between items-center bg-gray-100 p-4">
  <div class="text-sm font-bold">Logo</div>
  <div class="flex gap-4">
    <a href="#" class="text-blue-500">Home</a>
    <a href="#" class="text-blue-500">About</a>
    <a href="#" class="text-blue-500">Contact</a>
  </div>
</div>
```

---

## 반응형 디자인

**목표**  
뷰포트 크기에 따라 레이아웃이나 스타일이 자동으로 변경되도록 구현한다.

**주요 클래스**
- 브레이크포인트 접두어: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- 레이아웃 대응: `hidden`, `block`, `w-`, `text-sm`, `text-lg`

**예제**
```html
<div class="text-sm md:text-base lg:text-lg bg-yellow-100 p-4">
  반응형 텍스트 크기 예제입니다.
</div>
```

---

## 버튼 및 상태 기반 스타일

**목표**  
사용자 상호작용에 따른 상태 변화(hover, focus 등)를 적용한다.

**주요 클래스**
- `hover:`, `focus:`, `active:`
- `transition`, `duration-`: 애니메이션 효과

**예제**
```html
<button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none transition duration-300">
  Click Me
</button>
```

---

## 다크 모드 대응

**목표**  
Tailwind의 다크 모드 기능을 활용해 테마를 적용한다.

**주요 클래스**
- `dark:`, `dark:bg-`, `dark:text-`

**예제**
```html
<div class="bg-white text-black dark:bg-gray-900 dark:text-white p-4">
  다크 모드에서도 잘 보여요!
</div>
```

---

## 컴포넌트 조합 (카드, 폼 등)

**목표**  
실전에서 자주 사용하는 UI 구성요소를 조립해본다.

**주요 클래스**
- 카드: `shadow`, `rounded`, `overflow-hidden`
- 폼: `input`, `label`, `placeholder`, `focus:`
- 리스트: `divide-y`, `space-y-`

**예제**
```html
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://via.placeholder.com/400x200" alt="Card image">
  <div class="p-4">
    <h2 class="font-bold text-xl mb-2">Card Title</h2>
    <p class="text-gray-700 text-base">Card content goes here. It's a great example.</p>
  </div>
</div>
```

---

## 커스텀 설정 사용 (tailwind.config.js)

**목표**  
tailwind.config.js 파일을 사용해 색상, 폰트 등 커스터마이징을 적용한다.

**예제 설정**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
      },
    },
  },
}
```

**사용 예제**
```html
<div class="bg-primary text-white p-4">
  커스텀 색상 적용!
</div>
```
