import { SectionWrap, DataTable, ProductLinkIcon } from "@/components/ui";
import { PRODUCT_LINKS } from "@/data/productLinks";

// For overlap table we show both intl + cn links
function BothLinks({ name }: { name: string }) {
  const links = PRODUCT_LINKS[name];
  if (!links) return <span className="font-semibold text-gray-800">{name}</span>;
  return (
    <span className="font-semibold text-gray-800 inline-flex items-center gap-0.5">
      {name}
      {links.intl && <ProductLinkIcon url={links.intl} />}
    </span>
  );
}

const rows: [string, string][] = [
  ["计算", "CVM、Lighthouse、GPU 云服务器、裸金属、弹性伸缩、批量计算、HCC"],
  ["容器与中间件", "TKE、Serverless 容器、TCR、SCF、CKafka / RocketMQ / RabbitMQ / Pulsar / MQTT"],
  ["存储", "COS、CFS、CBS、CHDFS、GooseFS、数据万象 CI、智能媒资托管 SMH"],
  ["数据库", "MySQL、PostgreSQL、SQL Server、TDSQL-C、TDSQL、MongoDB、Redis、VectorDB、DTS、DBbrain"],
  ["网络", "CLB、VPC、NAT 网关、CCN、专线接入、VPN、GAAP、AIA、带宽包"],
  ["CDN & 边缘", "EdgeOne、CDN、ECDN、Anti-DDoS、ECM"],
  ["视频与通信", "TRTC、IM、CCC、GME、CSS、VOD、MPS、CAR、CVD、腾讯特效 SDK"],
  ["安全", "云防火墙、WAF、主机安全 CWP、容器安全、KMS、Secrets Manager、堡垒机、数据安全审计"],
  ["大数据", "EMR、Elasticsearch、DLC、Oceanus、TCHouse-C/D/P、WeData、BI、TBDS"],
  ["AI（基础）", "OCR、ASR、TTS、机器翻译、人脸识别、人脸核身、TI 平台、图像创作、数智人 IVH"],
  ["开发与运维", "CloudBase、CAM、CloudAudit、EventBridge、APM、RUM、CAT、Prometheus、Grafana"],
  ["通信与企服", "短信、邮件推送、域名注册、HTTPDNS、Private DNS、TBaaS、SSL 证书"],
];

export function OverlapSection() {
  return (
    <SectionWrap
      id="overlap"
      eyebrow="Section 02"
      title="两站重叠的核心产品"
      subtitle="以下类别在国际站与国内站基本一致，是腾讯云面向全球市场的主力产品线，Evangelist 宣讲时可放心引用。"
      alt
    >
      <DataTable
        headers={["类别", "代表产品"]}
        rows={rows.map(([cat, products]) => ({
          cells: [
            <span key="c" className="font-semibold text-gray-800 whitespace-nowrap">{cat}</span>,
            <span key="p" className="text-gray-500">{products}</span>,
          ],
        }))}
      />
      <p className="mt-4 text-xs text-gray-400">
        * 以上产品均可在国际站直接访问 tencentcloud.com/products/[slug]
      </p>
    </SectionWrap>
  );
}
