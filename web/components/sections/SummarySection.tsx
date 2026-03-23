import { SectionWrap } from "@/components/ui";

interface CompareCardProps {
  label: string;
  intlValue: string;
  cnValue: string;
  intlSub?: string;
  cnSub?: string;
  flipped?: boolean; // true = intl is bigger (rare)
}

function CompareCard({ label, intlValue, cnValue, intlSub, cnSub }: CompareCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
      </div>
      <div className="grid grid-cols-2 divide-x divide-gray-100">
        {/* International */}
        <div className="px-5 py-4 bg-gray-50">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">国际站</p>
          <p className="text-3xl font-black text-gray-400">{intlValue}</p>
          {intlSub && <p className="text-xs text-gray-400 mt-1">{intlSub}</p>}
        </div>
        {/* China */}
        <div className="px-5 py-4 bg-blue-600">
          <p className="text-[10px] font-semibold text-blue-200 uppercase tracking-wider mb-1">国内站</p>
          <p className="text-3xl font-black text-white">{cnValue}</p>
          {cnSub && <p className="text-xs text-blue-200 mt-1">{cnSub}</p>}
        </div>
      </div>
    </div>
  );
}

export function SummarySection() {
  return (
    <SectionWrap
      id="summary"
      eyebrow="For Tencent Cloud Evangelist Candidates"
      title="国际站 vs 国内站产品差异分析"
      subtitle="梳理腾讯云国际站与国内站的产品覆盖差异，帮助了解当前出海现状、潜在空白与宣讲边界。"
    >
      {/* Compare cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <CompareCard
          label="产品总数"
          intlValue="~175"
          cnValue="~350+"
          intlSub="tencentcloud.com"
          cnSub="cloud.tencent.com"
        />
        <CompareCard
          label="行业解决方案"
          intlValue="4"
          cnValue="50+"
          intlSub="互动白板等4个"
          cnSub="覆盖教育、医疗、零售等"
        />
        <CompareCard
          label="IoT 产品数"
          intlValue="1"
          cnValue="6+"
          intlSub="仅 IoT Hub"
          cnSub="含设备洞察、TencentOS等"
        />
      </div>

      {/* Key takeaways */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          {
            icon: "✅",
            title: "基础云基本对等",
            desc: "计算、存储、网络、数据库核心产品两站基本一致，是国际站的主要推广抓手。",
            bg: "bg-green-50 border-green-100",
          },
          {
            icon: "⚠️",
            title: "AI 大模型缺失",
            desc: "混元大模型系列（生文/生视频/生图/生3D）是国内战略重点，但国际站尚未上架。",
            bg: "bg-amber-50 border-amber-100",
          },
          {
            icon: "🚨",
            title: "行业方案差距最大",
            desc: "国内站 50+ 行业专属产品，国际站仅 4 个，是腾讯云国际化最大的空白地带。",
            bg: "bg-red-50 border-red-100",
          },
        ].map((c) => (
          <div key={c.title} className={`border rounded-2xl p-5 ${c.bg}`}>
            <div className="text-xl mb-2">{c.icon}</div>
            <div className="font-semibold text-gray-800 mb-1.5 text-sm">{c.title}</div>
            <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrap>
  );
}
