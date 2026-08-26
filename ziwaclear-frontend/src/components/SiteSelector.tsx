import type { Site, SiteId } from '../types/risk';

interface Props {
  sites: Site[];
  selected: SiteId;
  onSelect: (id: SiteId) => void;
}

export default function SiteSelector({ sites, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {sites.map((site) => {
        const isActive = site.id === selected;
        return (
          <button
            key={site.id}
            onClick={() => onSelect(site.id)}
            className={`px-4 py-2.5 sm:py-2 rounded-full text-sm font-medium border transition-colors min-w-[100px] sm:min-w-0 ${
              isActive
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
            }`}
          >
            {site.name}
          </button>
        );
      })}
    </div>
  );
}