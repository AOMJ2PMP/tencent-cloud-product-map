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

const industries = [
  { name: "教育", products: ["智聆口语评测", "口语评测（基础版/新版）", "数学作业批改", "英文作文批改", "互动白板"] },
  { name: "医疗", products: ["智能导诊", "AI 临床助手", "AI 就医助手", "智能预问诊", "家医助手", "医疗报告结构化", "精准预约", "数智医疗影像平台", "腾讯健康组学平台"] },
  { name: "零售 & 营销", products: ["智慧零售增长平台", "商场客留大数据", "客户数据平台", "营销自动化", "营销智能推荐", "画像分析", "融合分析"] },
  { name: "金融", products: ["企业金融服务平台", "金融专有云开发测试平台", "QTrade（金融行业）"] },
  { name: "政务 & 传媒", products: ["传媒云原生移动开发平台", "数字会展", "文旅客情大数据"] },
];

export function ChinaIndustrySection() {
  return (
    <SectionWrap
      id="china-industry"
      eyebrow="国内站独有 · 行业解决方案"
      title="行业解决方案"
      subtitle="这是两站差距最大的方向。国内站有 50+ 个行业专属产品，覆盖教育、医疗、零售、金融、传媒等。国际站目前仅有 4 个。"
    >
      <Callout type="warning">
        行业解决方案在国际场合推介时，建议以「路线图」或「定制化合作」方式呈现，而非标准 self-service 产品——这些产品在国际站均无法直接自助购买。
      </Callout>

      <div className="mt-6 mb-8 grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-gray-100">
            <div className="px-5 py-5 bg-gray-50">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">国际站</p>
              <p className="text-4xl font-black text-gray-300">4</p>
              <p className="text-xs text-gray-400 mt-1">互动白板、基因组学、医疗影像、肺炎CT分析</p>
            </div>
            <div className="px-5 py-5 bg-blue-600">
              <p className="text-[10px] font-semibold text-blue-200 uppercase tracking-wider mb-1">国内站</p>
              <p className="text-4xl font-black text-white">50+</p>
              <p className="text-xs text-blue-200 mt-1">覆盖教育、医疗、零售、金融、传媒等多个垂直行业</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-center">
          <p className="text-amber-800 text-sm leading-relaxed">
            行业解决方案是腾讯云国内最具深度的产品线，但几乎完全未出海，是腾讯云国际化路径上最大的待解难题。
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {industries.map((ind) => (
          <div key={ind.name} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <div className="text-sm font-semibold text-gray-700 mb-3">{ind.name}</div>
            <div className="flex flex-wrap gap-2">
              {ind.products.map((p) => (
                <span key={p} className="text-xs bg-white border border-gray-200 text-gray-500 px-3 py-1 rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">国际站已上架的 4 个行业产品</h3>
        <DataTable
          headers={["产品", "国际站", "国内站"]}
          rows={[
            { cells: [<P key="n" name="互动白板 TIW" />, <span key="i" className="text-green-600">✅</span>, <span key="c" className="text-green-600">✅</span>] },
            { cells: [<P key="n" name="腾讯健康组学平台" />, <span key="i" className="text-green-600">✅</span>, <span key="c" className="text-green-600">✅</span>] },
            { cells: [<P key="n" name="数智医疗影像平台" />, <span key="i" className="text-green-600">✅</span>, <span key="c" className="text-green-600">✅</span>] },
            { cells: [<P key="n" name="肺炎 CT 图像分析" />, <span key="i" className="text-green-600">✅</span>, <span key="c" className="text-green-600">✅</span>] },
            { cells: ["教育类产品（5+）", <span key="i" className="text-red-400">❌</span>, <span key="c" className="text-green-600">✅</span>] },
            { cells: ["医疗 AI 类产品（8+）", <span key="i" className="text-red-400">❌</span>, <span key="c" className="text-green-600">✅</span>] },
            { cells: ["零售 & 营销类（7+）", <span key="i" className="text-red-400">❌</span>, <span key="c" className="text-green-600">✅</span>] },
            { cells: ["金融类产品", <span key="i" className="text-red-400">❌</span>, <span key="c" className="text-green-600">✅</span>] },
          ]}
        />
      </div>
    </SectionWrap>
  );
}
