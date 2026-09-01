import type { RiskTier } from '../types/risk';

interface Props {
    tier: RiskTier;
    size?: 'sm' | 'md' | 'lg';
}

const TIER_STYLES: Record<RiskTier, { bg: string; text: string; dot: string; label: string}> = {
 Low: {
    bg: 'bg-green-50',
    text: 'text-green-800',
    dot: 'bg-green-500',
    label: 'Low bloom risk',
 },
 Moderate: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-800',
    dot: 'bg-yellow-500',
    label: 'Moderate bloom risk',
 },
 High: {
    bg: 'bg-red-50',
    text: 'text-red-800',
    dot: 'bg-red-500',
    label: 'High bloom risk',
 },
};

const SIZE_STYLES: Record<NonNullable<Props['size']>, { pad: string; text: string; dot: string }> = {
  sm: { pad: 'px-2 py-0.5', text: 'text-xs', dot: 'h-1.5 w-1.5' },
  md: { pad: 'px-3 py-1', text: 'text-sm', dot: 'h-2 w-2' },
  lg: { pad: 'px-4 py-1.5', text: 'text-base', dot: 'h-2.5 w-2.5' },
};

export default function BloomTierBadge({tier, size = 'md' }: Props) {
    const style = TIER_STYLES[tier];
    const sizeStyle = SIZE_STYLES[size];

    return(
        <span
      className={`inline-flex items-center gap-2 rounded-full font-semibold ${style.bg} ${style.text} ${sizeStyle.pad} ${sizeStyle.text}`}
      role="status"
      aria-label={style.label}
    >
      <span className={`rounded-full ${style.dot} ${sizeStyle.dot}`} />
      {tier}
    </span>
  );
}