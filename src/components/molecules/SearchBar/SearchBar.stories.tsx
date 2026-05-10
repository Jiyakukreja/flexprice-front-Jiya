import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import { expect, userEvent, within } from '@storybook/test';

import { useState } from 'react';

import { ArrowRight, Command, CreditCard, Database, Search, Sparkles, Zap, Activity } from 'lucide-react';

const meta: Meta<typeof SearchBar> = {
	title: 'Molecules/SearchBar',
	component: SearchBar,
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
type Story = StoryObj<typeof SearchBar>;

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const variants = {
	usage: {
		title: 'Usage Metering',

		subtitle: 'Realtime event ingestion and infrastructure-wide usage tracking.',

		desc: 'Track API requests, token consumption and billing events with realtime metering built for AI-native products.',

		chips: ['API Events', 'Token Usage', 'Credit Metering'],

		stats: '24.5M Events Processed',

		icon: Database,
	},

	billing: {
		title: 'Billing Infrastructure',

		subtitle: 'Unified billing operations with scalable monetization systems.',

		desc: 'Search subscriptions, invoices and hybrid pricing workflows powering modern SaaS and AI platforms.',

		chips: ['Invoices', 'Subscriptions', 'Credits'],

		stats: '$1.2M Revenue Tracked',

		icon: CreditCard,
	},

	ai: {
		title: 'AI Native Pricing',

		subtitle: 'Flexible monetization designed for AI-native companies.',

		desc: 'Monitor LLM token infrastructure, inference pricing and scalable usage-based billing pipelines.',

		chips: ['LLM Tokens', 'Inference', 'Realtime Pricing'],

		stats: '8.2M AI Tokens Metered',

		icon: Zap,
	},
};

/* -------------------------------------------------------------------------- */
/*                                 CARD UI                                    */
/* -------------------------------------------------------------------------- */

const SearchCard = ({ dark = false, variant = 'usage' }: { dark?: boolean; variant?: keyof typeof variants }) => {
	const [focused, setFocused] = useState(false);
	const [value, setValue] = useState('');

	const data = variants[variant];
	const Icon = data.icon;

	return (
		<div
			className={`group relative flex min-h-[540px] flex-col overflow-hidden border transition-all duration-500 hover:-translate-y-2

      ${
				dark
					? `
            border-[#173247]
            bg-[linear-gradient(180deg,#081722_0%,#07141E_100%)]
          `
					: `
            border-[#DCE7EF]
            bg-[linear-gradient(180deg,#FFFFFF_0%,#F9FBFD_100%)]
          `
			}

      shadow-[0_25px_80px_rgba(53,88,114,0.10)]
      `}>
			{/* GLOW */}
			<div className='absolute right-[-90px] top-[-90px] h-[260px] w-[260px] rounded-full bg-[#355872]/10 blur-3xl transition-all duration-700 group-hover:scale-125' />

			{/* GRID */}
			<div className='absolute inset-0 opacity-[0.03] bg-[radial-gradient(#355872_1px,transparent_1px)] [background-size:18px_18px]' />

			<div className='relative flex h-full flex-col p-8'>
				{/* TOP */}
				<div className='mb-8 flex items-start justify-between gap-6'>
					<div className='space-y-5'>
						{/* BADGE */}
						<div
							className={`inline-flex items-center gap-2 border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em]

              ${dark ? 'border-[#1E3A50] bg-[#0D1D2A] text-[#9CD5FF]' : 'border-[#DCE7EF] bg-[#F8FBFD] text-[#355872]'}
              `}>
							<Sparkles size={11} />
							FLEXPRICE SEARCH
						</div>

						{/* HEADING */}
						<div className='space-y-4'>
							<div className='space-y-2'>
								<h2
									className={`text-[42px] font-bold leading-[0.95] tracking-[-0.07em]

                  ${dark ? 'text-white' : 'text-[#1F3447]'}
                  `}>
									{data.title}
								</h2>

								<p
									className={`text-[14px] font-medium

                  ${dark ? 'text-[#9CD5FF]' : 'text-[#355872]'}
                  `}>
									{data.subtitle}
								</p>
							</div>

							<p
								className={`max-w-[320px] text-[14px] leading-[1.9]

                ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
                `}>
								{data.desc}
							</p>
						</div>
					</div>

					{/* ICON */}
					<div className='flex h-20 w-20 items-center justify-center border border-[#355872]/20 bg-[#355872] text-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110'>
						<Icon size={34} />
					</div>
				</div>

				{/* SEARCH */}
				<div className='space-y-5'>
					<div
						className={`relative overflow-hidden border transition-all duration-500

            ${
							focused
								? dark
									? 'border-[#355872] bg-[#102331]'
									: 'border-[#7AAACE] bg-[#F8FBFD]'
								: dark
									? 'border-[#1E3A50] bg-[#0D1D2A]'
									: 'border-[#E5EDF4] bg-white'
						}
            `}>
						<Search
							size={18}
							className={`absolute left-5 top-1/2 z-20 -translate-y-1/2

              ${focused ? 'text-[#7AAACE]' : dark ? 'text-[#7E9BB0]' : 'text-[#6B8193]'}
              `}
						/>

						<input
							type='text'
							value={value}
							placeholder=' '
							onFocus={() => setFocused(true)}
							onBlur={() => setFocused(false)}
							onChange={(e) => setValue(e.target.value)}
							className={`peer h-[64px] w-full bg-transparent pl-14 pr-28 text-[15px] outline-none

              ${dark ? 'text-white' : 'text-[#1F3447]'}
              `}
						/>

						{/* LABEL */}
						<span
							className={`absolute left-14 transition-all duration-300 pointer-events-none

              ${
								focused || value
									? `
                    top-3
                    text-[11px]
                    uppercase
                    tracking-[0.14em]

                    ${dark ? 'text-[#9CD5FF]' : 'text-[#355872]'}
                  `
									: `
                    top-1/2
                    -translate-y-1/2
                    text-[14px]

                    ${dark ? 'text-[#6F8799]' : 'text-[#7B92A5]'}
                  `
							}
              `}>
							Search infrastructure...
						</span>

						{/* SHORTCUT */}
						<div
							className={`absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 border px-2 py-1 text-[11px] font-medium

              ${dark ? 'border-[#1E3A50] bg-[#081722] text-[#8DA8BC]' : 'border-[#E5EDF4] bg-[#F8FBFD] text-[#6B8193]'}
              `}>
							<Command size={11} />K
						</div>

						{/* ACTIVE LINE */}
						<div
							className={`absolute bottom-0 left-0 h-[2px] bg-[#7AAACE] transition-all duration-500

              ${focused ? 'w-full' : 'w-0'}
              `}
						/>
					</div>

					{/* CHIPS */}
					<div className='flex flex-wrap gap-3'>
						{data.chips.map((item: string) => (
							<button
								key={item}
								className={`border px-4 py-2 text-[12px] font-medium transition-all duration-300 hover:-translate-y-1

                ${
									dark
										? `
                      border-[#1E3A50]
                      bg-[#0D1D2A]
                      text-[#9CD5FF]

                      hover:border-[#355872]
                      hover:bg-[#102331]
                    `
										: `
                      border-[#E5EDF4]
                      bg-[#FAFCFD]
                      text-[#355872]

                      hover:border-[#7AAACE]
                    `
								}
                `}>
								{item}
							</button>
						))}
					</div>
				</div>

				{/* SPACER */}
				<div className='flex-1' />

				{/* FOOTER */}
				<div
					className={`mt-10 flex items-center justify-between border-t pt-6

          ${dark ? 'border-[#173247]' : 'border-[#E5EDF4]'}
          `}>
					<div className='space-y-2'>
						<div className='flex items-center gap-2'>
							<Activity size={15} className={dark ? 'text-[#9CD5FF]' : 'text-[#355872]'} />

							<p
								className={`text-[11px] font-semibold uppercase tracking-[0.16em]

                ${dark ? 'text-[#9CD5FF]' : 'text-[#355872]'}
                `}>
								Infrastructure Insights
							</p>
						</div>

						<p
							className={`text-[13px]

              ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
              `}>
							{data.stats}
						</p>
					</div>

					{/* BUTTON */}
					<button className='group flex items-center gap-2 bg-[#355872] px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#28475E]'>
						Explore
						<ArrowRight size={15} className='transition-transform duration-300 group-hover:translate-x-1' />
					</button>
				</div>
			</div>
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                                WRAPPER                                     */
/* -------------------------------------------------------------------------- */

const SearchDashboard = ({ dark = false }: { dark?: boolean }) => {
	return (
		<div
			className={`min-h-screen overflow-hidden px-10 py-14

      ${
				dark ? 'bg-[radial-gradient(circle_at_top,#0D1D2A_0%,#07141E_100%)]' : 'bg-[radial-gradient(circle_at_top,#EEF4F8_0%,#E7EFF5_100%)]'
			}
      `}>
			{/* BG GLOW */}
			<div className='absolute left-[-250px] top-[-250px] h-[650px] w-[650px] rounded-full bg-[#355872]/10 blur-3xl' />

			<div className='absolute bottom-[-250px] right-[-250px] h-[700px] w-[700px] rounded-full bg-[#7AAACE]/10 blur-3xl' />

			<div className='relative mx-auto max-w-7xl space-y-12'>
				{/* HERO */}
				<div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
					<div className='space-y-5'>
						<div
							className={`inline-flex items-center gap-2 border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em]

              ${dark ? 'border-[#1E3A50] bg-[#0D1D2A] text-[#9CD5FF]' : 'border-[#DCE7EF] bg-white text-[#355872]'}
              `}>
							<Sparkles size={12} />
							FLEXPRICE INFRASTRUCTURE
						</div>

						<div className='space-y-4'>
							<h1
								className={`max-w-6xl text-[56px] md:text-[72px] lg:text-[88px] font-bold leading-[0.92] tracking-[-0.09em]

                ${dark ? 'text-white' : 'text-[#1F3447]'}
                `}>
								Unified Search Infrastructure
							</h1>

							<p
								className={`max-w-4xl text-[18px] leading-relaxed

                ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
                `}>
								Operate usage-based, credit-based and AI-native monetization systems with scalable search and realtime reporting.
							</p>
						</div>
					</div>

					<button className='group flex items-center gap-2 bg-[#355872] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(53,88,114,0.22)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#28475E]'>
						Explore Platform
						<ArrowRight size={16} className='transition-transform duration-300 group-hover:translate-x-1' />
					</button>
				</div>

				{/* GRID */}
				<div className='grid grid-cols-1 gap-7 lg:grid-cols-3'>
					<SearchCard dark={dark} variant='usage' />

					<SearchCard dark={dark} variant='billing' />

					<SearchCard dark={dark} variant='ai' />
				</div>
			</div>
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                                  STORIES                                   */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
	render: () => <SearchDashboard />,
};

export const DarkTheme: Story = {
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},

	render: () => <SearchDashboard dark />,
};

export const UsageMetering: Story = {
	render: () => <SearchCard variant='usage' />,
};

export const BillingInfrastructure: Story = {
	render: () => <SearchCard variant='billing' />,
};

export const AINativePricing: Story = {
	render: () => <SearchCard variant='ai' />,
};

export const TypeAndSearch: Story = {
	render: () => <SearchDashboard dark />,

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getAllByPlaceholderText(' ')[0];

		await userEvent.click(input);

		await userEvent.type(input, 'usage metering', {
			delay: 70,
		});

		await expect(input).toHaveValue('usage metering');
	},
};
