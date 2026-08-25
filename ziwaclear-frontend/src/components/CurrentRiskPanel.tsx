import type { CurrentRisk, RiskTier } from '../types/risk';

const TIER_STYLES: Record<RiskTier, { bg: string; text: string; dot: string; border: string }> = {
  Low: { bg: 'bg-green-50', text: 'text-green-800', dot: 'bg-green-500', border: 'border-green-200' },
  Moderate: { bg: 'bg-amber-50', text: 'text-amber-800', dot: 'bg-amber-500', border: 'border-amber-200' },
  High: { bg: 'bg-red-50', text: 'text-red-800', dot: 'bg-red-500', border: 'border-red-200' },
};

export default function CurrentRiskPanel({ risk }: { risk: CurrentRisk }) {
  const style = TIER_STYLES[risk.tier];
  const updated = new Date(risk.lastUpdated).toLocaleString();

  return (
    <div className={`rounded-2xl border-2 ${style.border} bg-white p-6 h-full flex flex-col shadow-sm`}>
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

      <div className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 ${style.bg}`}>
        <span className={`h-2 w-2 rounded-full ${style.dot}`} />
        <span className={`text-sm font-semibold ${style.text}`}>{risk.tier} risk</span>
      </div>

      <p className="mt-4 text-slate-700 text-sm leading-relaxed">{risk.summary}</p>
      <p className="mt-auto pt-4 text-xs text-slate-400">Last updated: {updated}</p>
    </div>
  );
}