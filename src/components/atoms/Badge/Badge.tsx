import { cn } from '@/lib/utils';

export type BadgeStatus = 'active' | 'archived' | 'paid' | 'draft' | 'void' | 'pending' | 'cancelled' | 'trialing';

export interface BadgeProps {
	status: BadgeStatus;
	label?: string;
	size?: 'sm' | 'md';
}

const statusConfig: Record<BadgeStatus, { label: string; className: string; dot: string }> = {
	active: { label: 'Active', className: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25', dot: 'bg-emerald-400' },
	archived: { label: 'Archived', className: 'bg-gray-500/15 text-gray-400 border-gray-500/25', dot: 'bg-gray-400' },
	paid: { label: 'Paid', className: 'bg-blue-500/15 text-blue-400 border-blue-500/25', dot: 'bg-blue-400' },
	draft: { label: 'Draft', className: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25', dot: 'bg-yellow-400' },
	void: { label: 'Void', className: 'bg-red-500/15 text-red-400 border-red-500/25', dot: 'bg-red-400' },
	pending: { label: 'Pending', className: 'bg-orange-500/15 text-orange-400 border-orange-500/25', dot: 'bg-orange-400' },
	cancelled: { label: 'Cancelled', className: 'bg-red-500/15 text-red-400 border-red-500/25', dot: 'bg-red-400' },
	trialing: { label: 'Trialing', className: 'bg-violet-500/15 text-violet-400 border-violet-500/25', dot: 'bg-violet-400' },
};

/**
 * StatusBadge for FlexPrice UI.
 * Maps billing/subscription statuses to colored pill badges.
 */
export const Badge = ({ status, label, size = 'md' }: BadgeProps) => {
	const config = statusConfig[status];
	return (
		<span
			role='status'
			aria-label={`Status: ${config.label}`}
			className={cn(
				'inline-flex items-center gap-1.5 rounded-full border font-medium',
				config.className,
				size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs',
			)}>
			<span className={cn('h-1.5 w-1.5 rounded-full', config.dot)} aria-hidden='true' />
			{label ?? config.label}
		</span>
	);
};
