import { SectionWrap, DataTable, Callout, ProductLinkIcon } from "@/components/ui";
import { PRODUCT_LINKS } from "@/data/productLinks";

function P({ name }: { name: string }) {
  const links = PRODUCT_LINKS[name];
  return (
    <span className="font-semibold text-gray-800 inline-flex items-center">
      {name}
      <ProductLinkIcon url={links?.intl ?? links?.cn} />
    </span>
  );
}

export function IntlOnlySection() {
  return (
    <SectionWrap
      id="intl-only"
      eyebrow="Section 09"
      title="国际站独有产品"
      subtitle="国际站有少量专门面向出海场景或跨国企业设计的产品，国内站无对应入口。"
      alt
    >
      <DataTable
        headers={["产品", "定位与使用场景", "为何国内没有"]}
        rows={[
          {
            cells: [
              <P key="n" name="Global Office Access (GOA)" />,
              "跨国企业员工从海外访问中国内网系统的加速通道",
              "需求方向相反——国内企业访问境外，走国内已有产品",
            ],
          },
          {
            cells: [
              <P key="n" name="Game Video Transcoder / Processor / Analyzer (GVT/GVP/GVA)" />,
              "游戏视频处理三件套，面向海外游戏发行商",
              "国内游戏视频处理整合在 VOD/MPS 中，未单独拆分",
            ],
          },
          {
            cells: [
              <P key="n" name="Real-time Teleoperation (TRRO)" />,
              "远程驾驶、工业机器人实时操控，低延迟实时视频回传",
              "国内未见独立产品入口，可能以行业定制化方式交付",
            ],
          },
          {
            cells: [
              <P key="n" name="Tencent Super App as a Service (TCSAS)" />,
              "将微信小程序生态能力 SaaS 化输出给海外客户",
              "微信生态在国内无需单独 SaaS 化，直接用原生能力",
            ],
          },
        ]}
      />

      <div className="mt-6">
        <Callout type="info">
          这 4 个产品是腾讯云在特定国际场景下的差异化亮点，尤其 <strong>GOA</strong>（跨国企业内网访问）和 <strong>TRRO</strong>（工业 + 自动驾驶）面向 B2B 高价值场景，值得 Evangelist 深入了解并作为差异化宣讲点。
        </Callout>
      </div>
    </SectionWrap>
  );
}
