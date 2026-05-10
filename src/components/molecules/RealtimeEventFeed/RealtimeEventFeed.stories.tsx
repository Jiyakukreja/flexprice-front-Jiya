// src/components/molecules/RealtimeEventFeed/RealtimeEventFeed.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Activity, ArrowUpRight, Database, Layers3, Sparkles, Zap } from 'lucide-react';

import RealtimeEventFeed from './RealtimeEventFeed';

const events = [
	{
		id: '1',
		type: 'usage' as const,
		title: 'Usage threshold exceeded',
		description: '95% monthly API quota consumed across realtime billing infrastructure.',
		time: '2 mins ago',
		amount: '2.4M',
		live: true,
	},

	{
		id: '2',
		type: 'payment' as const,
		title: 'Invoice payment processed',
		description: 'Enterprise subscription invoice synced successfully to billing systems.',
		time: '5 mins ago',
		amount: '$12,420',
	},

	{
		id: '3',
		type: 'ai' as const,
		title: 'AI token metering spike',
		description: 'Realtime token consumption increased by 28% across inference pipelines.',
		time: '8 mins ago',
		amount: '8.2M',
	},

	{
		id: '4',
		type: 'alert' as const,
		title: 'Retry workflow activated',
		description: 'Failed invoice retry initiated for enterprise workspace.',
		time: '14 mins ago',
	},
];

const metrics = [
	{
		label: 'Realtime Events',
		value: '24.5M',
		icon: Activity,
	},

	{
		label: 'Event Streams',
		value: '128',
		icon: Layers3,
	},

	{
		label: 'Infrastructure Latency',
		value: '18ms',
		icon: Zap,
	},

	{
		label: 'Sync Accuracy',
		value: '99.9%',
		icon: Database,
	},
];

const meta: Meta<typeof RealtimeEventFeed> = {
	title: 'Molecules/RealtimeEventFeed',

	component: RealtimeEventFeed,

	tags: ['autodocs'],

	parameters: {
		layout: 'fullscreen',

		backgrounds: {
			default: 'light',

			values: [
				{
					name: 'light',
					value: '#EEF4F8',
				},

				{
					name: 'dark',
					value: '#07141E',
				},
			],
		},
	},
};

export default meta;

type Story = StoryObj<typeof RealtimeEventFeed>;

/* -------------------------------------------------------------------------- */
/*                              REUSABLE HERO                                 */
/* -------------------------------------------------------------------------- */

const Hero = ({ dark = false }: { dark?: boolean }) => (
	<div className='relative flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between'>
		{/* LEFT */}
		<div className='max-w-5xl space-y-10'>
			{/* TAG */}
			<div
				className={`inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.30em]

        ${
					dark
						? `
              border border-[#1B364A]
              bg-[#0B1B27]
              text-[#9CD5FF]
            `
						: `
              border border-[#D7E3EC]
              bg-white
              text-[#355872]
              shadow-sm
            `
				}
        `}>
				<Sparkles size={11} />

				{dark ? 'Realtime Monetization Infrastructure' : 'AI Native Billing Infrastructure'}
			</div>

			{/* CONTENT */}
			<div className='space-y-8'>
				{/* HEADING */}
				<div className='space-y-4'>
					<h1
						className={`max-w-6xl text-[76px] font-black leading-[0.88] tracking-[-0.09em] md:text-[92px] xl:text-[112px]

            ${dark ? 'text-white' : 'text-[#102331]'}
            `}>
						{dark ? (
							<>
								Realtime
								<br />
								Usage Intelligence
							</>
						) : (
							<>
								Operational
								<br />
								Event Infrastructure
							</>
						)}
					</h1>

					{/* LINE */}
					<div className='h-[4px] w-32 bg-[#355872]' />
				</div>

				{/* DESCRIPTION */}
				<p
					className={`max-w-4xl text-[18px] leading-[2] md:text-[20px]

          ${dark ? 'text-[#8DA8BC]' : 'text-[#5E7385]'}
          `}>
					{dark
						? `
            Monitor AI token activity, realtime usage streams,
            infrastructure health and monetization workflows
            through a unified operational intelligence layer.
            `
						: `
            Track usage-based billing events, subscription workflows,
            credit systems and realtime metering infrastructure
            powering modern AI-native products.
            `}
				</p>
			</div>
		</div>

		{/* RIGHT */}
		<div className='flex flex-col items-start gap-5 lg:items-end'>
			{/* STATUS */}
			<div
				className={`inline-flex items-center gap-3 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em]

        ${
					dark
						? `
              border border-emerald-500/20
              bg-emerald-500/10
              text-emerald-300
            `
						: `
              border border-emerald-200
              bg-emerald-50
              text-emerald-700
            `
				}
        `}>
				<span className='relative flex h-2 w-2'>
					<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-50' />

					<span className='relative inline-flex h-2 w-2 rounded-full bg-current' />
				</span>
				Infrastructure Healthy
			</div>

			{/* BUTTON */}
			<button
				className={`group flex items-center gap-3 px-7 py-5 text-[13px] font-semibold transition-all duration-300 active:scale-[0.98]

        ${
					dark
						? `
              border border-[#173247]
              bg-[#0B1B27]
              text-white
              hover:-translate-y-1
              hover:border-[#355872]
              hover:bg-[#102331]
              hover:shadow-[0_18px_50px_rgba(53,88,114,0.24)]
            `
						: `
              border border-[#D7E3EC]
              bg-white
              text-[#102331]
              shadow-sm
              hover:-translate-y-1
              hover:border-[#355872]
              hover:shadow-[0_18px_40px_rgba(53,88,114,0.16)]
            `
				}
        `}>
				Open Monitoring Workspace
				<ArrowUpRight size={16} className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
			</button>
		</div>
	</div>
);
/* -------------------------------------------------------------------------- */
/*                              METRIC CARDS                                  */
/* -------------------------------------------------------------------------- */

const MetricsGrid = ({ dark = false }: { dark?: boolean }) => (
	<div className='grid grid-cols-1 gap-5 lg:grid-cols-4'>
		{metrics.map((item) => {
			const Icon = item.icon;

			return (
				<button
					key={item.label}
					className={`group relative overflow-hidden p-6 text-left transition-all duration-300 active:scale-[0.98]

          ${
						dark
							? `
                border border-[#173247]
                bg-[linear-gradient(180deg,#081722_0%,#07141E_100%)]
                hover:-translate-y-2
                hover:border-[#355872]
                hover:bg-[#0B1B27]
              `
							: `
                border border-[#DCE7EF]
                bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFD_100%)]
                hover:-translate-y-2
                hover:border-[#355872]
                hover:shadow-[0_24px_60px_rgba(53,88,114,0.12)]
              `
					}
          `}>
					{/* GLOW */}
					<div className='absolute right-[-60px] top-[-60px] h-[140px] w-[140px] rounded-full bg-[#355872]/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100' />

					<div className='relative space-y-6'>
						{/* TOP */}
						<div className='flex items-center justify-between'>
							<div
								className={`flex h-12 w-12 items-center justify-center transition-all duration-300 group-hover:scale-105

                ${
									dark
										? `
                      border border-[#173247]
                      bg-[#0B1B27]
                      text-[#9CD5FF]
                    `
										: `
                      border border-[#DCE7EF]
                      bg-white
                      text-[#355872]
                    `
								}
                `}>
								<Icon size={20} />
							</div>

							<ArrowUpRight
								size={15}
								className={`opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100

                ${dark ? 'text-[#9CD5FF]' : 'text-[#355872]'}
                `}
							/>
						</div>

						{/* CONTENT */}
						<div className='space-y-2'>
							<p
								className={`text-[11px] font-semibold uppercase tracking-[0.16em]

                ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
                `}>
								{item.label}
							</p>

							<h3
								className={`text-[42px] font-black tracking-[-0.08em]

                ${dark ? 'text-white' : 'text-[#102331]'}
                `}>
								{item.value}
							</h3>
						</div>
					</div>
				</button>
			);
		})}
	</div>
);

/* -------------------------------------------------------------------------- */
/*                                   DEFAULT                                  */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
	render: () => (
		<div className='min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#EEF4F8_0%,#E7EFF5_100%)] px-8 py-14'>
			{/* BG */}
			<div className='absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#355872]/10 blur-3xl' />

			<div className='absolute bottom-[-260px] right-[-260px] h-[620px] w-[620px] rounded-full bg-[#7AAACE]/10 blur-3xl' />

			<div className='relative mx-auto max-w-7xl space-y-14'>
				<Hero />

				<MetricsGrid />

				<div className='transition-all duration-500 hover:-translate-y-1'>
					<RealtimeEventFeed events={events} />
				</div>
			</div>
		</div>
	),
};

/* -------------------------------------------------------------------------- */
/*                                DARK THEME                                  */
/* -------------------------------------------------------------------------- */

export const DarkTheme: Story = {
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},

	render: () => (
		<div className='min-h-screen overflow-hidden bg-[#07141E] px-8 py-14'>
			{/* BG */}
			<div className='absolute left-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full bg-[#355872]/15 blur-3xl' />

			<div className='absolute bottom-[-260px] right-[-260px] h-[620px] w-[620px] rounded-full bg-[#7AAACE]/10 blur-3xl' />

			<div className='relative mx-auto max-w-7xl space-y-14'>
				<Hero dark />

				<MetricsGrid dark />

				<div className='transition-all duration-500 hover:-translate-y-1'>
					<RealtimeEventFeed dark events={events} />
				</div>
			</div>
		</div>
	),
};
