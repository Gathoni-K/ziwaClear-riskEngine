import type {Site, CurrentRisk, SeasonalOutlook } from '../types/risk';

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