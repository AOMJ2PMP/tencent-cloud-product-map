import { SectionWrap, DataTable, Callout } from "@/components/ui";
import productsRaw from "@/data/products.json";

type Product = {
  id: string;
  name: string;
  name_en: string;
  category: string;
  availability: { intl: boolean; cn: boolean };
  urls: { intl?: string | null; cn?: string | null };
  purchase: {
    intl?: string | null;
    intl_cta?: string;
    cn?: string | null;
    cn_cta?: string;
    notes?: string;
  };
  free_tier: boolean;
};

const products = productsRaw as Product[];

const PURCHASE_LABELS: Record<string, { label: string; color: string; dot: string }> = {
  on_demand:     { label: "可直接购买",   color: "bg-green-100 text-green-700",  dot: "bg-green-500"  },
  hybrid:        { label: "部分自助",     color: "bg-yellow-100 text-yellow-700", dot: "bg-yellow-400" },
  contact_sales: { label: "需联系销售",   color: "bg-red-100 text-red-600",       dot: "bg-red-400"    },
};

function PurchaseBadge({ type }: { type: string }) {
  const cfg = PURCHASE_LABELS[type] ?? { label: type, color: "bg-gray-100 text-gray-600", dot: "bg-gray-400" };
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

export function PurchaseIntlSection() {
  const intlProducts = products.filter((p) => p.availability.intl && p.purchase.intl);

  const onDemand    = intlProducts.filter((p) => p.purchase.intl === "on_demand");
  const hybrid      = intlProducts.filter((p) => p.purchase.intl === "hybrid");
  const contactOnly = intlProducts.filter((p) => p.purchase.intl === "contact_sales");

  const byCategory = (list: Product[]) => {
    const map: Record<string, Product[]> = {};
    list.forEach((p) => { (map[p.category] ??= []).push(p); });
    return Object.entries(map).sort((a, b) => b[1].length - a[1].length);
  };

  return (
    <SectionWrap
      id="purchase-intl"
      eyebrow="购买方式 · 国际站"
      title="国际站购买方式分析"
      subtitle="基于对 158 个产品页面的实地访问，验证每个产品在 tencentcloud.com 上的实际购买路径。"
      alt
    >
      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { type: "on_demand",     count: onDemand.length,    desc: '有明确的「Buy Now」入口，无需联系销售' },
          { type: "hybrid",        count: hybrid.length,      desc: '控制台可开通，但同时也有「Contact Sales」入口' },
          { type: "contact_sales", count: contactOnly.length, desc: "仅联系销售通道，无任何自助购买路径" },
        ].map(({ type, count, desc }) => {
          const cfg = PURCHASE_LABELS[type];
          return (
            <div key={type} className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                <span className="text-sm font-semibold text-gray-700">{cfg.label}</span>
              </div>
              <div className="text-4xl font-black text-gray-900 mb-1">{count}</div>
              <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          );
        })}
      </div>

      <Callout type="info">
        <strong>重要说明：</strong>国际站绝大多数产品属于 <strong>hybrid</strong>——控制台有"Get Started"入口可直接开通，但页面同时也展示"Contact Sales"。这意味着基础用量可以自助，但企业定价/大规模采购仍需走销售。
      </Callout>

      {/* On-demand */}
      <div className="mt-8 space-y-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          可直接购买（{onDemand.length} 个）
        </h3>
        <div className="flex flex-wrap gap-2">
          {onDemand.map((p) => (
            <a
              key={p.id}
              href={p.urls.intl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs bg-green-50 border border-green-200 text-green-800 px-3 py-1.5 rounded-full hover:bg-green-100 transition-colors"
            >
              {p.name_en}
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H5.5M9.5 2.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          ))}
        </div>
      </div>

      {/* Contact sales */}
      <div className="mt-8 space-y-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          需联系销售（{contactOnly.length} 个）
        </h3>
        <DataTable
          headers={["产品", "类别", "说明"]}
          rows={contactOnly.map((p) => ({
            cells: [
              <span key="n" className="font-semibold text-gray-800">
                {p.name_en}
                {p.urls.intl && (
                  <a href={p.urls.intl} target="_blank" rel="noopener noreferrer" className="ml-1.5 inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-blue-600 transition-colors">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H5.5M9.5 2.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                )}
              </span>,
              <span key="c" className="text-gray-500 whitespace-nowrap text-xs">{p.category}</span>,
              <span key="note" className="text-gray-500 text-xs">{p.purchase.notes || "—"}</span>,
            ],
          }))}
        />
      </div>

      {/* Hybrid breakdown by category */}
      <div className="mt-8 space-y-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          部分自助（{hybrid.length} 个）· 按类别分布
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {byCategory(hybrid).map(([cat, items]) => (
            <div key={cat} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-600">{cat}</span>
                <span className="text-xs text-gray-400">{items.length} 个</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((p) => (
                  <a
                    key={p.id}
                    href={p.urls.intl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-blue-600 hover:underline"
                  >
                    {p.name_en}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
}
