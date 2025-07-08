
interface ResponsiveExampleProps {
  text?: string;
}

export function ResponsiveExample({
  text = "반응형 텍스트 크기 예제입니다.",
}: ResponsiveExampleProps) {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-100 p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-2">반응형 텍스트 크기</h2>
        <div className="text-sm md:text-base lg:text-lg text-gray-800">
          {text}
        </div>
        <div className="mt-4">
          <span className="inline-block bg-gray-200 text-xs rounded px-2 py-1 mr-2">text-sm</span>
          <span className="inline-block bg-gray-200 text-xs rounded px-2 py-1 mr-2 md:inline hidden">md:text-base</span>
          <span className="inline-block bg-gray-200 text-xs rounded px-2 py-1 lg:inline hidden">lg:text-lg</span>
        </div>
      </div>
    </div>
  );
}