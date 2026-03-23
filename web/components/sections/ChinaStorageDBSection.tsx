import { SectionWrap, DataTable, ProductLinkIcon } from "@/components/ui";
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

export function ChinaStorageDBSection() {
  return (
    <SectionWrap
      id="china-storage-db"
      eyebrow="国内站独有 · 存储 & 数据库"
      title="存储与数据库独有产品"
      subtitle="国内站在存储和数据库方向有更完整的硬件一体机产品线，以及面向 AI 训练的高性能存储产品。"
      alt
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">存储</h3>
          <DataTable
            headers={["产品", "定位"]}
            rows={[
              { cells: [<P key="n" name="归档存储 CAS" />, "冷数据归档，成本极低，适合合规留存"] },
              { cells: [<P key="n" name="智算存储 NitroFS" />, "面向 AI 训练的高性能并行存储，高吞吐低延迟"] },
              { cells: [<span key="n" className="font-semibold text-gray-800">存储网关 / 存储一体机 / 备份一体机</span>, "混合云本地化存储设备，适合有本地数据要求的企业"] },
              { cells: [<P key="n" name="智能视图计算平台" />, "视频 AI 分析与存储一体化，面向安防/工业视觉场景"] },
            ]}
          />
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">数据库</h3>
          <DataTable
            headers={["产品", "定位"]}
            rows={[
              { cells: [<span key="n" className="font-semibold text-gray-800">云数据库 Memcached</span>, "老一代缓存数据库，面向存量业务"] },
              { cells: [<P key="n" name="云数据库 KeeWiDB" />, "Redis 兼容的持久化 KV 数据库，数据不丢失"] },
              { cells: [<P key="n" name="数据库一体机 TData" />, "软硬件一体化数据库设备，适合金融/政务场景"] },
              { cells: [<span key="n" className="font-semibold text-gray-800">数据库备份服务</span>, "独立的跨地域备份管理产品"] },
              { cells: [<span key="n" className="font-semibold text-gray-800">腾讯云数据库 AI 服务</span>, "数据库与大模型结合的智能运维与查询服务"] },
            ]}
          />
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">大数据（国内独有部分）</h3>
          <DataTable
            headers={["产品", "定位"]}
            rows={[
              { cells: [<P key="n" name="TCHouse-X" />, "第 4 个数仓变体，国际站只有 C/D/P 三种"] },
              { cells: [<P key="n" name="多模态智能数据湖 TCLake" />, "结合 AI 能力的湖仓一体平台"] },
              { cells: [<span key="n" className="font-semibold text-gray-800">腾讯云数据分析智能体</span>, "自然语言驱动的数据分析 Agent，Text-to-SQL"] },
              { cells: [<span key="n" className="font-semibold text-gray-800">RayData 数字孪生系列</span>, "3D 可视化 + 数字孪生（Plus/Web/简报三个版本）"] },
            ]}
          />
        </div>
      </div>
    </SectionWrap>
  );
}
