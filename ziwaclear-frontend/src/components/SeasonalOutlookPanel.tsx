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

const CONFIDENCE_LEVEL: Record<SeasonalOutlook['confidence'], number> ={
  low: 1,
  moderate: 2,
  high: 3,
};

export default function SeasonalOutlookPanel({outlook }: { outlook: SeasonalOutlook }) {
  const style = TIER_STYLES[outlook.outlookTier];
  const filledBars = CONFIDENCE_LEVEL[outlook.confidence];

  return(
    <div className="rounded-2xl border-2 border-dashed border-slate-600 bg-slate-900 p-5 sm:p-6 h-full flex flex-col text-white">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
          {outlook.windowLabel}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-slate-500 px-2.5 py-1">
          <span className="text-[10px] font-bold tracking-wider text-slate-300">FORECAST</span>
        </span>
      </div>

      <div className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 ring-1 ${style.ring}`}>
        <span className={`text-sm font-semibold ${style.text}`}>
          {outlook.outlookTier} projected {TREND_ARROW[outlook.trend]}
        </span>
      </div>

      <p className="mt-4 text-slate-200 text-sm leading-relaxed">{outlook.narrative}</p>

      <div className="mt-auto pt-4">
        <p className="text-xs text-slate-500 mb-1.5">Forecast confidence: {outlook.confidence}</p>
        <div className="flex gap-1">
          {[1, 2, 3].map((bar) => (
            <span
              key={bar}
              className={`h-1.5 flex-1 rounded-full ${
                bar <= filledBars ? 'bg-slate-300' : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}