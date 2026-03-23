import type { CoordinatorRow } from "@/data/coordinators";

type Props = {
  rows: CoordinatorRow[];
  caption: string;
  colCountry: string;
  colContact: string;
  colPhone: string;
  colEmail: string;
};

export function CoordinatorsTable({
  rows,
  caption,
  colCountry,
  colContact,
  colPhone,
  colEmail,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-acts-charcoal shadow-sm">
      <table className="w-full min-w-[640px] text-left text-sm text-acts-muted">
        <caption className="sr-only">{caption}</caption>
        <thead className="border-b border-white/10 bg-acts-slate text-xs font-semibold uppercase tracking-wide text-acts-cream">
          <tr>
            <th scope="col" className="px-4 py-3">
              {colCountry}
            </th>
            <th scope="col" className="px-4 py-3">
              {colContact}
            </th>
            <th scope="col" className="px-4 py-3">
              {colPhone}
            </th>
            <th scope="col" className="px-4 py-3">
              {colEmail}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {rows.map((row, i) => (
            <tr
              key={`${row.country}-${row.contact}`}
              className={
                i % 2 === 0 ? "bg-acts-lime/15" : "bg-acts-slate/40"
              }
            >
              <td className="whitespace-nowrap px-4 py-3 font-medium text-acts-cream">
                {row.country}
              </td>
              <td className="px-4 py-3">{row.contact}</td>
              <td className="whitespace-nowrap px-4 py-3">{row.phone}</td>
              <td className="px-4 py-3">
                <a
                  href={`mailto:${row.email}`}
                  className="text-acts-teal underline-offset-2 hover:underline"
                >
                  {row.email}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
