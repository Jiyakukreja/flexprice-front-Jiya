import type { Meta, StoryObj } from '@storybook/react';
import { UsageBar } from './UsageBar';
import React from 'react';
import { Activity, AlertTriangle, ArrowUpRight, Database, ShieldAlert, Sparkles, Users, Zap } from 'lucide-react';

const variants = {
	default: {
		bar: 'bg-[#355872]',
		icon: 'bg-[#355872]',
		badge: 'bg-emerald-100 text-emerald-700',
		glow: 'shadow-[0_22px_55px_rgba(53,88,114,0.16)]',
		ring: 'hover:border-[#7AAACE]',
	},

	warning: {
		bar: 'bg-[linear-gradient(90deg,#D7A04A_0%,#C9892F_100%)]',
		icon: 'bg-[linear-gradient(135deg,#D7A04A_0%,#C9892F_100%)]',
		badge: 'bg-orange-100 text-orange-700',
		glow: 'shadow-[0_22px_65px_rgba(201,137,47,0.22)]',
		ring: 'hover:border-[#D7A04A]',
	},

	danger: {
		bar: 'bg-[linear-gradient(90deg,#E26D6D_0%,#D65B5B_100%)]',
		icon: 'bg-[linear-gradient(135deg,#E26D6D_0%,#D65B5B_100%)]',
		badge: 'bg-red-100 text-red-700',
		glow: 'shadow-[0_22px_65px_rgba(214,91,91,0.24)]',
		ring: 'hover:border-[#D65B5B]',
	},
};

const cards = [
	{
		title: 'API Calls',
		subtitle: 'Realtime API metering and usage aggregation infrastructure.',

		used: 8200,
		total: 10000,
		unit: 'calls',

		percentage: '+12%',
		variant: 'default' as const,
		icon: Activity,
	},

	{
		title: 'Active Seats',
		subtitle: 'Workspace allocation and organization-wide billing seats.',

		used: 12,
		total: 20,
		unit: 'users',

		percentage: '+4%',
		variant: 'default' as const,
		icon: Users,
	},
];

const criticalCards = [
	{
		title: 'Token Consumption',

		subtitle: 'LLM token utilization is rapidly increasing across realtime AI generation workloads and inference pipelines.',

		used: 7200,
		total: 10000,
		unit: 'AI tokens',

		percentage: '72% utilized',

		variant: 'warning' as const,
		icon: Zap,
	},

	{
		title: 'Credit Infrastructure',

		subtitle: 'Billing infrastructure is approaching maximum event throughput and requires operational scaling attention.',

		used: 9800,
		total: 10000,
		unit: 'credit events',

		percentage: 'Critical',

		variant: 'danger' as const,
		icon: Database,
	},
];

const meta: Meta<typeof UsageBar> = {
	title: 'Molecules/UsageBar',
	component: UsageBar,
	tags: ['autodocs'],

	parameters: {
		layout: 'fullscreen',

		backgrounds: {
			default: 'light',

			values: [
				{ name: 'light', value: '#EEF4F8' },
				{ name: 'dark', value: '#07141E' },
			],
		},
	},
};

export default meta;
type Story = StoryObj<typeof UsageBar>;

/* -------------------------------------------------------------------------- */
/*                                 CARD                                       */
/* -------------------------------------------------------------------------- */

const UsageCard = ({
	title,
	subtitle,
	used,
	total,
	unit,
	percentage,
	variant,
	dark = false,
	icon: Icon,
}: {
	title: string;
	subtitle: string;
	used: number;
	total: number;
	unit: string;
	percentage: string;
	variant: keyof typeof variants;
	dark?: boolean;
	icon: React.ElementType;
}) => {
	const progress = (used / total) * 100;
	const v = variants[variant];

	const critical = variant === 'warning' || variant === 'danger';

	return (
		<div
			className={`group relative overflow-hidden border transition-all duration-700

      hover:-translate-y-2
      hover:scale-[1.015]

      ${
				dark
					? `
            border-[#1E3A50]
            bg-[linear-gradient(180deg,#081722_0%,#07141E_100%)]
          `
					: `
            border-[#DCE7EF]
            bg-[linear-gradient(180deg,#FFFFFF_0%,#FAFCFD_100%)]
          `
			}

      ${v.glow}
      ${v.ring}
      `}>
			{/* TOP GLOW */}
			<div
				className={`absolute right-[-90px] top-[-90px] h-[260px] w-[260px] rounded-full blur-3xl opacity-20 transition-all duration-700 group-hover:scale-125

        ${variant === 'warning' ? 'bg-[#D7A04A]' : variant === 'danger' ? 'bg-[#D65B5B]' : 'bg-[#355872]'}
        `}
			/>

			{/* GRID NOISE */}
			<div className='absolute inset-0 opacity-[0.03] bg-[radial-gradient(#355872_1px,transparent_1px)] [background-size:18px_18px]' />

			<div className='relative p-8'>
				{/* HEADER */}
				<div className='mb-10 flex items-start justify-between gap-6'>
					<div className='space-y-5'>
						{/* TITLE */}
						<div className='space-y-4'>
							<div className='flex items-center gap-3'>
								<p
									className={`text-[15px] font-semibold tracking-[0.02em]

                  ${dark ? 'text-[#9CD5FF]' : 'text-[#355872]'}
                  `}>
									{title}
								</p>

								{variant === 'warning' && (
									<div className='flex items-center gap-1 rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-orange-700 shadow-sm'>
										<AlertTriangle size={11} />
										Usage Alert
									</div>
								)}

								{variant === 'danger' && (
									<div className='flex items-center gap-1 rounded-full border border-red-200 bg-red-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-red-700 shadow-sm'>
										<ShieldAlert size={11} />
										Critical State
									</div>
								)}
							</div>

							<p
								className={`max-w-[430px] text-[14px] leading-[1.9]

                ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
                `}>
								{subtitle}
							</p>
						</div>

						{/* VALUE */}
						<div className='space-y-4'>
							<div className='flex items-end gap-4'>
								<h3
									className={`font-bold leading-none tracking-[-0.08em]

                  ${critical ? 'text-[70px]' : 'text-[60px]'}

                  ${dark ? 'text-white' : 'text-[#1F3447]'}
                  `}>
									{used.toLocaleString()}
								</h3>

								<div
									className={`mb-3 flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-all duration-500 group-hover:scale-105 ${v.badge}`}>
									<ArrowUpRight size={12} />

									{percentage}
								</div>
							</div>

							<p
								className={`text-[13px]

                ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
                `}>
								{used.toLocaleString()} of {total.toLocaleString()} {unit} processed
							</p>
						</div>
					</div>

					{/* ICON */}
					<div
						className={`relative flex

            ${critical ? 'h-24 w-24 rounded-[28px]' : 'h-20 w-20 rounded-[24px]'}

            items-center justify-center text-white transition-all duration-700

            group-hover:rotate-6
            group-hover:scale-110

            ${v.icon}
            `}>
						<div className='absolute inset-0 rounded-[inherit] bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

						<Icon size={critical ? 38 : 30} />
					</div>
				</div>

				{/* BAR */}
				<div className='space-y-5'>
					<div
						className={`h-[18px] overflow-hidden rounded-full

            ${dark ? 'bg-[#102331]' : 'bg-[#E8EFF5]'}
            `}>
						<div
							className={`relative h-full rounded-full transition-all duration-1000 ${v.bar}`}
							style={{
								width: `${progress}%`,
							}}>
							<div className='absolute inset-0 animate-pulse bg-white/10' />
						</div>
					</div>

					{/* FOOTER */}
					<div className='flex items-center justify-between gap-5'>
						<div className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] ${v.badge}`}>
							{critical ? 'Needs Attention' : 'Healthy Infrastructure'}
						</div>

						<div
							className={`text-[12px] font-medium

              ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
              `}>
							AI-native billing infrastructure
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                               DASHBOARD                                    */
/* -------------------------------------------------------------------------- */

const UsageDashboard = ({ dark = false }: { dark?: boolean }) => {
	return (
		<div
			className={`min-h-screen overflow-hidden px-8 py-12

      ${
				dark ? 'bg-[radial-gradient(circle_at_top,#0D1D2A_0%,#07141E_100%)]' : 'bg-[radial-gradient(circle_at_top,#EEF4F8_0%,#E7EFF5_100%)]'
			}
      `}>
			{/* BG GLOW */}
			<div className='absolute left-[-250px] top-[-250px] h-[650px] w-[650px] rounded-full bg-[#355872]/15 blur-3xl' />

			<div className='absolute bottom-[-250px] right-[-250px] h-[700px] w-[700px] rounded-full bg-[#7AAACE]/10 blur-3xl' />

			<div className='relative mx-auto max-w-7xl space-y-14'>
				{/* HERO */}
				<div className='flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between'>
					<div className='space-y-5'>
						<div
							className={`inline-flex items-center gap-2 border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em]

              ${dark ? 'border-[#1E3A50] bg-[#0D1D2A] text-[#9CD5FF]' : 'border-[#DCE7EF] bg-white text-[#355872]'}
              `}>
							<Sparkles size={12} />
							LIVE USAGE METRICS
						</div>

						<div className='space-y-4'>
							<h1
								className={`max-w-5xl text-[76px] font-bold leading-[0.92] tracking-[-0.08em]

                ${dark ? 'text-white' : 'text-[#1F3447]'}
                `}>
								Usage Infrastructure
							</h1>

							<p
								className={`max-w-3xl text-[18px] leading-relaxed

                ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
                `}>
								Monitor AI-native billing systems, realtime token metering, API infrastructure and scalable monetization pipelines.
							</p>
						</div>
					</div>

					{/* BUTTONS */}
					<div className='flex items-center gap-4'>
						<button
							className={`border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg

              ${dark ? 'border-[#1E3A50] bg-[#0D1D2A] text-[#9CD5FF]' : 'border-[#DCE7EF] bg-white text-[#355872]'}
              `}>
							Export Usage
						</button>

						<button className='bg-[#355872] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(53,88,114,0.22)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#28475E] active:scale-[0.98]'>
							Sync Metrics
						</button>
					</div>
				</div>

				{/* OVERVIEW */}
				<div className='space-y-6'>
					<div>
						<h2
							className={`text-[40px] font-bold tracking-[-0.06em]

              ${dark ? 'text-white' : 'text-[#1F3447]'}
              `}>
							Usage Overview
						</h2>

						<p
							className={`mt-3 text-[16px]

              ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
              `}>
							Monitor realtime monetization infrastructure and billing activity.
						</p>
					</div>

					<div className='group grid grid-cols-1 gap-8 lg:grid-cols-2'>
						{cards.map((card) => (
							<div key={card.title} className='transition-all duration-500 group-hover:scale-[0.985] hover:!scale-[1.01]'>
								<UsageCard dark={dark} {...card} />
							</div>
						))}
					</div>
				</div>

				{/* ALERTS */}
				<div className='space-y-6'>
					<div className='flex items-center justify-between'>
						<div>
							<h2
								className={`text-[42px] font-bold tracking-[-0.06em]

                ${dark ? 'text-white' : 'text-[#1F3447]'}
                `}>
								Infrastructure Alerts
							</h2>

							<p
								className={`mt-3 text-[16px]

                ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
                `}>
								Critical infrastructure insights requiring operational attention.
							</p>
						</div>

						<button className='bg-[#355872] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#28475E] active:scale-[0.98]'>
							Resolve Alerts
						</button>
					</div>

					<div className='group grid grid-cols-1 gap-8 lg:grid-cols-2'>
						{criticalCards.map((card) => (
							<div key={card.title} className='transition-all duration-500 group-hover:scale-[0.985] hover:!scale-[1.01]'>
								<UsageCard dark={dark} {...card} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                                 STORIES                                    */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
	render: () => <UsageDashboard />,
};

export const DarkTheme: Story = {
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},

	render: () => <UsageDashboard dark />,
};

export const FullDashboard: Story = {
	render: () => <UsageDashboard />,
};
