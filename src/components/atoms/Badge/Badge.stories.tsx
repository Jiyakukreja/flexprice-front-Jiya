import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
	title: 'Atoms/Badge',
	component: Badge,

	parameters: {
		layout: 'centered',
	},

	argTypes: {
		status: {
			control: 'select',
			options: ['active', 'archived', 'paid', 'draft', 'void', 'pending', 'cancelled', 'trialing'],
		},

		size: {
			control: 'select',
			options: ['sm', 'md'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Badge>;

/* -------------------------------- COMMON STYLES -------------------------------- */

const badgeStyles = {
	active: 'bg-[#E8F7EF] border border-[#9FE0B8] text-[#157347] shadow-[0_6px_18px_rgba(21,115,71,0.10)]',

	archived: 'bg-[#EEF2F6] border border-[#C8D2DC] text-[#516070] shadow-[0_6px_18px_rgba(81,96,112,0.10)]',

	paid: 'bg-[#EAF4FF] border border-[#B7D8FF] text-[#0B63C8] shadow-[0_6px_18px_rgba(11,99,200,0.10)]',

	draft: 'bg-[#FFF7E8] border border-[#FFD580] text-[#B7791F] shadow-[0_6px_18px_rgba(183,121,31,0.10)]',

	void: 'bg-[#FFF1F2] border border-[#FFB8C0] text-[#D14343] shadow-[0_6px_18px_rgba(209,67,67,0.10)]',

	pending: 'bg-[#FFF8E6] border border-[#FFD76A] text-[#C58A00] shadow-[0_6px_18px_rgba(197,138,0,0.10)]',

	cancelled: 'bg-[#FCECEC] border border-[#F0A8A8] text-[#C0392B] shadow-[0_6px_18px_rgba(192,57,43,0.10)]',

	trialing: 'bg-[#EEF4FF] border border-[#C6D5FF] text-[#4A67D6] shadow-[0_6px_18px_rgba(74,103,214,0.10)]',
};

/* -------------------------------- DOT COLORS -------------------------------- */

const dotColors = {
	active: 'bg-[#157347]',
	archived: 'bg-[#516070]',
	paid: 'bg-[#0B63C8]',
	draft: 'bg-[#B7791F]',
	void: 'bg-[#D14343]',
	pending: 'bg-[#C58A00]',
	cancelled: 'bg-[#C0392B]',
	trialing: 'bg-[#4A67D6]',
};

/* -------------------------------- INTERACTIVE BADGE -------------------------------- */

const InteractiveBadge = ({ status, size = 'md' }: { status: keyof typeof badgeStyles; size?: 'sm' | 'md' }) => (
	<div
		className={`
      group relative inline-flex items-center gap-2 overflow-hidden rounded-full
      font-medium transition-all duration-500
      hover:-translate-y-0.5 hover:scale-[1.03]
      active:scale-[0.98]

      ${badgeStyles[status]}

      ${size === 'sm' ? 'px-5 py-2 text-sm' : 'px-7 py-3 text-lg'}
    `}>
		{/* Animated Dot */}
		<span className='relative flex h-2.5 w-2.5'>
			<span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${dotColors[status]}`} />

			<span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dotColors[status]}`} />
		</span>

		{/* Shine */}
		<span className='absolute left-[-100%] top-0 h-full w-[40%] rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[140%]' />

		{/* Text */}
		<span className='relative z-10 capitalize tracking-[0.01em]'>{status}</span>
	</div>
);

/* -------------------------------- PLAYGROUND -------------------------------- */

export const Playground: Story = {
	render: (args) => <InteractiveBadge status={args.status} size={args.size} />,

	args: {
		status: 'active',
		size: 'md',
	},
};

/* -------------------------------- INDIVIDUAL STORIES -------------------------------- */

export const Active: Story = {
	render: (args) => <InteractiveBadge status='active' size={args.size} />,

	args: {
		size: 'md',
	},
};

export const Archived: Story = {
	render: (args) => <InteractiveBadge status='archived' size={args.size} />,

	args: {
		size: 'md',
	},
};

export const Paid: Story = {
	render: (args) => <InteractiveBadge status='paid' size={args.size} />,

	args: {
		size: 'md',
	},
};

export const Draft: Story = {
	render: (args) => <InteractiveBadge status='draft' size={args.size} />,

	args: {
		size: 'md',
	},
};

export const Void: Story = {
	render: (args) => <InteractiveBadge status='void' size={args.size} />,

	args: {
		size: 'md',
	},
};

export const Pending: Story = {
	render: (args) => <InteractiveBadge status='pending' size={args.size} />,

	args: {
		size: 'md',
	},
};

export const Trialing: Story = {
	render: (args) => <InteractiveBadge status='trialing' size={args.size} />,

	args: {
		size: 'md',
	},
};

export const Cancelled: Story = {
	render: (args) => <InteractiveBadge status='cancelled' size={args.size} />,

	args: {
		size: 'md',
	},
};

/* -------------------------------- ALL STATUSES -------------------------------- */

export const AllStatuses: Story = {
	render: () => (
		<div className='flex flex-wrap gap-4 p-4'>
			{(['active', 'archived', 'paid', 'draft', 'void', 'pending', 'cancelled', 'trialing'] as const).map((status) => (
				<InteractiveBadge key={status} status={status} size='md' />
			))}
		</div>
	),
};

/* -------------------------------- DARK THEME -------------------------------- */

export const DarkTheme: Story = {
	render: () => (
		<div className='rounded-[30px] bg-[#0B1620] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)]'>
			<div className='flex flex-wrap gap-4'>
				{(['active', 'archived', 'paid', 'draft', 'void', 'pending', 'cancelled', 'trialing'] as const).map((status) => (
					<div
						key={status}
						className={`
              group relative inline-flex items-center gap-2 overflow-hidden rounded-full
              border px-6 py-2.5 text-base font-medium transition-all duration-500
              hover:-translate-y-0.5 hover:scale-[1.03]

              ${
								status === 'active'
									? 'bg-[#10261B] border-[#1F8A4C]/40 text-[#7EF0A8]'
									: status === 'archived'
										? 'bg-[#1A232D] border-[#516070]/40 text-[#C7D2DD]'
										: status === 'paid'
											? 'bg-[#0E223D] border-[#0B63C8]/40 text-[#7EB6FF]'
											: status === 'draft'
												? 'bg-[#2A2110] border-[#B7791F]/40 text-[#FFD37A]'
												: status === 'void'
													? 'bg-[#2B1618] border-[#D14343]/40 text-[#FF9B9B]'
													: status === 'pending'
														? 'bg-[#2A230F] border-[#C58A00]/40 text-[#FFD76A]'
														: status === 'cancelled'
															? 'bg-[#2D1717] border-[#C0392B]/40 text-[#FFB3A9]'
															: 'bg-[#161D32] border-[#4A67D6]/40 text-[#AFC0FF]'
							}
            `}>
						{/* Dot */}
						<span className='relative flex h-2.5 w-2.5'>
							<span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${dotColors[status]}`} />

							<span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dotColors[status]}`} />
						</span>

						{/* Shine */}
						<span className='absolute left-[-100%] top-0 h-full w-[40%] rotate-12 bg-white/10 blur-md transition-all duration-700 group-hover:left-[140%]' />

						<span className='relative z-10 capitalize'>{status}</span>
					</div>
				))}
			</div>
		</div>
	),
};
