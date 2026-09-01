import type {Site, CurrentRisk, SeasonalOutlook } from '../types/risk';
import type { RawStat, ModelMetadata } from '../types/risk';
export const SITES: Site[] = [
    { id: 'dunga', name: 'Dunga' },
    { id: 'usenge', name: 'Usenge' },
];

export const MOCK_CURRENT_RISK: Record<string, CurrentRisk> ={
    dunga: {
        siteId: 'dunga',
        tier: 'Moderate',
        summary: 'Water levels within normal range, slight algae bloom detected',
        lastUpdated: '2026-08-23T06:00:00Z',
    },
    usenge: {
        siteId: 'usenge',
        tier: 'Low',
        summary: 'no active risk indicators at this site',
        lastUpdated: '2026-08-23T06:00:00Z',
    },
};
export const MOCK_SEASONAL_OUTLOOK: Record<string, SeasonalOutlook> = {
    dunga: {
        siteId: 'dunga',
        outlookTier: 'High',
        windowLabel: 'Next 4-6 weeks',
        confidence: 'moderate',
        trend: 'worsening',
        narrative: 'Seasonal rainfall increase expected to rise runoff and nutrient load in',
        },
        usenge: {
            siteId: 'usenge',
            outlookTier: 'Moderate',
            windowLabel: 'Next 4-6 weeks',
            confidence: 'low',
            trend: 'steady',
            narrative: 'Conditions expected to remain broadly stable, minor uncertainty in rainfall forecast.  ',
        },
};
export const MOCK_RAW_STATS: Record<string, RawStat[]> = {
    dunga: [
        {label: 'Chlorophyll-a', value: '24.3' , unit: 'µg/L'},
        {label: 'water temperature', value: '26.1', unit: '°C'},
        {label: 'turbidity', value: '12.4', unit: 'NTU'},
        {label: 'dissolved oxygen', value: '5.8', unit: 'mg/L'},
    ],
    usenge: [
        { label: 'Chlorophyll-a', value: '9.7', unit: 'µg/L' },
        { label: 'Water temperature', value: '25.4', unit: '°C' },
        { label: 'Turbidity', value: '6.1', unit: 'NTU' },
        { label: 'Dissolved oxygen', value: '6.9', unit: 'mg/L' },
  ],
};
export const MOCK_MODEL_METADATA: Record<string, ModelMetadata> = {
    dunga: {
        modelVersion: 'v0.3.1',
        modelName: 'Ziwaclear Risk Engine',
        runAt: '2026-08-23T06:00:00Z',
        dataSource: 'ACMAD sensor feed',
    },
    usenge: {
        modelVersion: 'v0.3.1',
        modelName: 'ziwaclear risk engine',
        runAt: '2026-08-23T05:45:00Z',
        dataSource: 'ACMAD sensor feed',
    },
};
