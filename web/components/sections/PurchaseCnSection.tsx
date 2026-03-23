import { SectionWrap, Callout } from "@/components/ui";
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
    cn?: string | null;
    cn_cta?: string;
    notes?: string;
  };
  free_tier: boolean;
};

const products = productsRaw as Product[];

export function PurchaseCnSection() {
  const cnProducts = products.filter((p) => p.availability.cn && p.purchase.cn);

  const onDemand    = cnProducts.filter((p) => p.purchase.cn === "on_demand");
  const hybrid      = cnProducts.filter((p) => p.purchase.cn === "hybrid");
  const contactOnly = cnProducts.filter((p) => p.purchase.cn === "contact_sales");

  // Products where intl requires contact_sales but cn is on_demand
  const intlGated = products.filter(
    (p) => p.availability.intl && p.purchase.intl === "contact_sales" && p.purchase.cn === "on_demand"
  );
  // Products where intl is hybrid but cn is on_demand (cn is strictly better)
  const intlHybridCnFree = products.filter(
    (p) => p.availability.intl && p.purchase.intl === "hybrid" && p.purchase.cn === "on_demand"
  );

  const byCategory = (list: Product[]) => {
    const map: Record<string, Product[]> = {};
    list.forEach((p) => { (map[p.category] ??= []).push(p); });
    return Object.entries(map).sort((a, b) => b[1].length - a[1].length);
  };

  return (
    <SectionWrap
      id="purchase-cn"
      eyebrow="购买方式 · 国内站"
      title="国内站购买方式分析"
      subtitle="国内站 cloud.tencent.com 的产品几乎全部支持直接自助购买，与国际站体验有显著差异。"
    >
      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "可直接购买",  count: onDemand.length,    dot: "bg-green-500",  bg: "border-green-100", desc: "可通过控制台或购买页直接下单" },
          { label: "部分自助",    count: hybrid.length,      dot: "bg-yellow-400", bg: "border-yellow-100", desc: "基础版自助，高级版需联系" },
          { label: "需联系销售",  count: contactOnly.length, dot: "bg-red-400",    bg: "border-red-100",    desc: "完全走销售渠道" },
        ].map(({ label, count, dot, bg, desc }) => (
          <div key={label} className={`bg-white rounded-2xl border ${bg} p-5`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
              <span className="text-sm font-semibold text-gray-700">{label}</span>
            </div>
            <div className="text-4xl font-black text-gray-900 mb-1">{count}</div>
            <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <Callout type="info">
        国内站 <strong>{onDemand.length} 个产品（{Math.round(onDemand.length / cnProducts.length * 100)}%）</strong>均可直接自助购买，无需联系销售。这与国际站形成明显对比——国际站超过 85% 的产品需要通过销售或与销售并行才能完成采购。
      </Callout>

      {/* Comparison: same product, different purchase experience */}
      <div className="mt-8 space-y-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          同一产品，国际站需联系销售 · 国内站可直购（{intlGated.length} 个）
        </h3>
        <p className="text-sm text-gray-500">这些产品在国内站可直接购买，但在国际站必须通过销售团队。</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {byCategory(intlGated).map(([cat, items]) => (
            <div key={cat} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-600">{cat}</span>
                <span className="text-xs text-gray-400">{items.length} 个</span>
              </div>
              <div className="space-y-1.5">
                {items.map((p) => (
                  <div key={p.id} className="flex items-center justify-between text-xs">
                    <span className="text-gray-700 font-medium">{p.name}</span>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      {p.urls.cn && (
                        <a href={p.urls.cn} target="_blank" rel="noopener noreferrer"
                          className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold hover:bg-green-200 transition-colors">
                          国内 ↗
                        </a>
                      )}
                      {p.urls.intl && (
                        <a href={p.urls.intl} target="_blank" rel="noopener noreferrer"
                          className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-semibold hover:bg-red-200 transition-colors">
                          国际 ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hybrid in intl but on_demand in cn */}
      <div className="mt-8 space-y-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          国内直购体验更简洁（{intlHybridCnFree.length} 个）
        </h3>
        <p className="text-sm text-gray-500">这些产品在国际站为 hybrid（含 Contact Sales 入口），但国内站直接自助购买，无销售摩擦。</p>
        <div className="flex flex-wrap gap-2">
          {intlHybridCnFree.map((p) => (
            <div key={p.id} className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 text-xs">
              <span className="text-gray-700 font-medium">{p.name}</span>
              {p.urls.cn && (
                <a href={p.urls.cn} target="_blank" rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 ml-1">
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H5.5M9.5 2.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* All on-demand by category */}
      <div className="mt-8 space-y-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          国内全部可直购产品（{onDemand.length} 个）· 按类别
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {byCategory(onDemand).map(([cat, items]) => (
            <div key={cat} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-600">{cat}</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-400">{items.length} 个</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((p) => (
                  <a
                    key={p.id}
                    href={p.urls.cn ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-blue-600 hover:underline"
                  >
                    {p.name}
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
