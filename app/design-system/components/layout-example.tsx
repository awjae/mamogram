
interface LayoutExampleProps {
  logoText?: string;
}

export function LayoutExample({ logoText = "Logo" }: LayoutExampleProps) {
  return <div className="space-y-4">
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
      <div className="text-sm font-bold">{logoText}</div>
      <div className="flex gap-4">
        <a href="#" className="text-blue-500 hover:underline">
          Home
        </a>
        <a href="#" className="text-blue-500 hover:underline">
          About
        </a>
        <a href="#" className="text-blue-500 hover:underline">
          Contact
        </a>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded border">
        <p className="text-sm text-gray-500 mb-2">왼쪽 정렬</p>
        <p className="text-left text-gray-700">이 텍스트는 왼쪽에 정렬되어 있습니다.</p>
      </div>
      <div className="bg-white p-4 rounded border">
        <p className="text-sm text-gray-500 mb-2">가운데 정렬</p>
        <p className="text-center text-gray-700">이 텍스트는 가운데에 정렬되어 있습니다.</p>
      </div>
    </div>
  </div>
}
