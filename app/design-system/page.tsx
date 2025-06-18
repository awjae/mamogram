export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          디자인 시스템
        </h1>
        
        <div className="space-y-8">
          {/* 색상 섹션 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              색상
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-background border border-border rounded-lg p-4">
                <div className="w-full h-16 bg-background rounded mb-2"></div>
                <p className="text-sm font-medium">Background</p>
                <p className="text-xs text-muted-foreground">var(--background)</p>
              </div>
              <div className="bg-foreground border border-border rounded-lg p-4">
                <div className="w-full h-16 bg-foreground rounded mb-2"></div>
                <p className="text-sm font-medium text-background">Foreground</p>
                <p className="text-xs text-muted-foreground">var(--foreground)</p>
              </div>
            </div>
          </section>

          {/* 타이포그래피 섹션 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              타이포그래피
            </h2>
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold">제목 1 (4xl)</h1>
                <p className="text-sm text-muted-foreground">font-bold, 2.25rem</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">제목 2 (2xl)</h2>
                <p className="text-sm text-muted-foreground">font-semibold, 1.5rem</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">제목 3 (xl)</h3>
                <p className="text-sm text-muted-foreground">font-medium, 1.25rem</p>
              </div>
              <div>
                <p className="text-base">본문 텍스트 (base)</p>
                <p className="text-sm text-muted-foreground">1rem</p>
              </div>
              <div>
                <p className="text-sm">작은 텍스트 (sm)</p>
                <p className="text-xs text-muted-foreground">0.875rem</p>
              </div>
            </div>
          </section>

          {/* 버튼 섹션 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              버튼
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity">
                기본 버튼
              </button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                아웃라인 버튼
              </button>
              <button className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
                보조 버튼
              </button>
            </div>
          </section>

          {/* 카드 섹션 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              카드
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">카드 제목</h3>
                <p className="text-muted-foreground mb-4">
                  이것은 카드 컴포넌트의 예시입니다. 다양한 콘텐츠를 담을 수 있습니다.
                </p>
                <button className="px-3 py-1 bg-foreground text-background rounded text-sm">
                  액션
                </button>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">또 다른 카드</h3>
                <p className="text-muted-foreground">
                  카드는 정보를 그룹화하고 시각적으로 구분하는 데 사용됩니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
