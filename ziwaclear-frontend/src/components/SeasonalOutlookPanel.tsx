import type { SeasonalOutlook, RiskTier} from '../types/risk';

const TIER_STYLES: Record< RiskTier, {text: string; ring: string }> ={
    Low: { text: 'text-green-300', ring: 'ring-green-400/40' },
  Moderate: { text: 'text-amber-300', ring: 'ring-amber-400/40' },
  High: { text: 'text-red-300', ring: 'ring-red-400/40' },
};

const TREND_ARROW: Record<SeasonalOutlook['trend'], string> = {
    improving: '↓',
    steady: '→',
    worsening: '↑',
};

export default function SeasonalOutlookPanel({ outlook }: { outlook: SeasonalOutlook}) {
    const style = TIER_STYLES[outlook.outlookTier];

    return (
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 h-full flex flex-col text-white">
      <span className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
        {outlook.windowLabel}
      </span>
      <div className={`mt-3 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 ring-1 ${style.ring}`}>
        <span className={`text-sm font-semibold ${style.text}`}>
          {outlook.outlookTier} projected {TREND_ARROW[outlook.trend]}
        </span>
      </div>
      <p className="mt-4 text-slate-200 text-sm leading-relaxed">{outlook.narrative}</p>
      <p className="mt-auto pt-4 text-xs text-slate-500">
        Forecast confidence: {outlook.confidence}
      </p>
    </div>
  );
}
