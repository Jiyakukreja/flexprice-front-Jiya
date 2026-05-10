// src/components/molecules/RealtimeEventFeed/RealtimeEventFeed.tsx
import { Activity, AlertTriangle, CheckCircle2, Clock3, CreditCard, Sparkles, Zap } from 'lucide-react';

export interface EventItem {
	id: string;

	type: 'usage' | 'payment' | 'alert' | 'ai';

	title: string;

	description: string;

	time: string;

	amount?: string;

	live?: boolean;
}

interface Props {
	events: EventItem[];

	dark?: boolean;
}

const config = {
	usage: {
		icon: Activity,

		badge: 'Usage Event',

		light: 'border-[#7AAACE]/30 bg-[#7AAACE]/10 text-[#355872]',

		dark: 'border-[#7AAACE]/20 bg-[#7AAACE]/10 text-[#A8D3F0]',
	},

	payment: {
		icon: CreditCard,

		badge: 'Payment',

		light: 'border-emerald-200 bg-emerald-50 text-emerald-700',

		dark: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
	},

	alert: {
		icon: AlertTriangle,

		badge: 'Alert',

		light: 'border-orange-200 bg-orange-50 text-orange-700',

		dark: 'border-orange-500/20 bg-orange-500/10 text-orange-300',
	},

	ai: {
		icon: Zap,

		badge: 'AI Usage',

		light: 'border-violet-200 bg-violet-50 text-violet-700',

		dark: 'border-violet-500/20 bg-violet-500/10 text-violet-300',
	},
};

const RealtimeEventFeed = ({ events, dark = false }: Props) => {
	return (
		<div
			className={`relative overflow-hidden border

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
			<div className='absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-[#355872]/10 blur-3xl' />

			{/* GRID */}
			<div className='absolute inset-0 opacity-[0.03] bg-[radial-gradient(#355872_1px,transparent_1px)] [background-size:18px_18px]' />

			<div className='relative'>
				{/* HEADER */}
				<div
					className={`flex items-center justify-between border-b px-7 py-6

          ${dark ? 'border-[#173247]' : 'border-[#E5EDF4]'}
          `}>
					<div className='space-y-2'>
						<div
							className={`inline-flex items-center gap-2 border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em]

              ${dark ? 'border-[#1E3A50] bg-[#0D1D2A] text-[#9CD5FF]' : 'border-[#DCE7EF] bg-[#F8FBFD] text-[#355872]'}
              `}>
							<Sparkles size={10} />
							Realtime Infrastructure
						</div>

						<h2
							className={`text-[38px] font-black leading-[0.95] tracking-[-0.08em]

              ${dark ? 'text-white' : 'text-[#1F3447]'}
              `}>
							Event Feed
						</h2>
					</div>

					{/* LIVE */}
					<div
						className={`inline-flex items-center gap-2 border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]

            ${dark ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300' : 'border-emerald-200 bg-emerald-50 text-emerald-700'}
            `}>
						<span className='relative flex h-2 w-2'>
							<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-50' />

							<span className='relative inline-flex h-2 w-2 rounded-full bg-current' />
						</span>
						Live Stream
					</div>
				</div>

				{/* EVENTS */}
				<div className='divide-y divide-[#E5EDF4] dark:divide-[#173247]'>
					{events.map((event) => {
						const item = config[event.type];

						const Icon = item.icon;

						return (
							<div
								key={event.id}
								className={`group relative flex items-start gap-5 px-7 py-6 transition-all duration-300 hover:bg-black/[0.02]

                ${dark ? 'hover:bg-white/[0.02]' : ''}
                `}>
								{/* LEFT BORDER */}
								<div
									className={`absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-[#355872] transition-all duration-500 group-hover:scale-y-100`}
								/>

								{/* ICON */}
								<div
									className={`relative flex h-14 w-14 shrink-0 items-center justify-center border transition-all duration-300 group-hover:scale-105

                  ${dark ? item.dark : item.light}
                  `}>
									{event.live && (
										<span className='absolute right-1 top-1 flex h-2.5 w-2.5'>
											<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-50' />

											<span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-current' />
										</span>
									)}

									<Icon size={22} />
								</div>

								{/* CONTENT */}
								<div className='flex-1 space-y-4'>
									{/* TOP */}
									<div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
										<div className='space-y-2'>
											<div className='flex flex-wrap items-center gap-3'>
												<h3
													className={`text-[17px] font-semibold tracking-[-0.03em]

                          ${dark ? 'text-white' : 'text-[#1F3447]'}
                          `}>
													{event.title}
												</h3>

												<div
													className={`inline-flex items-center gap-2 border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]

                          ${dark ? item.dark : item.light}
                          `}>
													{item.badge}
												</div>
											</div>

											<p
												className={`max-w-3xl text-[14px] leading-[1.9]

                        ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
                        `}>
												{event.description}
											</p>
										</div>

										{/* AMOUNT */}
										{event.amount && (
											<div className='text-right'>
												<p
													className={`text-[28px] font-black tracking-[-0.06em]

                          ${dark ? 'text-white' : 'text-[#1F3447]'}
                          `}>
													{event.amount}
												</p>
											</div>
										)}
									</div>

									{/* FOOTER */}
									<div className='flex items-center justify-between gap-4'>
										<div
											className={`flex items-center gap-2 text-[12px]

                      ${dark ? 'text-[#8DA8BC]' : 'text-[#6B8193]'}
                      `}>
											<Clock3 size={13} />

											{event.time}
										</div>

										<div className='flex items-center gap-2 text-[12px] font-medium text-[#355872]'>
											<CheckCircle2 size={13} />
											Synced
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default RealtimeEventFeed;
