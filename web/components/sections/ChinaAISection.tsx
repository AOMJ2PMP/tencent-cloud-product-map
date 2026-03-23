import { SectionWrap, DataTable, Callout, ProductLinkIcon } from "@/components/ui";
import { PRODUCT_LINKS } from "@/data/productLinks";

function P({ name }: { name: string }) {
  const links = PRODUCT_LINKS[name];
  return (
    <span className="font-semibold text-gray-800 inline-flex items-center">
      {name}
      <ProductLinkIcon url={links?.cn ?? links?.intl} />
    </span>
  );
}

export function ChinaAISection() {
  return (
    <SectionWrap
      id="china-ai"
      eyebrow="国内站独有 · AI 大模型"
      title="AI 大模型产品"
      subtitle="这是国际站与国内站差距最显著的技术方向。混元大模型系列是腾讯云 AI 战略的核心，但目前完全缺席国际站。"
    >
      <Callout type="critical">
        <strong>Evangelist 重点注意：</strong>混元大模型国际站尚未上架。在面向海外客户宣讲腾讯云 AI 能力时，需明确区分「国际站已上架」与「仅国内可用」，避免产生错误预期。
      </Callout>

      <div className="mt-6">
        <DataTable
          headers={["产品", "能力描述", "国际站状态"]}
          rows={[
            {
              cells: [
                <P key="n" name="腾讯混元大模型系列" />,
                "涵盖生文、生视频、生图、生3D，腾讯自研基础大模型",
                <span key="s" className="text-red-500 text-xs font-semibold">❌ 完全缺失</span>,
              ],
              highlight: true,
            },
            {
              cells: [
                <P key="n" name="腾讯云智能体开发平台 ADP" />,
                "基于大模型构建 AI Agent 的低代码开发平台",
                <span key="s" className="text-yellow-600 text-xs font-semibold">⚠️ 国际站有，功能受限</span>,
              ],
            },
            {
              cells: [
                <span key="n" className="font-semibold text-gray-800">NLP 技术</span>,
                "中文 NLP 基础能力 API（分词、情感分析、实体识别等）",
                <span key="s" className="text-red-500 text-xs font-semibold">❌ 未上架</span>,
              ],
            },
            {
              cells: [
                <span key="n" className="font-semibold text-gray-800">视频理解 / 图像理解</span>,
                "多模态内容理解 API",
                <span key="s" className="text-red-500 text-xs font-semibold">❌ 未上架</span>,
              ],
            },
            {
              cells: [
                <P key="n" name="腾讯觅影" />,
                "医疗影像 AI 开放平台，面向医院和医疗机构",
                <span key="s" className="text-red-500 text-xs font-semibold">❌ 未上架</span>,
              ],
            },
            {
              cells: [
                <P key="n" name="腾讯同传" />,
                "实时语音翻译，适用于大型会议场景",
                <span key="s" className="text-red-500 text-xs font-semibold">❌ 未上架</span>,
              ],
            },
            {
              cells: [
                <span key="n" className="font-semibold text-gray-800">联网搜索 / 图像搜索 API</span>,
                "RAG 增强检索场景下的联网检索能力",
                <span key="s" className="text-red-500 text-xs font-semibold">❌ 未上架</span>,
              ],
            },
          ]}
        />
      </div>

      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        {[
          {
            label: "两站均有的 AI 基础产品",
            items: "OCR、ASR、TTS、机器翻译、人脸识别、人脸核身、TI 平台、图像创作、数智人 IVH、Face Fusion",
            color: "bg-green-50 border-green-200",
          },
          {
            label: "国际站有但功能受限",
            items: "腾讯云智能体开发平台 ADP（部分功能）",
            color: "bg-yellow-50 border-yellow-200",
          },
          {
            label: "仅国内可用",
            items: "混元大模型全系列、NLP技术、视频/图像理解、觅影、同传、联网搜索 API",
            color: "bg-red-50 border-red-200",
          },
        ].map((c) => (
          <div key={c.label} className={`${c.color} border rounded-2xl p-5`}>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{c.label}</div>
            <p className="text-gray-600 text-sm leading-relaxed">{c.items}</p>
          </div>
        ))}
      </div>
    </SectionWrap>
  );
}
