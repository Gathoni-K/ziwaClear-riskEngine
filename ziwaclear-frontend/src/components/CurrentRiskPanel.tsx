import type { CurrentRisk } from '../types/risk';
import BloomTierBadge from './BloomTierBadge';

const BORDER_STYLES = {
  Low: 'border-green-200',
  Moderate: 'border-amber-200',
  High: 'border-red-200',
} as const;

export default function CurrentRiskPanel({ risk }: { risk: CurrentRisk }) {
  const updated = new Date(risk.lastUpdated).toLocaleString();

  return (
    <div className={`rounded-2xl border-2 ${BORDER_STYLES[risk.tier]} bg-white p-5 sm:p-6 h-full flex flex-col shadow-sm`}>
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
          Now
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-2.5 py-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-[10px] font-bold tracking-wider text-white">LIVE</span>
        </span>
      </div>

      <div className="mt-4">
        <BloomTierBadge tier={risk.tier} />
      </div>

      <p className="mt-4 text-slate-700 text-sm leading-relaxed">{risk.summary}</p>
      <p className="mt-auto pt-4 text-xs text-slate-400">Last updated: {updated}</p>
    </div>
  );
}