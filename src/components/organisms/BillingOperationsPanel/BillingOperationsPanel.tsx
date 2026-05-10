import React from 'react';

import { Activity, ArrowUpRight, CreditCard, Database, Layers3, TrendingUp, Zap } from 'lucide-react';

const metrics = [
	{
		title: 'Realtime Events',
		value: '24.5M',
		growth: '+18%',
		icon: Activity,
	},

	{
		title: 'Usage Streams',
		value: '128',
		growth: '+9%',
		icon: Layers3,
	},

	{
		title: 'AI Token Usage',
		value: '8.2M',
		growth: '+31%',
		icon: Zap,
	},

	{
		title: 'Billing Accuracy',
		value: '99.9%',
		growth: '+4%',
		icon: Database,
	},
];

const events = [
	{
		title: 'Usage threshold exceeded',
		tag: 'USAGE EVENT',
		amount: '2.4M',
		desc: '95% monthly API quota consumed across realtime infrastructure.',
	},

	{
		title: 'Invoice payment processed',
		tag: 'PAYMENT',
		amount: '$12,420',
		desc: 'Enterprise invoice synced successfully to billing systems.',
	},

	{
		title: 'AI token metering spike',
		tag: 'AI USAGE',
		amount: '8.2M',
		desc: 'Realtime inference traffic increased across active pipelines.',
	},
];

const BillingOperationsPanel: React.FC = () => {
	return (
		<section className='relative overflow-hidden rounded-[30px] border border-[#DCE7EF] bg-white shadow-[0_30px_90px_rgba(53,88,114,0.12)] transition-all duration-500'>
			<div className='pointer-events-none absolute left-[-180px] top-[-200px] h-[420px] w-[420px] rounded-full bg-[#355872]/10 blur-3xl' />

			<div className='pointer-events-none absolute bottom-[-220px] right-[-220px] h-[420px] w-[420px] rounded-full bg-[#7AAACE]/10 blur-3xl' />

			<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(122,170,206,0.06),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(53,88,114,0.08),transparent_45%)]' />

			{/* METRICS */}
			<div className='relative grid grid-cols-1 gap-5 p-6 sm:p-8 lg:grid-cols-4'>
				{metrics.map((item) => {
					const Icon = item.icon;

					return (
						<button
							key={item.title}
							className='group relative overflow-hidden rounded-[22px] border border-[#DCE7EF] bg-[#FCFEFF] p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-[#355872] hover:shadow-[0_20px_50px_rgba(53,88,114,0.10)] active:scale-[0.98]'>
							<div className='absolute right-[-60px] top-[-60px] h-[140px] w-[140px] rounded-full bg-[#355872]/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100' />

							<div className='relative space-y-7'>
								<div className='flex items-center justify-between'>
									<div className='flex h-12 w-12 items-center justify-center rounded-xl border border-[#DCE7EF] bg-white text-[#355872]'>
										<Icon size={20} />
									</div>

									<span className='rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700'>{item.growth}</span>
								</div>

								<div className='space-y-2'>
									<p className='text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6B8193]'>{item.title}</p>

									<h3 className='text-[44px] font-black tracking-[-0.08em] text-[#102331]'>{item.value}</h3>
								</div>
							</div>
						</button>
					);
				})}
			</div>

			{/* EVENTS */}
			<div className='relative border-t border-[#E2EBF2]'>
				{events.map((item) => (
					<button
						key={item.title}
						className='group flex w-full items-start justify-between border-b border-[#E2EBF2] p-6 text-left transition-all duration-300 hover:bg-[#F8FBFD] sm:p-8'>
						<div className='flex items-start gap-5'>
							<div className='mt-1 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DCE7EF] bg-white text-[#355872]'>
								<CreditCard size={20} />
							</div>

							<div className='space-y-3'>
								<div className='flex items-center gap-3'>
									<h3 className='text-[24px] font-black tracking-[-0.05em] text-[#102331]'>{item.title}</h3>

									<span className='rounded-full border border-[#DCE7EF] bg-[#EEF4F8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#355872]'>
										{item.tag}
									</span>
								</div>

								<p className='max-w-2xl text-[15px] leading-[1.9] text-[#5E7385]'>{item.desc}</p>

								<div className='flex items-center gap-2 text-sm text-[#7AAACE]'>
									<TrendingUp size={14} />
									Synced realtime
								</div>
							</div>
						</div>

						<div className='space-y-4 text-right'>
							<h2 className='text-[42px] font-black tracking-[-0.08em] text-[#102331]'>{item.amount ?? '--'}</h2>

							<ArrowUpRight
								size={18}
								className='ml-auto text-[#7AAACE] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
							/>
						</div>
					</button>
				))}
			</div>
		</section>
	);
};

export default BillingOperationsPanel;
