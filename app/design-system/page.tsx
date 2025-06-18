import { Styling } from "./components/styling";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          디자인 시스템
        </h1>

        <Styling />

      </div>
    </div>
  );
}
