## 텍스트 기본 크기
| 클래스         | 크기 (font-size)  | 줄간격 (line-height) |
| ----------- | --------------- | ----------------- |
| `text-xs`   | 0.75rem (12px)  | 1rem (16px)       |
| `text-sm`   | 0.875rem (14px) | 1.25rem (20px)    |
| `text-base` | 1rem (16px)     | 1.5rem (24px)     |
| `text-lg`   | 1.125rem (18px) | 1.75rem (28px)    |
| `text-xl`   | 1.25rem (20px)  | 1.75rem           |
| `text-2xl`  | 1.5rem (24px)   | 2rem              |
| `text-3xl`  | 1.875rem (30px) | 2.25rem           |
| `text-4xl`  | 2.25rem (36px)  | 2.5rem            |
| `text-5xl`  | 3rem (48px)     | 1                 |
| `text-6xl`  | 3.75rem (60px)  | 1                 |
| ...         | 계속 증가           |                   |

## 텍스트 굵기
| 클래스               | CSS 값 |
| ----------------- | ----- |
| `font-thin`       | `100` |
| `font-extralight` | `200` |
| `font-light`      | `300` |
| `font-normal`     | `400` |
| `font-medium`     | `500` |
| `font-semibold`   | `600` |
| `font-bold`       | `700` |
| `font-extrabold`  | `800` |
| `font-black`      | `900` |


## 반응형 브레이크포인트 단위
| 접두어    | 의미         | 적용 시작 화면 너비 |
| ------ | ---------- | ----------- |
| `sm:`  | 작은 화면 이상   | `640px` 이상  |
| `md:`  | 중간 화면 이상   | `768px` 이상  |
| `lg:`  | 큰 화면 이상    | `1024px` 이상 |
| `xl:`  | 매우 큰 화면 이상 | `1280px` 이상 |
| `2xl:` | 초대형 화면 이상  | `1536px` 이상 |


## 여백 단위
| 클래스 숫자                      | rem 단위    | px 기준 (기본값 기준) |
| --------------------------- | --------- | -------------- |
| `0`                         | `0rem`    | `0px`          |
| `1`                         | `0.25rem` | `4px`          |
| `2`                         | `0.5rem`  | `8px`          |
| `3`                         | `0.75rem` | `12px`         |
| `4`                         | `1rem`    | `16px`         |
| `5`                         | `1.25rem` | `20px`         |
| `6`                         | `1.5rem`  | `24px`         |
| `8`                         | `2rem`    | `32px`         |
| `10`                        | `2.5rem`  | `40px`         |
| `12`, `16`, `20`, ... 계속 증가 |           |                |

## 테두리 둥글기
| 클래스            | 값 (CSS 기준)        |
| -------------- | ----------------- |
| `rounded-none` | 0px               |
| `rounded-sm`   | 2px (`0.125rem`)  |
| `rounded`      | 4px (`0.25rem`)   |
| `rounded-md`   | 6px (`0.375rem`)  |
| `rounded-lg`   | 8px (`0.5rem`)    |
| `rounded-xl`   | 12px (`0.75rem`)  |
| `rounded-2xl`  | 16px (`1rem`)     |
| `rounded-full` | 완전한 원형 (`9999px`) |

## 애니매이션 
| 클래스                     | 기능            |
| ----------------------- | ------------- |
| `transition`            | 부드러운 전환 효과    |
| `duration-300`          | 지속 시간 (ms)    |
| `ease-in`, `ease-out`   | 이징 효과         |
| `transform`             | 변형 가능하게 설정    |
| `scale-110`, `rotate-6` | 확대/회전 등 변형 값  |
| `hover:` 또는 `focus:`    | 상태 기반 스타일링 적용 |


✅ 요약: Tailwind 기본 단위 개념 카테고리
📏 크기: text-, w-, h-, p-, m- 등
🖥️ 반응형: sm:, md:, lg:, ...
🎨 색상: bg-, text-, border- + 색상 이름/단계
🧱 모양: rounded-, border-
⚙️ 글꼴: font-, text-, tracking-, leading-
🌀 상태 및 효과: hover:, focus:, transition, duration-