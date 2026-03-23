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

export function ChinaDevIoTSection() {
  return (
    <SectionWrap
      id="china-dev-iot"
      eyebrow="国内站独有 · 研发效能 & IoT"
      title="研发效能与 IoT"
      subtitle="国内站有完整的 DevOps 工具链和低代码平台，在 IoT 方向也远比国际站丰富。"
      alt
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">研发效能</h3>
          <DataTable
            headers={["产品", "定位"]}
            rows={[
              { cells: [<P key="n" name="CODING DevOps" />, "完整 DevOps 工具链：代码托管、CI/CD、制品库、项目管理一体化"] },
              { cells: [<P key="n" name="Cloud Studio" />, "云端 IDE，类 GitHub Codespaces，无需本地环境"] },
              { cells: [<span key="n" className="font-semibold text-gray-800">腾讯云代码分析</span>, "静态代码质量分析，支持多种语言"] },
              { cells: [<P key="n" name="微搭低代码" />, "可视化低代码开发平台，面向小程序/企业应用"] },
              { cells: [<P key="n" name="软件成分分析" />, "SCA / 开源供应链安全，检测第三方依赖风险"] },
              { cells: [<P key="n" name="多云管理" />, "跨云资源统一管理，支持腾讯云 + 第三方云"] },
              { cells: [<P key="n" name="微服务平台 TSF" />, "企业级微服务治理平台，覆盖服务注册、限流、熔断、链路追踪"] },
            ]}
          />
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">IoT 对比</h3>
          <DataTable
            headers={["产品", "国际站", "国内站"]}
            rows={[
              {
                cells: [
                  <P key="n" name="IoT Hub（物联网通信）" />,
                  <span key="i" className="text-green-600 text-sm">✅ 已上架</span>,
                  <span key="c" className="text-green-600 text-sm">✅ 已上架</span>,
                ],
              },
              {
                cells: [
                  <P key="n" name="IoT Explorer（物联网开发平台）" />,
                  <span key="i" className="text-red-400 text-sm">❌</span>,
                  <span key="c" className="text-green-600 text-sm">✅ 已上架</span>,
                ],
              },
              {
                cells: [
                  <P key="n" name="物联网设备洞察" />,
                  <span key="i" className="text-red-400 text-sm">❌</span>,
                  <span key="c" className="text-green-600 text-sm">✅ 已上架</span>,
                ],
              },
              {
                cells: [
                  <P key="n" name="TencentOS for IoT" />,
                  <span key="i" className="text-red-400 text-sm">❌</span>,
                  <span key="c" className="text-green-600 text-sm">✅ 已上架</span>,
                ],
              },
              {
                cells: [
                  <P key="n" name="智能视频服务（行业版 + 消费版）" />,
                  <span key="i" className="text-red-400 text-sm">❌</span>,
                  <span key="c" className="text-green-600 text-sm">✅ 已上架</span>,
                ],
              },
            ]}
          />
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">注：国际站也有容器与中间件产品</div>
          <p className="text-gray-600 text-sm leading-relaxed">
            TKE、SCF、CKafka 等容器与消息队列产品两站均有，差异主要在于微服务治理（TSF）和低代码（微搭）这两个更贴近中国企业 IT 采购习惯的产品，国际站目前缺失。
          </p>
        </div>
      </div>
    </SectionWrap>
  );
}
