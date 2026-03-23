// Product URL registry
// intl = tencentcloud.com URL, cn = cloud.tencent.com URL

export type ProductLinks = {
  intl?: string;
  cn?: string;
};

export const PRODUCT_LINKS: Record<string, ProductLinks> = {
  // Compute
  "CVM": { intl: "https://www.tencentcloud.com/products/cvm", cn: "https://cloud.tencent.com/product/cvm" },
  "Lighthouse": { intl: "https://www.tencentcloud.com/products/lighthouse", cn: "https://cloud.tencent.com/product/lighthouse" },
  "GPU 云服务器": { intl: "https://www.tencentcloud.com/products/gpu", cn: "https://cloud.tencent.com/product/gpu" },
  "裸金属": { intl: "https://www.tencentcloud.com/products/cbm", cn: "https://cloud.tencent.com/product/bm" },
  "弹性伸缩": { intl: "https://www.tencentcloud.com/products/as", cn: "https://cloud.tencent.com/product/as" },
  "批量计算": { intl: "https://www.tencentcloud.com/products/batch", cn: "https://cloud.tencent.com/product/batch" },
  "HCC": { intl: "https://www.tencentcloud.com/products/hcc", cn: "https://cloud.tencent.com/product/hcc" },
  "FPGA 云服务器": { cn: "https://cloud.tencent.com/product/fpga" },
  "高性能应用服务 HAI": { cn: "https://cloud.tencent.com/product/hai" },
  "云托付物理服务器": { cn: "https://cloud.tencent.com/product/hosted" },
  "高性能计算平台（HPC Platform）": { cn: "https://cloud.tencent.com/product/hpc" },

  // Container & Middleware
  "TKE": { intl: "https://www.tencentcloud.com/products/tke", cn: "https://cloud.tencent.com/product/tke" },
  "Serverless 容器": { intl: "https://www.tencentcloud.com/products/tkeserverless", cn: "https://cloud.tencent.com/product/tkeserverless" },
  "TCR": { intl: "https://www.tencentcloud.com/products/tcr", cn: "https://cloud.tencent.com/product/tcr" },
  "SCF": { intl: "https://www.tencentcloud.com/products/scf", cn: "https://cloud.tencent.com/product/scf" },
  "CKafka": { intl: "https://www.tencentcloud.com/products/ckafka", cn: "https://cloud.tencent.com/product/ckafka" },
  "RocketMQ": { intl: "https://www.tencentcloud.com/products/trocket", cn: "https://cloud.tencent.com/product/tdmq-rocketmq" },
  "RabbitMQ": { intl: "https://www.tencentcloud.com/products/trabbit", cn: "https://cloud.tencent.com/product/tdmq-rabbitmq" },
  "Pulsar": { intl: "https://www.tencentcloud.com/products/tpulsar", cn: "https://cloud.tencent.com/product/tdmq-pulsar" },
  "MQTT": { intl: "https://www.tencentcloud.com/products/mqtt", cn: "https://cloud.tencent.com/product/mqtt" },
  "微服务平台 TSF": { cn: "https://cloud.tencent.com/product/tsf" },

  // Storage
  "COS": { intl: "https://www.tencentcloud.com/products/cos", cn: "https://cloud.tencent.com/product/cos" },
  "CFS": { intl: "https://www.tencentcloud.com/products/cfs", cn: "https://cloud.tencent.com/product/cfs" },
  "CBS": { intl: "https://www.tencentcloud.com/products/cbs", cn: "https://cloud.tencent.com/product/cbs" },
  "CHDFS": { intl: "https://www.tencentcloud.com/products/chdfs", cn: "https://cloud.tencent.com/product/chdfs" },
  "GooseFS": { intl: "https://www.tencentcloud.com/products/goosefs", cn: "https://cloud.tencent.com/product/goosefs" },
  "数据万象 CI": { intl: "https://www.tencentcloud.com/products/ci", cn: "https://cloud.tencent.com/product/ci" },
  "智能媒资托管 SMH": { intl: "https://www.tencentcloud.com/products/smh", cn: "https://cloud.tencent.com/product/smh" },
  "归档存储 CAS": { cn: "https://cloud.tencent.com/product/cas" },
  "智算存储 NitroFS": { cn: "https://cloud.tencent.com/product/nitro-fs" },
  "智能视图计算平台": { cn: "https://cloud.tencent.com/product/ivc" },

  // Database
  "MySQL": { intl: "https://www.tencentcloud.com/products/cdb", cn: "https://cloud.tencent.com/product/cdb" },
  "PostgreSQL": { intl: "https://www.tencentcloud.com/products/postgres", cn: "https://cloud.tencent.com/product/postgres" },
  "SQL Server": { intl: "https://www.tencentcloud.com/products/sqlserver", cn: "https://cloud.tencent.com/product/sqlserver" },
  "TDSQL-C": { intl: "https://www.tencentcloud.com/products/tdsqlc", cn: "https://cloud.tencent.com/product/cynosdb" },
  "TDSQL": { intl: "https://www.tencentcloud.com/products/dcdb", cn: "https://cloud.tencent.com/product/dcdb" },
  "MongoDB": { intl: "https://www.tencentcloud.com/products/mongodb", cn: "https://cloud.tencent.com/product/mongodb" },
  "Redis": { intl: "https://www.tencentcloud.com/products/tcdc", cn: "https://cloud.tencent.com/product/crs" },
  "VectorDB": { intl: "https://www.tencentcloud.com/products/vdb", cn: "https://cloud.tencent.com/product/vdb" },
  "DTS": { intl: "https://www.tencentcloud.com/products/dts", cn: "https://cloud.tencent.com/product/dts" },
  "DBbrain": { intl: "https://www.tencentcloud.com/products/dbbrain", cn: "https://cloud.tencent.com/product/dbbrain" },
  "云数据库 KeeWiDB": { cn: "https://cloud.tencent.com/product/keewidb" },
  "数据库一体机 TData": { cn: "https://cloud.tencent.com/product/tdata" },

  // Networking
  "CLB": { intl: "https://www.tencentcloud.com/products/clb", cn: "https://cloud.tencent.com/product/clb" },
  "VPC": { intl: "https://www.tencentcloud.com/products/vpc", cn: "https://cloud.tencent.com/product/vpc" },
  "NAT 网关": { intl: "https://www.tencentcloud.com/products/nat", cn: "https://cloud.tencent.com/product/nat" },
  "CCN": { intl: "https://www.tencentcloud.com/products/ccn", cn: "https://cloud.tencent.com/product/ccn" },
  "专线接入": { intl: "https://www.tencentcloud.com/products/dc", cn: "https://cloud.tencent.com/product/dc" },
  "VPN": { intl: "https://www.tencentcloud.com/products/vpn", cn: "https://cloud.tencent.com/product/vpn" },
  "GAAP": { intl: "https://www.tencentcloud.com/products/gaap", cn: "https://cloud.tencent.com/product/gaap" },
  "AIA": { intl: "https://www.tencentcloud.com/products/aia", cn: "https://cloud.tencent.com/product/aia" },
  "带宽包": { intl: "https://www.tencentcloud.com/products/bwp", cn: "https://cloud.tencent.com/product/bwp" },
  "私有连接 Private Link": { cn: "https://cloud.tencent.com/product/privatelink" },
  "SD-WAN 接入服务": { cn: "https://cloud.tencent.com/product/sd-wan" },
  "智能高性能网络": { cn: "https://cloud.tencent.com/product/hpn" },

  // CDN & Edge
  "EdgeOne": { intl: "https://www.tencentcloud.com/products/teo", cn: "https://cloud.tencent.com/product/teo" },
  "CDN": { intl: "https://www.tencentcloud.com/products/cdn", cn: "https://cloud.tencent.com/product/cdn" },
  "ECDN": { intl: "https://www.tencentcloud.com/products/ecdn", cn: "https://cloud.tencent.com/product/ecdn" },
  "Anti-DDoS": { intl: "https://www.tencentcloud.com/products/ddos", cn: "https://cloud.tencent.com/product/ddos" },
  "ECM": { intl: "https://www.tencentcloud.com/products/ecm", cn: "https://cloud.tencent.com/product/ecm" },

  // Video & Communication
  "TRTC": { intl: "https://www.tencentcloud.com/products/trtc", cn: "https://cloud.tencent.com/product/trtc" },
  "IM": { intl: "https://www.tencentcloud.com/products/im", cn: "https://cloud.tencent.com/product/im" },
  "CCC": { intl: "https://www.tencentcloud.com/products/ccc", cn: "https://cloud.tencent.com/product/ccc" },
  "GME": { intl: "https://www.tencentcloud.com/products/gme", cn: "https://cloud.tencent.com/product/gme" },
  "CSS": { intl: "https://www.tencentcloud.com/products/css", cn: "https://cloud.tencent.com/product/css" },
  "VOD": { intl: "https://www.tencentcloud.com/products/vod", cn: "https://cloud.tencent.com/product/vod" },
  "MPS": { intl: "https://www.tencentcloud.com/products/mps", cn: "https://cloud.tencent.com/product/mps" },
  "CAR": { intl: "https://www.tencentcloud.com/products/car", cn: "https://cloud.tencent.com/product/car" },
  "CVD": { intl: "https://www.tencentcloud.com/products/cvd", cn: "https://cloud.tencent.com/product/cvd" },
  "腾讯特效 SDK": { intl: "https://www.tencentcloud.com/products/x-magic", cn: "https://cloud.tencent.com/product/x-magic" },

  // Security
  "云防火墙": { intl: "https://www.tencentcloud.com/products/cfw", cn: "https://cloud.tencent.com/product/cfw" },
  "WAF": { intl: "https://www.tencentcloud.com/products/waf", cn: "https://cloud.tencent.com/product/waf" },
  "主机安全 CWP": { intl: "https://www.tencentcloud.com/products/cwp", cn: "https://cloud.tencent.com/product/cwp" },
  "容器安全": { intl: "https://www.tencentcloud.com/products/tcss", cn: "https://cloud.tencent.com/product/tcss" },
  "KMS": { intl: "https://www.tencentcloud.com/products/kms", cn: "https://cloud.tencent.com/product/kms" },
  "Secrets Manager": { intl: "https://www.tencentcloud.com/products/ssm", cn: "https://cloud.tencent.com/product/ssm" },
  "堡垒机": { intl: "https://www.tencentcloud.com/products/bh", cn: "https://cloud.tencent.com/product/bh" },
  "数据安全审计": { intl: "https://www.tencentcloud.com/products/cds", cn: "https://cloud.tencent.com/product/cds" },
  "iOA 零信任安全管理系统": { cn: "https://cloud.tencent.com/product/ioa" },
  "NDR 网络威胁检测系统": { cn: "https://cloud.tencent.com/product/ndr" },
  "大模型安全网关 / 大模型 WAF": { cn: "https://cloud.tencent.com/product/llm-gateway" },

  // Big Data
  "EMR": { intl: "https://www.tencentcloud.com/products/emr", cn: "https://cloud.tencent.com/product/emr" },
  "Elasticsearch": { intl: "https://www.tencentcloud.com/products/es", cn: "https://cloud.tencent.com/product/es" },
  "DLC": { intl: "https://www.tencentcloud.com/products/dlc", cn: "https://cloud.tencent.com/product/dlc" },
  "Oceanus": { intl: "https://www.tencentcloud.com/products/oceanus", cn: "https://cloud.tencent.com/product/oceanus" },
  "TCHouse-C": { intl: "https://www.tencentcloud.com/products/tchousec", cn: "https://cloud.tencent.com/product/tchousec" },
  "TCHouse-D": { intl: "https://www.tencentcloud.com/products/tchoused", cn: "https://cloud.tencent.com/product/tchoused" },
  "TCHouse-P": { intl: "https://www.tencentcloud.com/products/tchousep", cn: "https://cloud.tencent.com/product/tchousep" },
  "WeData": { intl: "https://www.tencentcloud.com/products/wedata", cn: "https://cloud.tencent.com/product/wedata" },
  "BI": { intl: "https://www.tencentcloud.com/products/bi", cn: "https://cloud.tencent.com/product/bi" },
  "TBDS": { intl: "https://www.tencentcloud.com/products/tbds", cn: "https://cloud.tencent.com/product/tbds" },
  "TCHouse-X": { cn: "https://cloud.tencent.com/product/tchousex" },
  "多模态智能数据湖 TCLake": { cn: "https://cloud.tencent.com/product/tclake" },

  // AI
  "OCR": { intl: "https://www.tencentcloud.com/products/ocr", cn: "https://cloud.tencent.com/product/ocr" },
  "ASR": { intl: "https://www.tencentcloud.com/products/asr", cn: "https://cloud.tencent.com/product/asr" },
  "TTS": { intl: "https://www.tencentcloud.com/products/tts", cn: "https://cloud.tencent.com/product/tts" },
  "机器翻译": { intl: "https://www.tencentcloud.com/products/tmt", cn: "https://cloud.tencent.com/product/tmt" },
  "人脸识别": { intl: "https://www.tencentcloud.com/products/facerecognition", cn: "https://cloud.tencent.com/product/facerecognition" },
  "人脸核身": { intl: "https://www.tencentcloud.com/products/faceid", cn: "https://cloud.tencent.com/product/faceid" },
  "TI 平台": { intl: "https://www.tencentcloud.com/products/ti", cn: "https://cloud.tencent.com/product/ti" },
  "图像创作": { intl: "https://www.tencentcloud.com/products/imagecreation", cn: "https://cloud.tencent.com/product/imagecreation" },
  "数智人 IVH": { intl: "https://www.tencentcloud.com/products/ivh", cn: "https://cloud.tencent.com/product/ivh" },
  "腾讯混元大模型系列": { cn: "https://cloud.tencent.com/product/hunyuan" },
  "腾讯云智能体开发平台 ADP": { intl: "https://www.tencentcloud.com/products/adp", cn: "https://cloud.tencent.com/product/adp" },
  "腾讯觅影": { cn: "https://cloud.tencent.com/product/miai" },
  "腾讯同传": { cn: "https://cloud.tencent.com/product/tsi" },

  // DevOps
  "CloudBase": { intl: "https://www.tencentcloud.com/products/tcb", cn: "https://cloud.tencent.com/product/tcb" },
  "CAM": { intl: "https://www.tencentcloud.com/products/cam", cn: "https://cloud.tencent.com/product/cam" },
  "CloudAudit": { intl: "https://www.tencentcloud.com/products/cloudaudit", cn: "https://cloud.tencent.com/product/cloudaudit" },
  "EventBridge": { intl: "https://www.tencentcloud.com/products/eb", cn: "https://cloud.tencent.com/product/eb" },
  "APM": { intl: "https://www.tencentcloud.com/products/apm", cn: "https://cloud.tencent.com/product/apm" },
  "RUM": { intl: "https://www.tencentcloud.com/products/rum", cn: "https://cloud.tencent.com/product/rum" },
  "CAT": { intl: "https://www.tencentcloud.com/products/cat", cn: "https://cloud.tencent.com/product/cat" },
  "Prometheus": { intl: "https://www.tencentcloud.com/products/tmp", cn: "https://cloud.tencent.com/product/tmp" },
  "Grafana": { intl: "https://www.tencentcloud.com/products/tcmg", cn: "https://cloud.tencent.com/product/tcmg" },
  "CODING DevOps": { cn: "https://cloud.tencent.com/product/coding" },
  "Cloud Studio": { cn: "https://cloud.tencent.com/product/cloudstudio" },
  "微搭低代码": { cn: "https://cloud.tencent.com/product/weda" },
  "软件成分分析": { cn: "https://cloud.tencent.com/product/sca" },
  "多云管理": { cn: "https://cloud.tencent.com/product/tcmcm" },

  // Communication
  "短信": { intl: "https://www.tencentcloud.com/products/sms", cn: "https://cloud.tencent.com/product/sms" },
  "邮件推送": { intl: "https://www.tencentcloud.com/products/ses", cn: "https://cloud.tencent.com/product/ses" },
  "域名注册": { intl: "https://www.tencentcloud.com/products/domain", cn: "https://cloud.tencent.com/product/domain" },
  "HTTPDNS": { intl: "https://www.tencentcloud.com/products/httpdns", cn: "https://cloud.tencent.com/product/httpdns" },
  "Private DNS": { intl: "https://www.tencentcloud.com/products/privatedns", cn: "https://cloud.tencent.com/product/privatedns" },
  "TBaaS": { intl: "https://www.tencentcloud.com/products/tbaas", cn: "https://cloud.tencent.com/product/tbaas" },
  "SSL 证书": { intl: "https://www.tencentcloud.com/products/ssl", cn: "https://cloud.tencent.com/product/ssl" },

  // IoT
  "IoT Hub（物联网通信）": { intl: "https://www.tencentcloud.com/products/iothub", cn: "https://cloud.tencent.com/product/iothub" },
  "IoT Explorer（物联网开发平台）": { cn: "https://cloud.tencent.com/product/iotexplorer" },
  "物联网设备洞察": { cn: "https://cloud.tencent.com/product/iotdi" },
  "TencentOS for IoT": { cn: "https://cloud.tencent.com/product/tencent-os" },
  "智能视频服务（行业版 + 消费版）": { cn: "https://cloud.tencent.com/product/iotvideo" },

  // Industry
  "互动白板 TIW": { intl: "https://www.tencentcloud.com/products/tiw", cn: "https://cloud.tencent.com/product/tiw" },
  "腾讯健康组学平台": { intl: "https://www.tencentcloud.com/products/omics", cn: "https://cloud.tencent.com/product/omics" },
  "数智医疗影像平台": { intl: "https://www.tencentcloud.com/products/medicalplatform", cn: "https://cloud.tencent.com/product/medicalplatform" },
  "肺炎 CT 图像分析": { intl: "https://www.tencentcloud.com/products/appcti", cn: "https://cloud.tencent.com/product/appcti" },

  // Intl-only
  "Global Office Access (GOA)": { intl: "https://www.tencentcloud.com/products/goa" },
  "Game Video Transcoder / Processor / Analyzer (GVT/GVP/GVA)": { intl: "https://www.tencentcloud.com/products/gvt" },
  "Real-time Teleoperation (TRRO)": { intl: "https://www.tencentcloud.com/products/trro" },
  "Tencent Super App as a Service (TCSAS)": { intl: "https://www.tencentcloud.com/products/tcsas" },
};

export function getProductUrl(name: string, prefer: "intl" | "cn" = "intl"): string | undefined {
  const links = PRODUCT_LINKS[name];
  if (!links) return undefined;
  return links[prefer] ?? links.intl ?? links.cn;
}
