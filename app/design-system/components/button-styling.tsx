
interface ButtonStylingProps {
  label?: string;
}

export function ButtonStyling({ label = "Click Me" }: ButtonStylingProps) {
  return (
    <div className="space-y-4">
      <div className="bg-green-50 p-6 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-2">버튼 및 상태 기반 스타일</h2>
        <p className="text-gray-700 mb-4">
          사용자 상호작용에 따른 상태 변화(hover, focus 등)를 적용한 버튼 예제입니다.
        </p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none transition duration-300 font-semibold"
        >
          {label}
        </button>
        <div className="mt-4 text-xs text-gray-500">
          <span className="inline-block bg-gray-200 rounded px-2 py-1 mr-2">hover:bg-green-600</span>
          <span className="inline-block bg-gray-200 rounded px-2 py-1 mr-2">focus:outline-none</span>
          <span className="inline-block bg-gray-200 rounded px-2 py-1">transition duration-300</span>
        </div>
      </div>
    </div>
  );
}