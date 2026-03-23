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

export function ChinaComputeSection() {
  return (
    <SectionWrap
      id="china-compute"
      eyebrow="国内站独有 · 计算"
      title="计算类独有产品"
      subtitle="国内站在标准计算产品线之外，还有 4 个国际站尚未上架的计算产品，主要面向 AI 推理、科学计算和本地化托管场景。"
      alt
    >
      <DataTable
        headers={["产品", "定位", "国际站状态"]}
        rows={[
          {
            cells: [
              <P key="n" name="FPGA 云服务器" />,
              "面向 FPGA 加速场景（图像处理、金融风控、基因测序等）",
              <span key="s" className="text-red-500 text-xs font-semibold">❌ 未上架</span>,
            ],
          },
          {
            cells: [
              <P key="n" name="高性能应用服务 HAI" />,
              "面向 AI 推理的弹性 GPU 实例，按需秒级启动，无需长期持有",
              <span key="s" className="text-red-500 text-xs font-semibold">❌ 未上架</span>,
            ],
          },
          {
            cells: [
              <P key="n" name="云托付物理服务器" />,
              "用户自带硬件托管于腾讯云机房，享受腾讯云运维与网络",
              <span key="s" className="text-red-500 text-xs font-semibold">❌ 未上架</span>,
            ],
          },
          {
            cells: [
              <P key="n" name="高性能计算平台（HPC Platform）" />,
              "区别于 HCC 集群，面向科学计算工作流的调度与管理平台",
              <span key="s" className="text-red-500 text-xs font-semibold">❌ 未上架</span>,
            ],
          },
        ]}
      />

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">两站共有</div>
          <p className="text-gray-600 text-sm leading-relaxed">
            CVM、Lighthouse、GPU 云服务器（标准型）、裸金属、CDH、弹性伸缩、自动化助手、批量计算、HCC、Edge Zone、CDC/CDZ
          </p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">仅国内</div>
          <p className="text-gray-600 text-sm leading-relaxed">
            FPGA 云服务器、HAI（AI 推理专用）、云托付物理服务器、HPC Platform
          </p>
        </div>
      </div>
    </SectionWrap>
  );
}
