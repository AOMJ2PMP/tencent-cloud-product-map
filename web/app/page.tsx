import { Sidebar } from "@/components/Sidebar";
import { SummarySection } from "@/components/sections/SummarySection";
import { OverlapSection } from "@/components/sections/OverlapSection";
import { ChinaComputeSection } from "@/components/sections/ChinaComputeSection";
import { ChinaAISection } from "@/components/sections/ChinaAISection";
import { ChinaStorageDBSection } from "@/components/sections/ChinaStorageDBSection";
import { ChinaSecurityNetSection } from "@/components/sections/ChinaSecurityNetSection";
import { ChinaDevIoTSection } from "@/components/sections/ChinaDevIoTSection";
import { ChinaIndustrySection } from "@/components/sections/ChinaIndustrySection";
import { IntlOnlySection } from "@/components/sections/IntlOnlySection";
import { ConclusionSection } from "@/components/sections/ConclusionSection";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-white font-[var(--font-geist-sans)]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <SummarySection />
        <OverlapSection />
        <ChinaComputeSection />
        <ChinaAISection />
        <ChinaStorageDBSection />
        <ChinaSecurityNetSection />
        <ChinaDevIoTSection />
        <ChinaIndustrySection />
        <IntlOnlySection />
        <ConclusionSection />
      </main>
    </div>
  );
}
