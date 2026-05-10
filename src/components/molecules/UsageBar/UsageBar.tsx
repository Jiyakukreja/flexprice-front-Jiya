import { cn } from '@/lib/utils';

export interface UsageBarProps {
	label: string;
	used: number;
	total: number;
	unit?: string;
	showPercentage?: boolean;
	variant?: 'default' | 'warning' | 'danger';
}

/**
 * UsageBar for FlexPrice UI.
 * Shows used vs total units for metered features — API calls, tokens, storage etc.
 */
export const UsageBar = ({ label, used, total, unit = 'units', showPercentage = true, variant }: UsageBarProps) => {
	const pct = total > 0 ? Math.min((used / total) * 100, 100) : 0;

	const autoVariant = variant ?? (pct >= 90 ? 'danger' : pct >= 70 ? 'warning' : 'default');

	const barColor = {
		default: 'bg-violet-500',
		warning: 'bg-amber-500',
		danger: 'bg-red-500',
	}[autoVariant];

	const textColor = {
		default: 'text-violet-600',
		warning: 'text-amber-600',
		danger: 'text-red-600',
	}[autoVariant];

	return (
		<div className='w-full space-y-2'>
			<div className='flex items-center justify-between text-sm'>
				<span className='font-medium text-gray-700'>{label}</span>
				<span className={cn('font-semibold', textColor)}>
					{used.toLocaleString()} / {total.toLocaleString()} {unit}
					{showPercentage && <span className='ml-1 text-gray-400 font-normal'>({pct.toFixed(1)}%)</span>}
				</span>
			</div>

			<div className='h-2 w-full rounded-full bg-gray-100 overflow-hidden'>
				<div
					className={cn('h-full rounded-full transition-all duration-500', barColor)}
					style={{ width: `${pct}%` }}
					role='progressbar'
					aria-valuenow={used}
					aria-valuemin={0}
					aria-valuemax={total}
					aria-label={`${label}: ${pct.toFixed(1)}% used`}
				/>
			</div>
		</div>
	);
};
