import React, { useState } from 'react';
import { LayoutDashboard, Users, CreditCard, Activity, BrainCircuit, ChevronLeft, ChevronRight } from 'lucide-react';

const items = [
	{
		label: 'Dashboard',
		icon: LayoutDashboard,
	},
	{
		label: 'Customers',
		icon: Users,
	},
	{
		label: 'Usage',
		icon: Activity,
	},
	{
		label: 'Invoices',
		icon: CreditCard,
	},
	{
		label: 'AI Metering',
		icon: BrainCircuit,
	},
];

interface Props {
	dark?: boolean;
}

const SidebarNav: React.FC<Props> = ({ dark = true }) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<aside
			className={`
        h-screen
        transition-all
        duration-500
        border-r
        backdrop-blur-2xl
        flex
        flex-col
        justify-between
        ${collapsed ? 'w-[92px]' : 'w-[280px]'}
      `}
			style={{
				background: dark
					? `
          linear-gradient(
            180deg,
            rgba(8,16,24,0.98),
            rgba(9,20,31,0.94)
          )
          `
					: `
          linear-gradient(
            180deg,
            rgba(255,255,255,0.92),
            rgba(245,249,252,0.95)
          )
          `,
				borderColor: dark ? 'rgba(122,170,206,0.12)' : 'rgba(53,88,114,0.08)',
			}}>
			<div>
				<div className='flex items-center justify-between px-6 py-7'>
					{!collapsed && (
						<div>
							<p
								className={`
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  mb-2
                  ${dark ? 'text-[#7AAACE]' : 'text-[#355872]'}
                `}>
								Infrastructure
							</p>

							<h1
								className={`
                  text-[28px]
                  font-black
                  tracking-[-0.08em]
                  leading-none
                  ${dark ? 'text-white' : 'text-[#102331]'}
                `}>
								Revenue OS
							</h1>
						</div>
					)}

					<button
						onClick={() => setCollapsed(!collapsed)}
						className='h-11 w-11 rounded-2xl border flex items-center justify-center transition-all duration-300 hover:scale-105'
						style={{
							borderColor: 'rgba(122,170,206,0.16)',
							background: 'rgba(122,170,206,0.08)',
						}}>
						{collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
					</button>
				</div>

				<div className='px-4 space-y-3'>
					{items.map((item, i) => {
						const Icon = item.icon;

						return (
							<button
								key={i}
								className={`
                  group
                  relative
                  overflow-hidden
                  w-full
                  rounded-2xl
                  px-4
                  py-4
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-4
                  border
                  hover:translate-x-1
                `}
								style={{
									background:
										i === 0
											? `
                      linear-gradient(
                        135deg,
                        rgba(53,88,114,0.42),
                        rgba(122,170,206,0.12)
                      )
                      `
											: 'transparent',

									borderColor: i === 0 ? 'rgba(122,170,206,0.22)' : 'transparent',
								}}>
								<div
									className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500'
									style={{
										background: 'linear-gradient(90deg, transparent, rgba(122,170,206,0.08), transparent)',
									}}
								/>

								<div
									className='h-12 w-12 rounded-2xl flex items-center justify-center border shrink-0'
									style={{
										background: 'rgba(122,170,206,0.08)',

										borderColor: 'rgba(122,170,206,0.12)',
									}}>
									<Icon size={20} color={dark ? '#EEF4F8' : '#355872'} />
								</div>

								{!collapsed && (
									<div className='text-left'>
										<p
											className={`
                        text-[15px]
                        font-semibold
                        ${dark ? 'text-white' : 'text-[#102331]'}
                      `}>
											{item.label}
										</p>

										<p
											className={`
                        text-[12px]
                        mt-1
                        ${dark ? 'text-[#7AAACE]' : 'text-[#355872]'}
                      `}>
											Realtime infrastructure
										</p>
									</div>
								)}
							</button>
						);
					})}
				</div>
			</div>

			<div className='p-4'>
				<div
					className='rounded-3xl p-5 border'
					style={{
						background: 'linear-gradient(135deg, rgba(53,88,114,0.18), rgba(122,170,206,0.08))',

						borderColor: 'rgba(122,170,206,0.16)',
					}}>
					{!collapsed && (
						<>
							<p className='text-[12px] uppercase tracking-[0.3em] text-[#7AAACE]'>Live Infrastructure</p>

							<h2
								className={`
                  mt-3
                  text-[22px]
                  font-black
                  leading-none
                  tracking-[-0.06em]
                  ${dark ? 'text-white' : 'text-[#102331]'}
                `}>
								99.98%
							</h2>

							<p className='mt-2 text-sm text-[#7AAACE]'>Global billing uptime</p>
						</>
					)}
				</div>
			</div>
		</aside>
	);
};

export default SidebarNav;
