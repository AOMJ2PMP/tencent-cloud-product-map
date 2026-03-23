"use client";
import { useEffect, useState } from "react";

const navItems = [
  { id: "summary", label: "总体对比", group: null },
  { id: "overlap", label: "两站重叠产品", group: null },
  { id: "china-compute", label: "计算", group: "国内站独有" },
  { id: "china-ai", label: "AI 大模型", group: "国内站独有" },
  { id: "china-storage-db", label: "存储 & 数据库", group: "国内站独有" },
  { id: "china-security-net", label: "安全 & 网络", group: "国内站独有" },
  { id: "china-dev-iot", label: "研发效能 & IoT", group: "国内站独有" },
  { id: "china-industry", label: "行业解决方案", group: "国内站独有" },
  { id: "intl-only", label: "国际站独有产品", group: null },
  { id: "conclusion", label: "结论与建议", group: null },
];

export function Sidebar() {
  const [active, setActive] = useState("summary");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
          setActive(top.target.id);
        }
      },
      { threshold: 0.25 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  let lastGroup: string | null = "__init__";

  return (
    <aside className="w-56 shrink-0 h-full flex flex-col bg-white border-r border-gray-200 overflow-y-auto">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-gray-100">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            TC
          </div>
          <span className="text-gray-900 text-sm font-semibold">腾讯云</span>
        </div>
        <p className="text-[11px] text-gray-400 leading-snug mt-2">
          国际站 vs 国内站
          <br />
          产品差异分析
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const showGroup = item.group !== lastGroup && item.group !== null;
          lastGroup = item.group;

          return (
            <div key={item.id}>
              {showGroup && (
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-2 pt-4 pb-1.5">
                  {item.group}
                </p>
              )}
              <button
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                  active === item.id
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            </div>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-gray-100">
        <p className="text-[10px] text-gray-300 leading-relaxed">
          数据来源
          <br />
          tencentcloud.com
          <br />
          cloud.tencent.com
          <br />
          2026-03-23
        </p>
      </div>
    </aside>
  );
}
