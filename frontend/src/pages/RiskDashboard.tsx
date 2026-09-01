import { useState } from 'react';
import type { SiteId } from '../types/outlook';
import { SITES, MOCK_CURRENT_RISK, MOCK_SEASONAL_OUTLOOK,MOCK_MODEL_METADATA,MOCK_RAW_STATS } from '../data/mockData';
import StatsMetadataBlock from '../components/StatsMetadataBlock';
import SiteSelector from '../components/SiteSelector';
import CurrentRiskPanel from '../components/CurrentRiskPanel';
import SeasonalOutlookPanel from '../components/SeasonalOutlookPanel';

export default function RiskDashboard() {
  const [selectedSite, setSelectedSite] = useState<SiteId>('dunga');

  const currentRisk = MOCK_CURRENT_RISK[selectedSite];
  const seasonalOutlook = MOCK_SEASONAL_OUTLOOK[selectedSite];
  const rawStats = MOCK_RAW_STATS[selectedSite];
  const modelMetadata = MOCK_MODEL_METADATA[selectedSite];

  return (
    <div className="min-h-screen bg-slate-50 px-4 sm:px-6 py-6 sm:py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mt-6">
  <StatsMetadataBlock stats={rawStats} metadata={modelMetadata} />
</div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Ziwaclear Risk Outlook
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Compare current site risk against the seasonal outlook.
        </p>

        <div className="mt-6">
          <SiteSelector sites={SITES} selected={selectedSite} onSelect={setSelectedSite} />
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <CurrentRiskPanel risk={currentRisk} />
          <SeasonalOutlookPanel outlook={seasonalOutlook} />
        </div>
      </div>
    </div>
  );
}