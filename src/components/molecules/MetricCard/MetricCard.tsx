import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MetricCardProps {
	label?: string;

	title?: string;

	value: string | number;

	prefix?: string;

	suffix?: string;

	currency?: string;

	isPercent?: boolean;

	showChangeIndicator?: boolean;

	isNegative?: boolean;

	trend?: {
		value: number;
		direction: 'up' | 'down' | 'neutral';
	};

	loading?: boolean;

	description?: string;
}

/**
 * MetricCard component for FlexPrice dashboard.
 * Displays KPI metrics with trend indicators — used on the main dashboard.
 */
export const MetricCard = ({ label, title, value, prefix, suffix, trend, loading = false, description }: MetricCardProps) => {
	if (loading) {
		return (
			<div className='rounded-2xl border border-gray-200 bg-white p-6 animate-pulse'>
				<div className='h-4 w-24 rounded bg-gray-200 mb-4' />
				<div className='h-8 w-32 rounded bg-gray-200 mb-2' />
				<div className='h-3 w-16 rounded bg-gray-200' />
			</div>
		);
	}

	const TrendIcon = trend?.direction === 'up' ? TrendingUp : trend?.direction === 'down' ? TrendingDown : Minus;

	const trendColor =
		trend?.direction === 'up'
			? 'text-emerald-600 bg-emerald-50'
			: trend?.direction === 'down'
				? 'text-red-500 bg-red-50'
				: 'text-gray-500 bg-gray-100';

	return (
		<div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200'>
			<p className='text-sm font-medium text-gray-500 mb-1'>{title || label}</p>

			<div className='flex items-end justify-between mt-2'>
				<div>
					<p className='text-3xl font-bold text-gray-900 tracking-tight'>
						{prefix && <span className='text-xl text-gray-500 mr-1'>{prefix}</span>}
						{value}
						{suffix && <span className='text-lg text-gray-500 ml-1'>{suffix}</span>}
					</p>
					{description && <p className='text-xs text-gray-400 mt-1'>{description}</p>}
				</div>

				{trend && (
					<div className={cn('flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold', trendColor)}>
						<TrendIcon size={12} />
						{Math.abs(trend.value)}%
					</div>
				)}
			</div>
		</div>
	);
};
