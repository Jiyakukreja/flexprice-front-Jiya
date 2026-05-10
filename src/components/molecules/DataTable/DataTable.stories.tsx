import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';
import { useMemo, useState } from 'react';

import { Activity, ArrowUpRight, ChevronDown, Coins, CreditCard, Download, Filter, Search, Sparkles, Zap } from 'lucide-react';

const meta: Meta<typeof DataTable> = {
	title: 'Molecules/DataTable',
	component: DataTable,
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
type Story = StoryObj<typeof DataTable>;

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const ui = {
	light: {
		bg: 'bg-white border-[#DCE7EF]',
		soft: 'bg-[#FAFCFD]',
		text: 'text-[#1F3447]',
		sub: 'text-[#6B8193]',
		border: 'border-[#DCE7EF]',
		hover: 'hover:border-[#7AAACE]',
		input: 'border-[#DCE7EF] bg-[#FAFCFD] text-[#355872] placeholder:text-[#8AA1B3] focus:border-[#7AAACE]',
	},

	dark: {
		bg: 'bg-[#081722] border-[#1E3A50]',
		soft: 'bg-[#0D1D2A]',
		text: 'text-white',
		sub: 'text-[#8DA8BC]',
		border: 'border-[#1E3A50]',
		hover: 'hover:border-[#355872]',
		input: 'border-[#1E3A50] bg-[#0D1D2A] text-white placeholder:text-[#6F8799] focus:border-[#355872]',
	},
};

const statusColors: Record<string, string> = {
	active: 'bg-emerald-100 text-emerald-700 border-emerald-200',
	archived: 'bg-slate-100 text-slate-600 border-slate-200',
	trialing: 'bg-violet-100 text-violet-700 border-violet-200',
	paid: 'bg-sky-100 text-sky-700 border-sky-200',
	pending: 'bg-orange-100 text-orange-700 border-orange-200',
};

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const customerColumns = [
	{ key: 'id' as const, header: 'Meter ID' },
	{ key: 'name' as const, header: 'Infrastructure', sortable: true },
	{ key: 'email' as const, header: 'Connected Source' },

	{
		key: 'status' as const,
		header: 'Status',

		render: (val: unknown) => (
			<div
				className={`inline-flex items-center gap-2 border px-3 py-1 text-xs font-semibold transition-all duration-300 hover:scale-[1.04]
        ${statusColors[val as string]}`}>
				<span className='h-1.5 w-1.5 animate-pulse rounded-full bg-current' />
				{String(val)}
			</div>
		),
	},

	{
		key: 'mrr' as const,
		header: 'Events Processed',
		sortable: true,
	},
];

const customers = [
	{
		id: 'meter_001',
		name: 'Usage Based Billing',
		email: 'Stripe + Segment',
		status: 'active',
		mrr: '12.8M',
	},

	{
		id: 'meter_002',
		name: 'Credit Consumption',
		email: 'OpenAI Gateway',
		status: 'paid',
		mrr: '3.4M',
	},

	{
		id: 'meter_003',
		name: 'Token Metering',
		email: 'AI Runtime',
		status: 'trialing',
		mrr: '8.2M',
	},

	{
		id: 'meter_004',
		name: 'API Infrastructure',
		email: 'Kafka Pipeline',
		status: 'pending',
		mrr: '1.1M',
	},

	{
		id: 'meter_005',
		name: 'Hybrid Monetization',
		email: 'Internal Billing',
		status: 'active',
		mrr: '24.5M',
	},
];

/* -------------------------------------------------------------------------- */
/*                               METRIC CARD                                  */
/* -------------------------------------------------------------------------- */

const MetricCard = ({ title, value, change, icon: Icon, dark = false }: any) => {
	const t = dark ? ui.dark : ui.light;

	return (
		<div
			className={`group relative overflow-hidden border p-6 transition-all duration-500
      hover:-translate-y-2 hover:scale-[1.02]
      hover:shadow-[0_25px_70px_rgba(53,88,114,0.18)]
      ${t.bg} ${t.hover}`}>
			<div className='flex items-start justify-between'>
				<div className='space-y-5'>
					<p className={`text-sm font-medium ${t.sub}`}>{title}</p>

					<div className='space-y-3'>
						<h2 className={`text-[46px] font-bold tracking-[-0.06em] ${t.text}`}>{value}</h2>

						<div className='inline-flex items-center gap-2 bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>
							<ArrowUpRight size={12} />
							{change}
						</div>
					</div>
				</div>

				<div
					className={`flex h-14 w-14 items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110
          ${dark ? 'bg-[#102331] text-[#9CD5FF]' : 'bg-[#355872] text-white'}`}>
					<Icon size={24} />
				</div>
			</div>
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                               FILTER PANEL                                 */
/* -------------------------------------------------------------------------- */

const FilterPanel = ({ dark = false }: any) => {
	const t = dark ? ui.dark : ui.light;

	const [open, setOpen] = useState('Pricing Model');

	const filters = [
		{
			title: 'Pricing Model',
			items: ['Usage Based', 'Credit Based', 'Hybrid'],
		},

		{
			title: 'Infrastructure',
			items: ['Gateway', 'Storage', 'Runtime'],
		},

		{
			title: 'Environment',
			items: ['Production', 'Staging', 'Development'],
		},
	];

	return (
		<div className={`border p-6 shadow-[0_25px_70px_rgba(53,88,114,0.08)] ${t.bg}`}>
			<div className='mb-8 flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<div
						className={`flex h-11 w-11 items-center justify-center
          ${dark ? 'bg-[#102331] text-[#9CD5FF]' : 'bg-[#355872] text-white'}`}>
						<Filter size={18} />
					</div>

					<div>
						<h3
							className={`text-lg font-semibold tracking-tight

  ${dark ? 'text-white' : 'text-[#1F3447]'}
  `}>
							Filters
						</h3>

						<p
							className={`text-sm

  ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
  `}>
							Monetization controls
						</p>
					</div>
				</div>

				<button
					className={`text-sm font-medium transition-all hover:opacity-70

  ${dark ? 'text-[#9CD5FF]' : 'text-[#355872]'}
  `}>
					Clear
				</button>
			</div>

			<div className='space-y-4'>
				{filters.map((filter) => {
					const active = open === filter.title;

					return (
						<div key={filter.title} className={`border transition-all duration-300 ${t.soft} ${t.border}`}>
							<button onClick={() => setOpen(active ? '' : filter.title)} className='flex w-full items-center justify-between px-4 py-4'>
								<span className={`text-sm font-medium ${t.text}`}>{filter.title}</span>

								<ChevronDown
									size={16}
									className={`transition-all duration-300

${dark ? 'text-[#9CD5FF]' : 'text-[#355872]'}

${active ? 'rotate-180' : ''}
`}
								/>
							</button>

							{active && (
								<div className='flex flex-wrap gap-2 px-4 pb-4'>
									{filter.items.map((item) => (
										<button
											key={item}
											className={`border px-3 py-2 text-xs font-medium transition-all duration-300 hover:scale-[1.04]
                      ${t.border} ${t.soft}`}>
											{item}
										</button>
									))}
								</div>
							)}
						</div>
					);
				})}
			</div>

			<button className='mt-6 w-full bg-[#355872] py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#28475E] hover:scale-[1.02]'>
				Apply Filters
			</button>
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                                TABLE                                       */
/* -------------------------------------------------------------------------- */

const DashboardTable = ({ dark = false }: any) => {
	const t = dark ? ui.dark : ui.light;

	const [search, setSearch] = useState('');

	const filteredData = useMemo(() => customers.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())), [search]);

	return (
		<div
			className={`overflow-hidden border transition-all duration-500

      ${
				dark
					? `
            border-[#163247]
            bg-[linear-gradient(180deg,#081722_0%,#07141E_100%)]

            shadow-[0_35px_100px_rgba(0,0,0,0.5)]
          `
					: `
            shadow-[0_25px_70px_rgba(53,88,114,0.08)]
            ${t.bg}
          `
			}
      `}>
			{/* HEADER */}
			<div
				className={`flex flex-col gap-6 border-b px-8 py-7 lg:flex-row lg:items-center lg:justify-between

        ${
					dark
						? `
              border-[#1E3A50]
              bg-[#0D1D2A]
            `
						: `
              ${t.soft}
              ${t.border}
            `
				}
        `}>
				{/* TITLE */}
				<div className='space-y-3'>
					<h2
						className={`text-[34px] font-bold tracking-[-0.06em]

            ${dark ? 'text-white' : t.text}
            `}>
						Monetization Infrastructure
					</h2>

					<p
						className={`max-w-3xl text-sm leading-relaxed

            ${dark ? 'text-[#8DA8BC]' : t.sub}
            `}>
						Flexprice enables AI-native teams to operate usage-based, hybrid and credit-based monetization infrastructure with real-time
						reporting and scalable metering.
					</p>
				</div>

				{/* ACTIONS */}
				<div className='flex items-center gap-4'>
					{/* SEARCH */}
					<div className='relative w-[320px]'>
						<Search
							size={18}
							className={`absolute left-4 top-1/2 -translate-y-1/2

              ${dark ? 'text-[#7E9BB0]' : t.sub}
              `}
						/>

						<input
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder='Search infrastructure...'
							className={`h-[52px] w-full border pl-12 pr-4 text-sm font-medium outline-none transition-all duration-300

              ${
								dark
									? `
                    border-[#1E3A50]
                    bg-[#081722]
                    text-white

                    placeholder:text-[#6F8799]

                    focus:border-[#355872]

                    focus:shadow-[0_0_0_4px_rgba(53,88,114,0.18)]
                  `
									: `
                    ${t.input}
                  `
							}
              `}
						/>
					</div>

					{/* FILTER BUTTON */}
					<button
						className={`flex h-[52px] items-center justify-center border px-5 transition-all duration-300

            ${
							dark
								? `
                  border-[#1E3A50]
                  bg-[#081722]
                  text-[#9CD5FF]

                  hover:border-[#355872]
                  hover:bg-[#102331]
                `
								: `
                  ${t.soft}
                  ${t.border}
                `
						}
            `}>
						<Filter size={18} />
					</button>
				</div>
			</div>

			{/* TABLE */}
			<div className='p-4'>
				<div
					className={`overflow-hidden border

          ${
						dark
							? `
                  border-[#1E3A50]
                  bg-[#081722]

                  [&_table]:bg-[#081722]

                  [&_thead]:bg-[#0D1D2A]

                  [&_th]:border-[#1E3A50]
                  [&_th]:bg-[#0D1D2A]
                  [&_th]:text-[#9CD5FF]
                  [&_th]:font-semibold
                  [&_th]:tracking-wide

                  [&_td]:border-[#132C3F]
                  [&_td]:bg-[#081722]
                  [&_td]:text-white

                  [&_tr]:border-[#132C3F]

                  [&_tbody_tr:hover]:bg-[#102331]
                  [&_tbody_tr:hover]:scale-[1.002]

                  [&_.rt-tr-group]:border-[#132C3F]

                  shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                `
							: `
                  border-[#DCE7EF]
                `
					}
          `}>
					<DataTable columns={customerColumns} data={filteredData} />
				</div>
			</div>
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

const DashboardPage = ({ dark = false }: any) => {
	const t = dark ? ui.dark : ui.light;

	return (
		<div className={`min-h-screen overflow-hidden ${dark ? 'bg-[#07141E]' : 'bg-[#EEF4F8]'}`}>
			<div className='absolute left-[-250px] top-[-250px] h-[650px] w-[650px] bg-[#355872]/15 blur-3xl' />

			<div className='absolute bottom-[-250px] right-[-250px] h-[700px] w-[700px] bg-[#7AAACE]/10 blur-3xl' />

			<div className='relative mx-auto max-w-[1600px] px-8 py-10'>
				{/* HERO */}
				<div className='mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between'>
					<div className='space-y-5'>
						<div
							className={`inline-flex items-center gap-2 border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em]
            ${dark ? 'border-[#1E3A50] bg-[#0D1D2A] text-[#9CD5FF]' : 'border-[#DCE7EF] bg-white text-[#355872]'}`}>
							<Sparkles size={12} />
							AI NATIVE BILLING
						</div>

						<div className='space-y-5'>
							<h1 className={`max-w-5xl text-[74px] font-bold leading-[0.95] tracking-[-0.08em] ${t.text}`}>
								Monetization Infrastructure Built for AI Native Companies
							</h1>

							<p className={`max-w-4xl text-[18px] leading-relaxed ${t.sub}`}>
								Operate usage-based, credit-based and hybrid pricing with scalable billing infrastructure, real-time metering and
								intelligent reporting for modern AI products.
							</p>
						</div>
					</div>

					<div className='flex items-center gap-4'>
						<button
							className={`border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1
            ${dark ? 'border-[#1E3A50] bg-[#0D1D2A] text-[#9CD5FF]' : 'border-[#DCE7EF] bg-white text-[#355872]'}`}>
							<Download size={16} className='mr-2 inline-flex' />
							Export Report
						</button>

						<button className='bg-[#355872] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#28475E]'>
							Sync Metrics
						</button>
					</div>
				</div>

				{/* METRICS */}
				<div className='group mb-10 grid grid-cols-1 gap-6 lg:grid-cols-4'>
					{[
						['API Events', '24.5M', '+12%', Activity],
						['Credit Usage', '8.2M', '+18%', Coins],
						['Billing Streams', '3.8K', '+22%', CreditCard],
						['Infrastructure', '99.2%', '+4%', Zap],
					].map(([title, value, change, icon], i) => (
						<div
							key={i}
							className='transition-all duration-500 group-hover:scale-[0.96] group-hover:blur-[2px] hover:!scale-[1.02] hover:!blur-0'>
							<MetricCard dark={dark} title={title} value={value} change={change} icon={icon} />
						</div>
					))}
				</div>

				{/* LAYOUT */}
				<div className='grid grid-cols-1 gap-8 xl:grid-cols-[300px_1fr]'>
					<FilterPanel dark={dark} />

					<DashboardTable dark={dark} />
				</div>
			</div>
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                                   STORIES                                  */
/* -------------------------------------------------------------------------- */

export const CustomerTable: Story = {
	render: () => <DashboardPage />,
};

export const DarkTheme: Story = {
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},

	render: () => <DashboardPage dark />,
};
