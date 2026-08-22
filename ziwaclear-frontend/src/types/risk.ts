export type SiteId = 'dunga' | 'usenge';
export type RiskTier = 'Low' | 'Moderate' | 'High';
export interface Site{
    id: SiteId;
    name: string;
}
export interface CurrentRisk {
    siteId: SiteId;
    tier: RiskTier;
    summary: string;
    lastUpdated: string;
}
export interface SeasonalOutlook{
    siteId: SiteId;
    outlookTier: RiskTier;
    windowLabel: string;
    confidence: 'low' | 'moderate' | 'high';
    narrative: string;
    trend :'improving' | 'steady' | 'worsening';
}