// Shared primitive UI components — light theme

interface SectionWrapProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  alt?: boolean; // alternate bg
}

export function SectionWrap({ id, eyebrow, title, subtitle, children, alt }: SectionWrapProps) {
  return (
    <section
      id={id}
      className={`min-h-screen px-12 py-20 flex flex-col justify-start gap-10 ${
        alt ? "bg-gray-50" : "bg-white"
      }`}
    >
      <header className="max-w-4xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">{eyebrow}</p>
        )}
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">{title}</h2>
        {subtitle && <p className="mt-3 text-gray-500 text-base leading-relaxed max-w-2xl">{subtitle}</p>}
      </header>
      <div className="max-w-4xl w-full">{children}</div>
    </section>
  );
}

// ── Product link icon ──────────────────────────────────────────────────────────
interface ProductLinkProps {
  url?: string;
}

export function ProductLinkIcon({ url }: ProductLinkProps) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center ml-1.5 w-4 h-4 rounded text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
      title="查看产品页"
    >
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5.5M9.5 2.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

// ── Table ──────────────────────────────────────────────────────────────────────
interface TableRow {
  cells: (string | React.ReactNode)[];
  highlight?: boolean;
}

interface DataTableProps {
  headers: string[];
  rows: TableRow[];
}

export function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            {headers.map((h) => (
              <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-gray-100 last:border-0 transition-colors ${
                row.highlight ? "bg-amber-50" : "hover:bg-gray-50"
              }`}
            >
              {row.cells.map((cell, j) => (
                <td key={j} className="px-5 py-3.5 text-gray-700 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Callout ────────────────────────────────────────────────────────────────────
interface CalloutProps {
  type: "warning" | "info" | "critical";
  children: React.ReactNode;
}

export function Callout({ type, children }: CalloutProps) {
  const styles = {
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
    critical: "bg-red-50 border-red-200 text-red-800",
  };
  const icons = { warning: "⚠️", info: "ℹ️", critical: "🚨" };
  return (
    <div className={`rounded-xl border px-5 py-4 text-sm flex gap-3 leading-relaxed ${styles[type]}`}>
      <span className="shrink-0">{icons[type]}</span>
      <div>{children}</div>
    </div>
  );
}

// ── Tag ────────────────────────────────────────────────────────────────────────
interface TagProps {
  children: React.ReactNode;
  color?: "red" | "yellow" | "gray" | "blue" | "green";
}

export function Tag({ children, color = "gray" }: TagProps) {
  const c = {
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
    gray: "bg-gray-100 text-gray-500",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
  };
  return (
    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${c[color]}`}>
      {children}
    </span>
  );
}
