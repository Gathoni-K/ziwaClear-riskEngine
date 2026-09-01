import type { RawStat, ModelMetadata } from '../types/risk';

interface Props {
    stats: RawStat[];
    metadata: ModelMetadata;
}

export default function StatMetadataBlock({ stats, metadata }: Props) {
    const runAt = new Date(metadata.runAt).toLocaleString();

    return (
         <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <span className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
        Raw stats
      </span>
      <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-xs text-slate-500">{stat.label}</dt>
            <dd className="text-sm font-medium text-slate-800">
              {stat.value}
              {stat.unit && <span className="text-slate-400 font-normal"> {stat.unit}</span>}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
        <span>{metadata.modelName} {metadata.modelVersion}</span>
        <span>Source: {metadata.dataSource}</span>
        <span>Run at: {runAt}</span>
      </div>
    </div>
  );
}

  