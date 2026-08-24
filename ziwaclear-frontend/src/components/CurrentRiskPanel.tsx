import type { CurrentRisk, RiskTier } from '../types/risk';

const TIER_STYLES: Record<RiskTier, { bg: string; text: string; dot: string }> = {
Low: { bg: 'bg-green-50', text: 'text-green-800', dot: 'bg-green-500' },
Moderate: { bg: 'bg-amber-50', text: 'text-amber-800', dot: 'bg-amber-500' },
High: { bg: 'bg-red-50', text: 'text-red-800', dot: 'bg-red-500' },
};

export default function CurrentRiskPanel({ risk }: { risk: CurrentRisk}) {
    const style = TIER_STYLES[risk.tier];
    const updated = new Date (risk.lastUpdated). toLocaleString();

    return( 
    <div className="rounded-2xl border border-slate-200 p-6 h-full flex flex-col">
      <span className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
        Now
      </span>
      <div className={`mt-3 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 ${style.bg}`}>
        <span className={`h-2 w-2 rounded-full ${style.dot}`} />
        <span className={`text-sm font-semibold ${style.text}`}>{risk.tier} risk</span>
      </div>
      <p className="mt-4 text-slate-700 text-sm leading-relaxed">{risk.summary}</p>
      <p className="mt-auto pt-4 text-xs text-slate-400">Last updated: {updated}</p>
    </div>
  );
}