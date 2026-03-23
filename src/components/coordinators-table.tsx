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
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[640px] text-left text-sm text-slate-700">
        <caption className="sr-only">{caption}</caption>
        <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
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
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={`${row.country}-${row.contact}-${row.email}`}>
              <td className="whitespace-nowrap px-4 py-3 font-medium text-acts-navy">
                {row.country}
              </td>
              <td className="px-4 py-3">{row.contact}</td>
              <td className="whitespace-nowrap px-4 py-3">{row.phone}</td>
              <td className="px-4 py-3">
                {row.email !== "—" ? (
                  <a
                    href={`mailto:${row.email}`}
                    className="text-acts-navy underline-offset-2 hover:underline"
                  >
                    {row.email}
                  </a>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
