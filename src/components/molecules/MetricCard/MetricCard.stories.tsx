import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { DollarSign, Users, TrendingDown, Activity } from 'lucide-react';

const meta: Meta = {
	title: 'Molecules/MetricCard',
	tags: ['autodocs'],

	parameters: {
		layout: 'fullscreen',

		backgrounds: {
			default: 'light',

			values: [
				{
					name: 'light',
					value: '#F8F6F1',
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

type Story = StoryObj;

/* -------------------------------------------------------------------------- */
/*                                   HEADER                                   */
/* -------------------------------------------------------------------------- */

const DashboardHeader = ({ dark = false }: { dark?: boolean }) => (
	<div className='mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
		<div className='space-y-5'>
			{/* BADGE */}
			<div
				className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]

        ${dark ? 'border-[#355872]/40 bg-[#10202D] text-[#9CD5FF]' : 'border-[#D7E3EC] bg-white text-[#355872]'}
        `}>
				<span className='h-2 w-2 rounded-full bg-[#7AAACE] animate-pulse' />
				LIVE METRICS
			</div>

			{/* TITLE */}
			<div className='space-y-3'>
				<h1
					className={`text-[64px] font-bold leading-none tracking-[-0.07em]

          ${dark ? 'text-white' : 'text-[#1F3447]'}
          `}>
					Revenue Dashboard
				</h1>

				<p
					className={`max-w-3xl text-[17px] leading-relaxed

          ${dark ? 'text-[#A9C1D4]' : 'text-[#6B8193]'}
          `}>
					Unified overview of revenue, subscriptions, customer engagement, infrastructure health and platform growth performance.
				</p>
			</div>
		</div>

		{/* ACTIONS */}
		<div className='flex items-center gap-4'>
			<button
				className={`rounded-[14px] border px-7 py-3 text-sm font-semibold transition-all duration-300

        ${
					dark
						? 'border-[#355872]/40 bg-[#0E1B27] text-[#9CD5FF] hover:bg-[#132433]'
						: 'border-[#DCE7EF] bg-white text-[#355872] hover:bg-[#EEF4F8]'
				}
        `}>
				Export Report
			</button>

			<button className='rounded-[14px] bg-[#0B4F7A] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(11,79,122,0.28)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#0E5D90]'>
				Refresh Metrics
			</button>
		</div>
	</div>
);

/* -------------------------------------------------------------------------- */
/*                               METRIC CARD                                  */
/* -------------------------------------------------------------------------- */

const MetricCard = ({
	icon: Icon,
	title,
	value,
	subtitle,
	description,
	badge,
	dark = false,
	negative = false,
}: {
	icon: React.ComponentType<any>;
	title: string;
	value: string;
	subtitle: string;
	description: string;
	badge: string;
	dark?: boolean;
	negative?: boolean;
}) => (
	<div className='transition-all duration-500 group-hover:scale-[0.84] group-hover:blur-[16px] hover:!scale-[1.08] hover:!blur-0'>
		<div
			className={`relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[20px] border p-8 transition-all duration-500

      ${
				dark
					? `
            border-[#23425A]
            bg-[linear-gradient(135deg,#07141E_0%,#081C2A_55%,#0A2437_100%)]
            shadow-[0_25px_60px_rgba(0,0,0,0.35)]
            hover:border-[#4F7EA2]
          `
					: `
            border-[#DCE7EF]
            bg-white
            shadow-[0_20px_60px_rgba(53,88,114,0.08)]
            hover:border-[#7AAACE]
          `
			}
      `}>
			{/* TOP LINE */}
			<div className='absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#355872,#7AAACE,#355872)]' />

			{/* GLOW */}
			<div
				className={`absolute -right-24 -top-24 h-[240px] w-[240px] rounded-full blur-3xl

        ${dark ? 'bg-[#7AAACE]/10' : 'bg-[#7AAACE]/10'}
        `}
			/>

			{/* ICON */}
			<div
				className={`relative z-10 mb-10 flex h-16 w-16 items-center justify-center rounded-[16px]

        ${dark ? 'bg-[#173248] text-[#9CD5FF]' : 'bg-[#EEF4F8] text-[#355872]'}
        `}>
				<Icon size={28} />
			</div>

			{/* CONTENT */}
			<div className='relative z-10 flex h-full flex-col justify-between'>
				<div className='space-y-6'>
					<div className='flex flex-col items-center space-y-2'>
						<p
							className={`text-sm font-semibold uppercase tracking-[0.18em]

              ${dark ? 'text-[#8DB3CE]' : 'text-[#6B8193]'}
              `}>
							{title}
						</p>

						<h2
							className={`text-[54px] font-bold leading-none tracking-[-0.06em]

              ${dark ? 'text-white' : 'text-[#1F3447]'}
              `}>
							{value}
						</h2>
					</div>

					<p
						className={`min-h-[78px] px-1 text-[15px] leading-[1.8]

            ${dark ? 'text-[#9FB7C9]' : 'text-[#6F8496]'}
            `}>
						{description}
					</p>
				</div>

				{/* FOOTER */}
				<div className='flex items-center justify-between gap-4 pt-6'>
					<span
						className={`text-sm

            ${dark ? 'text-[#7F9AAF]' : 'text-[#7B8FA0]'}
            `}>
						{subtitle}
					</span>

					<div
						className={`rounded-full px-4 py-1.5 text-sm font-semibold

            ${negative ? 'bg-[#3A1D1D] text-[#FF7B7B]' : dark ? 'bg-[#123B2B] text-[#4ADE80]' : 'bg-[#E7F8EF] text-[#0E9F6E]'}
            `}>
						{badge}
					</div>
				</div>
			</div>
		</div>
	</div>
);

/* -------------------------------------------------------------------------- */
/*                              LIGHT DASHBOARD                               */
/* -------------------------------------------------------------------------- */

export const DashboardGrid: Story = {
	render: () => (
		<div className='relative min-h-screen overflow-hidden bg-[#F8F6F1] px-8 py-16'>
			{/* BACKGROUND */}
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_top,#FFFFFF_0%,#F8F6F1_60%)] opacity-90' />

			<div className='absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-[#7AAACE]/10 blur-3xl' />

			<div className='absolute bottom-[-250px] right-[-250px] h-[550px] w-[550px] rounded-full bg-[#355872]/5 blur-3xl' />

			<div className='relative mx-auto max-w-7xl'>
				<DashboardHeader />

				<div className='group grid grid-cols-1 gap-8 lg:grid-cols-4'>
					<MetricCard
						icon={DollarSign}
						title='Total Revenue'
						value='$300K'
						subtitle='vs last month'
						badge='+12%'
						description='Revenue generated from subscriptions, enterprise customers and API usage.'
					/>

					<MetricCard
						icon={Users}
						title='Active Users'
						value='12,304'
						subtitle='across all plans'
						badge='+3%'
						description='Users currently engaged across products and integrations.'
					/>

					<MetricCard
						icon={TrendingDown}
						title='Churn Rate'
						value='5.7%'
						subtitle='retention improving'
						badge='-0.8%'
						negative
						description='Percentage of customers leaving the platform during this cycle.'
					/>

					<MetricCard
						icon={Activity}
						title='Daily Activity'
						value='16.7M'
						subtitle='active sessions'
						badge='+14%'
						description='Real-time events processed across billing, analytics and API systems.'
					/>
				</div>
			</div>
		</div>
	),
};

/* -------------------------------------------------------------------------- */
/*                               DARK DASHBOARD                               */
/* -------------------------------------------------------------------------- */

export const DarkThemeDashboard: Story = {
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},

	render: () => (
		<div className='relative min-h-screen overflow-hidden bg-[#061018] px-8 py-16'>
			{/* BACKGROUND */}
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_top,#18344B_0%,#061018_65%)]' />

			{/* GLOWS */}
			<div className='absolute left-[-280px] top-[-280px] h-[700px] w-[700px] rounded-full bg-[#355872]/30 blur-3xl' />

			<div className='absolute bottom-[-300px] right-[-300px] h-[700px] w-[700px] rounded-full bg-[#7AAACE]/10 blur-3xl' />

			<div className='relative mx-auto max-w-7xl'>
				<DashboardHeader dark />

				<div className='group grid grid-cols-1 gap-10 lg:grid-cols-4'>
					<MetricCard
						dark
						icon={DollarSign}
						title='Total Revenue'
						value='$300K'
						subtitle='vs last month'
						badge='+12%'
						description='Revenue generated from subscriptions, enterprise and API usage.'
					/>

					<MetricCard
						dark
						icon={Users}
						title='Active Users'
						value='12,304'
						subtitle='across all plans'
						badge='+3%'
						description='Users currently engaged across products and integrations.'
					/>

					<MetricCard
						dark
						icon={TrendingDown}
						title='Churn Rate'
						value='5.7%'
						subtitle='retention improving'
						badge='-0.8%'
						negative
						description='Percentage of customers leaving the platform during this cycle.'
					/>

					<MetricCard
						dark
						icon={Activity}
						title='Daily Activity'
						value='16.7M'
						subtitle='active sessions'
						badge='+14%'
						description='Real-time events processed across billing, analytics and API systems.'
					/>
				</div>
			</div>
		</div>
	),
};
