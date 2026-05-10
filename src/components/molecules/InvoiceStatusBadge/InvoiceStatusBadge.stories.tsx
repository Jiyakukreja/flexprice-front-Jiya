// src/components/molecules/InvoiceStatusBadge/InvoiceStatusBadge.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import InvoiceStatusBadge from './InvoiceStatusBadge';

import { Activity, ArrowUpRight, Clock3, CreditCard, Receipt, Sparkles } from 'lucide-react';

const meta: Meta<typeof InvoiceStatusBadge> = {
	title: 'Molecules/InvoiceStatusBadge',

	component: InvoiceStatusBadge,

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

type Story = StoryObj<typeof InvoiceStatusBadge>;

/* -------------------------------------------------------------------------- */
/*                               SHOWCASE CARD                                */
/* -------------------------------------------------------------------------- */

const InvoiceCard = ({ status, amount, customer, invoiceId, due, dark = false }: any) => {
	return (
		<div
			className={`group relative overflow-hidden border transition-all duration-500 hover:-translate-y-2

      ${
				dark
					? `
            border-[#173247]
            bg-[linear-gradient(180deg,#081722_0%,#07141E_100%)]
          `
					: `
            border-[#DCE7EF]
            bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFD_100%)]
          `
			}

      shadow-[0_24px_80px_rgba(53,88,114,0.10)]
      `}>
			{/* GLOW */}
			<div className='absolute right-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-[#355872]/10 blur-3xl transition-all duration-700 group-hover:scale-125' />

			{/* GRID */}
			<div className='absolute inset-0 opacity-[0.03] bg-[radial-gradient(#355872_1px,transparent_1px)] [background-size:18px_18px]' />

			<div className='relative space-y-8 p-8'>
				{/* TOP */}
				<div className='flex items-start justify-between gap-6'>
					<div className='space-y-5'>
						{/* BADGE */}
						<div
							className={`inline-flex items-center gap-2 border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em]

              ${dark ? 'border-[#1E3A50] bg-[#0D1D2A] text-[#9CD5FF]' : 'border-[#DCE7EF] bg-[#F8FBFD] text-[#355872]'}
              `}>
							<Sparkles size={11} />
							Invoice Infrastructure
						</div>

						{/* HEADING */}
						<div className='space-y-3'>
							<h2
								className={`text-[48px] font-black leading-[0.9] tracking-[-0.08em]

                ${dark ? 'text-white' : 'text-[#1F3447]'}
                `}>
								${amount}
							</h2>

							<div className='space-y-1.5'>
								<p
									className={`text-[16px] font-semibold

                  ${dark ? 'text-white' : 'text-[#1F3447]'}
                  `}>
									{customer}
								</p>

								<p
									className={`text-[13px]

                  ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
                  `}>
									{invoiceId}
								</p>
							</div>
						</div>
					</div>

					{/* ICON */}
					<div className='flex h-16 w-16 items-center justify-center border border-white/10 bg-[#355872] text-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110'>
						<Receipt size={28} />
					</div>
				</div>

				{/* STATUS */}
				<div className='flex items-center justify-between gap-5'>
					<InvoiceStatusBadge dark={dark} pulse={status === 'pending' || status === 'overdue'} status={status} />

					<div
						className={`flex items-center gap-2 text-[12px]

            ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
            `}>
						<Clock3 size={13} />
						Due {due}
					</div>
				</div>

				{/* USAGE */}
				<div className='space-y-3'>
					<div className='flex items-center justify-between'>
						<p
							className={`text-[12px] font-semibold uppercase tracking-[0.14em]

              ${dark ? 'text-[#9CD5FF]' : 'text-[#355872]'}
              `}>
							Usage Progress
						</p>

						<p
							className={`text-[12px] font-semibold

              ${dark ? 'text-white' : 'text-[#1F3447]'}
              `}>
							82%
						</p>
					</div>

					<div
						className={`h-2 overflow-hidden

            ${dark ? 'bg-[#102331]' : 'bg-[#E8EFF5]'}
            `}>
						<div className='h-full w-[82%] bg-[#355872] transition-all duration-700 group-hover:w-[86%]' />
					</div>
				</div>

				{/* FOOTER */}
				<div
					className={`flex items-center justify-between border-t pt-6

          ${dark ? 'border-[#173247]' : 'border-[#E5EDF4]'}
          `}>
					<div className='space-y-2'>
						<div className='flex items-center gap-2'>
							<Activity size={14} className={dark ? 'text-[#9CD5FF]' : 'text-[#355872]'} />

							<p
								className={`text-[11px] font-semibold uppercase tracking-[0.14em]

                ${dark ? 'text-[#9CD5FF]' : 'text-[#355872]'}
                `}>
								Realtime Billing
							</p>
						</div>

						<p
							className={`text-[13px]

              ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
              `}>
							AI-native infrastructure monitoring
						</p>
					</div>

					<button className='group flex items-center gap-2 bg-[#355872] px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#28475E]'>
						Open Invoice
						<ArrowUpRight size={15} className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
					</button>
				</div>
			</div>
		</div>
	);
};

/* -------------------------------------------------------------------------- */
/*                                   DEFAULT                                  */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
	render: () => (
		<div className='min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#EEF4F8_0%,#E7EFF5_100%)] px-10 py-16'>
			{/* BG */}
			<div className='absolute left-[-250px] top-[-250px] h-[650px] w-[650px] rounded-full bg-[#355872]/10 blur-3xl' />

			<div className='absolute bottom-[-250px] right-[-250px] h-[650px] w-[650px] rounded-full bg-[#7AAACE]/10 blur-3xl' />

			<div className='relative mx-auto max-w-7xl space-y-14'>
				{/* HERO */}
				<div className='space-y-5'>
					<div className='inline-flex items-center gap-2 border border-[#DCE7EF] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#355872]'>
						<CreditCard size={12} />
						Billing Infrastructure
					</div>

					<div className='space-y-4'>
						<h1 className='max-w-5xl text-[96px] font-black leading-[0.9] tracking-[-0.09em] text-[#1F3447]'>Invoice Status Monitoring</h1>

						<p className='max-w-3xl text-[18px] leading-[2] text-[#6B8193]'>
							Monitor realtime invoice states, payment infrastructure and scalable monetization systems designed for AI-native products.
						</p>
					</div>
				</div>

				{/* GRID */}
				<div className='grid grid-cols-1 gap-7 lg:grid-cols-3'>
					<InvoiceCard status='paid' amount='24,521' customer='Realtime AI Billing' invoiceId='INV-2026-021' due='May 24' />

					<InvoiceCard status='pending' amount='8,420' customer='Usage Infrastructure' invoiceId='INV-2026-022' due='May 28' />

					<InvoiceCard status='overdue' amount='2,940' customer='LLM Pricing Pipeline' invoiceId='INV-2026-023' due='May 12' />

					<InvoiceCard status='draft' amount='6,240' customer='Subscription APIs' invoiceId='INV-2026-024' due='May 31' />

					<InvoiceCard status='void' amount='0' customer='Archived Workspace' invoiceId='INV-2026-025' due='—' />
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
		<div className='min-h-screen overflow-hidden bg-[#07141E] px-10 py-14'>
			{/* SUBTLE GLOW */}
			<div className='absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#355872]/15 blur-3xl' />

			<div className='absolute bottom-[-220px] right-[-220px] h-[480px] w-[480px] rounded-full bg-[#7AAACE]/10 blur-3xl' />

			<div className='relative mx-auto max-w-7xl space-y-14'>
				{/* HERO */}
				<div className='flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between'>
					{/* LEFT */}
					<div className='max-w-4xl space-y-6'>
						<div className='inline-flex items-center gap-2 border border-[#173247] bg-[#0D1D2A] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9CD5FF]'>
							<CreditCard size={12} />
							Billing Infrastructure
						</div>

						<div className='space-y-5'>
							<h1 className='text-[92px] font-black leading-[0.9] tracking-[-0.09em] text-white'>Invoice Monitoring</h1>

							<p className='max-w-3xl text-[17px] leading-[2] text-[#8DA8BC]'>
								Monitor invoice states, payment flows and subscription infrastructure with realtime billing visibility built for AI-native
								products.
							</p>
						</div>
					</div>

					{/* RIGHT METRICS */}
					<div className='grid grid-cols-2 gap-4'>
						{[
							{
								label: 'Invoices',
								value: '12.4K',
							},

							{
								label: 'Revenue',
								value: '$1.2M',
							},

							{
								label: 'Paid',
								value: '94%',
							},

							{
								label: 'Latency',
								value: '18ms',
							},
						].map((item) => (
							<div
								key={item.label}
								className='group min-w-[150px] border border-[#173247] bg-[#0B1B27] p-5 transition-all duration-300 hover:border-[#355872]'>
								<p className='mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8DA8BC]'>{item.label}</p>

								<div className='flex items-end justify-between'>
									<h3 className='text-[34px] font-black tracking-[-0.06em] text-white'>{item.value}</h3>

									<ArrowUpRight
										size={15}
										className='text-[#9CD5FF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* GRID */}
				<div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
					<InvoiceCard dark status='paid' amount='24,521' customer='Realtime AI Billing' invoiceId='INV-2026-021' due='May 24' />

					<InvoiceCard dark status='pending' amount='8,420' customer='Usage Infrastructure' invoiceId='INV-2026-022' due='May 28' />

					<InvoiceCard dark status='overdue' amount='2,940' customer='LLM Pricing Pipeline' invoiceId='INV-2026-023' due='May 12' />
				</div>
			</div>
		</div>
	),
};
