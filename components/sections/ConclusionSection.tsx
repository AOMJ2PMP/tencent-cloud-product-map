import { SectionWrap } from "@/components/ui";

const tips = [
  {
    num: "01",
    border: "border-green-200",
    numColor: "text-green-200",
    title: "宣讲基础云产品",
    desc: "计算、存储、网络、数据库核心产品两站基本对等。可放心参考国际站目录，不存在「承诺了但无法交付」的风险。",
  },
  {
    num: "02",
    border: "border-red-200",
    numColor: "text-red-200",
    title: "宣讲 AI 能力时要区分边界",
    desc: "需明确区分「国际站已上架」与「仅国内可用」，尤其混元大模型全系列目前国际站缺失，避免给海外客户错误预期。",
  },
  {
    num: "03",
    border: "border-amber-200",
    numColor: "text-amber-200",
    title: "行业解决方案以「路线图」呈现",
    desc: "国际场合推介行业解决方案时，以定制化合作或路线图方式呈现，而非标准 self-service 产品——这些产品在国际站均无法自助购买。",
  },
  {
    num: "04",
    border: "border-blue-200",
    numColor: "text-blue-200",
    title: "善用国际站独有产品作为亮点",
    desc: "GOA（跨国内网加速）、TRRO（远程操控）等产品是腾讯云面向跨国企业和工业场景的差异化能力，值得作为专项宣讲点深入准备。",
  },
];

const coverage = [
  { label: "核心基础云", intl: "完整", cn: "完整", status: "green" },
  { label: "AI 基础（OCR/ASR/TTS 等）", intl: "完整", cn: "完整", status: "green" },
  { label: "大数据（EMR/DLC/TCHouse C/D/P）", intl: "完整", cn: "完整", status: "green" },
  { label: "安全基础产品", intl: "基本完整", cn: "完整", status: "yellow" },
  { label: "AI 大模型（混元系列）", intl: "❌ 缺失", cn: "完整", status: "red" },
  { label: "DevOps / 低代码", intl: "❌ 缺失", cn: "完整", status: "red" },
  { label: "IoT", intl: "1 个", cn: "6+ 个", status: "red" },
  { label: "行业解决方案", intl: "4 个", cn: "50+ 个", status: "red" },
];

export function ConclusionSection() {
  return (
    <SectionWrap
      id="conclusion"
      eyebrow="Section 10"
      title="结论与 Evangelist 建议"
      subtitle="基于以上分析，腾讯云国际化的核心挑战是：基础云已具备竞争力，但 AI 大模型与行业解决方案的出海进程仍严重滞后。"
    >
      {/* Coverage matrix */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">产品覆盖全景</h3>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">方向</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">国际站</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">国内站</th>
              </tr>
            </thead>
            <tbody>
              {coverage.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="px-5 py-3.5 font-medium text-gray-700">{row.label}</td>
                  <td className={`px-5 py-3.5 font-medium ${
                    row.status === "green" ? "text-green-600" :
                    row.status === "yellow" ? "text-yellow-600" : "text-red-500"
                  }`}>{row.intl}</td>
                  <td className="px-5 py-3.5 text-green-600 font-medium">{row.cn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Evangelist tips */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">对 Evangelist 的实际意义</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {tips.map((t) => (
            <div key={t.num} className={`rounded-2xl border bg-white p-6 ${t.border}`}>
              <div className={`text-5xl font-black leading-none mb-3 ${t.numColor}`}>{t.num}</div>
              <div className="font-semibold text-gray-800 mb-2">{t.title}</div>
              <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100 text-center text-xs text-gray-300">
        由 Claude Code 辅助生成 · 腾讯云产品线更新频繁，建议定期复核
      </div>
    </SectionWrap>
  );
}
