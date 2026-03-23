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

export function ChinaSecurityNetSection() {
  return (
    <SectionWrap
      id="china-security-net"
      eyebrow="国内站独有 · 安全 & 网络"
      title="安全与网络独有产品"
      subtitle="国内站安全产品线更完整，覆盖零信任、大模型安全、微信生态安全等新兴方向。网络方面增加了私有连接、SD-WAN 和 AI 集群专用高速网络。"
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">安全</h3>
          <DataTable
            headers={["产品", "定位"]}
            rows={[
              { cells: [<P key="n" name="iOA 零信任安全管理系统" />, "企业零信任网络访问（ZTNA），替代传统 VPN"] },
              { cells: [<P key="n" name="NDR 网络威胁检测系统" />, "网络流量侧的 AI 威胁检测与响应"] },
              { cells: [<P key="n" name="大模型安全网关 / 大模型 WAF" />, "专门针对 LLM 应用的 Prompt 注入、数据泄露防护"] },
              { cells: [<span key="n" className="font-semibold text-gray-800">BOT 流量管理 / API 安全</span>, "进阶 Web 安全产品，国际站 WAF 基础版覆盖不足"] },
              { cells: [<span key="n" className="font-semibold text-gray-800">小程序安全防护 / 检测</span>, "微信生态专属安全产品"] },
              { cells: [<span key="n" className="font-semibold text-gray-800">安全托管服务 / 应急响应服务</span>, "MSS + 应急响应，偏服务型，适合无专职安全团队的企业"] },
            ]}
          />
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">网络</h3>
          <DataTable
            headers={["产品", "定位"]}
            rows={[
              { cells: [<P key="n" name="私有连接 Private Link" />, "类似 AWS PrivateLink，服务消费方无需打通 VPC"] },
              { cells: [<P key="n" name="SD-WAN 接入服务" />, "企业多分支互联，国际站无对应产品"] },
              { cells: [<P key="n" name="智能高性能网络" />, "面向 AI/HPC 集群的 RDMA 高速网络，万卡互联"] },
              { cells: [<span key="n" className="font-semibold text-gray-800">小程序加速</span>, "微信小程序专属 CDN 加速，与微信生态深度绑定"] },
            ]}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">大模型安全是新增方向</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              大模型安全网关和大模型 WAF 是近一年才出现的产品，针对 LLM 应用的特有攻击面（Prompt Injection、越狱、数据泄露）进行防护，国际站尚未跟进。
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">智能高性能网络的背景</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              随着万卡 GPU 集群训练需求增加，RDMA 网络成为 AI 基础设施的关键瓶颈。该产品是腾讯云 AI 基础设施的重要组成，目前仅国内上架。
            </p>
          </div>
        </div>
      </div>
    </SectionWrap>
  );
}
