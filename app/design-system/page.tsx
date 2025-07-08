import { ButtonStyling } from "./components/button-styling";
import { LayoutExample } from "./components/layout-example";
import { ResponsiveExample } from "./components/responsive-example";
import { Styling } from "./components/styling";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          디자인 시스템
        </h1>

        <Styling />

        <LayoutExample />

        <ResponsiveExample />
      
        <ButtonStyling />
      </div>
    </div>
  );
}
