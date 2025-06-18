
interface StylingExampleProps {
  title?: string;
  description?: string;
}

export function Styling({ 
  title = "박스 모델과 텍스트 스타일링 예제", 
  description = "Tailwind CSS의 기본 스타일링 클래스들을 활용한 예제입니다." 
}: StylingExampleProps) {
  return (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* 기본 박스 모델 예제 */}
      <div className="bg-blue-100 text-blue-800 p-6 m-4 rounded-lg shadow font-semibold text-center">
        Hello, Tailwind CSS!
      </div>

      {/* 다양한 텍스트 스타일링 예제 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">텍스트 스타일링</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500 mb-2">텍스트 색상</p>
            <p className="text-red-500 font-medium">빨간색 텍스트</p>
            <p className="text-green-600 font-medium">초록색 텍스트</p>
            <p className="text-blue-700 font-medium">파란색 텍스트</p>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500 mb-2">텍스트 크기</p>
            <p className="text-xs text-gray-700">매우 작은 텍스트 (xs)</p>
            <p className="text-sm text-gray-700">작은 텍스트 (sm)</p>
            <p className="text-base text-gray-700">기본 텍스트 (base)</p>
            <p className="text-lg text-gray-700">큰 텍스트 (lg)</p>
          </div>
        </div>
      </div>

      {/* 여백과 패딩 예제 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">여백과 패딩</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-100 p-2 rounded border-2 border-yellow-300">
            <p className="text-sm text-yellow-800">패딩 2 (p-2)</p>
          </div>
          <div className="bg-green-100 p-4 rounded border-2 border-green-300">
            <p className="text-sm text-green-800">패딩 4 (p-4)</p>
          </div>
          <div className="bg-purple-100 p-6 rounded border-2 border-purple-300">
            <p className="text-sm text-purple-800">패딩 6 (p-6)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-100 rounded border-2 border-red-300">
            <div className="m-2 bg-white p-2 rounded">
              <p className="text-sm text-red-800">마진 2 (m-2)</p>
            </div>
          </div>
          <div className="bg-blue-100 rounded border-2 border-blue-300">
            <div className="m-4 bg-white p-2 rounded">
              <p className="text-sm text-blue-800">마진 4 (m-4)</p>
            </div>
          </div>
          <div className="bg-indigo-100 rounded border-2 border-indigo-300">
            <div className="m-6 bg-white p-2 rounded">
              <p className="text-sm text-indigo-800">마진 6 (m-6)</p>
            </div>
          </div>
        </div>
      </div>

      {/* 테두리와 그림자 예제 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">테두리와 그림자</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="text-sm text-gray-600">기본 테두리 (border)</p>
            </div>
            <div className="bg-white p-4 rounded border-2 border-blue-500">
              <p className="text-sm text-gray-600">두꺼운 파란색 테두리</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-600">둥근 모서리 (rounded-lg)</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-600">기본 그림자 (shadow)</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <p className="text-sm text-gray-600">중간 그림자 (shadow-md)</p>
            </div>
            <div className="bg-white p-4 rounded shadow-lg">
              <p className="text-sm text-gray-600">큰 그림자 (shadow-lg)</p>
            </div>
          </div>
        </div>
      </div>

      {/* 글꼴 스타일 예제 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">글꼴 스타일</h3>
        
        <div className="bg-white p-4 rounded-lg border space-y-2">
          <p className="font-light text-gray-700">가벼운 글꼴 (font-light)</p>
          <p className="font-normal text-gray-700">일반 글꼴 (font-normal)</p>
          <p className="font-medium text-gray-700">중간 글꼴 (font-medium)</p>
          <p className="font-semibold text-gray-700">반굵은 글꼴 (font-semibold)</p>
          <p className="font-bold text-gray-700">굵은 글꼴 (font-bold)</p>
        </div>
      </div>

      {/* 텍스트 정렬 예제 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">텍스트 정렬</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded border">
            <p className="text-sm text-gray-500 mb-2">왼쪽 정렬</p>
            <p className="text-left text-gray-700">이 텍스트는 왼쪽에 정렬되어 있습니다.</p>
          </div>
          <div className="bg-white p-4 rounded border">
            <p className="text-sm text-gray-500 mb-2">가운데 정렬</p>
            <p className="text-center text-gray-700">이 텍스트는 가운데에 정렬되어 있습니다.</p>
          </div>
          <div className="bg-white p-4 rounded border">
            <p className="text-sm text-gray-500 mb-2">오른쪽 정렬</p>
            <p className="text-right text-gray-700">이 텍스트는 오른쪽에 정렬되어 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
