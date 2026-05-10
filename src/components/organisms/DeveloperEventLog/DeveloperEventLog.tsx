// DeveloperEventLog.tsx

import { useEffect, useState } from 'react';

import { Activity, CreditCard, Coins, Zap, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

const randomTitles = [
	'Realtime usage spike',
	'Billing workflow synced',
	'AI metering updated',
	'Invoice pipeline processed',
	'Infrastructure latency reduced',
];

const randomDescriptions = [
	'Realtime AI infrastructure updated successfully.',
	'Operational billing pipelines synced instantly.',
	'Usage metering refreshed across workspaces.',
	'Developer runtime events processed successfully.',
	'AI-native infrastructure streams updated.',
];

const randomMetrics = [
	() => `${Math.floor(Math.random() * 90)}ms`,
	() => `${(Math.random() * 9).toFixed(1)}M`,
	() => `$${Math.floor(Math.random() * 20000)}`,
	() => `${Math.floor(Math.random() * 99)}%`,
];

const baseEvents = [
	{
		id: 1,
		title: 'Realtime usage spike',
		description: 'AI token traffic exceeded projected threshold across inference pipelines.',
		metric: '2.4M',
		status: 'Realtime',
		icon: Activity,
	},

	{
		id: 2,
		title: 'Invoice pipeline synced',
		description: 'Enterprise billing invoice processed successfully across subscriptions.',
		metric: '$12,420',
		status: 'Billing',
		icon: CreditCard,
	},

	{
		id: 3,
		title: 'Credit balance updated',
		description: 'Usage credits refreshed instantly across developer workspaces.',
		metric: '8.2M',
		status: 'Credits',
		icon: Coins,
	},

	{
		id: 4,
		title: 'LLM metering synced',
		description: 'Realtime token metering synced across AI-native runtime systems.',
		metric: '18ms',
		status: 'AI Runtime',
		icon: Zap,
	},
];

const DeveloperEventLog = () => {
	const [events, setEvents] = useState(baseEvents);

	useEffect(() => {
		const interval = setInterval(() => {
			setEvents((prev) => {
				const updated = [...prev];

				updated.unshift({
					id: Date.now(),

					title: randomTitles[Math.floor(Math.random() * randomTitles.length)],

					description: randomDescriptions[Math.floor(Math.random() * randomDescriptions.length)],

					metric: randomMetrics[Math.floor(Math.random() * randomMetrics.length)](),

					status: 'Live',

					icon: Activity,
				});

				return updated.slice(0, 6);
			});
		}, 3500);

		return () => clearInterval(interval);
	}, []);

	return (
		<section
			className='relative min-h-screen overflow-hidden px-10 py-14'
			style={{
				background: `
          radial-gradient(
            circle at top left,
            rgba(122,170,206,0.20),
            transparent 24%
          ),

          radial-gradient(
            circle at bottom right,
            rgba(53,88,114,0.16),
            transparent 32%
          ),

          linear-gradient(
            180deg,
            #F8FBFD,
            #EEF4F8
          )
        `,
			}}>
			{/* GRID */}
			<div
				className='absolute inset-0 opacity-[0.05]'
				style={{
					backgroundImage: `
            linear-gradient(rgba(53,88,114,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(53,88,114,0.15) 1px, transparent 1px)
          `,
					backgroundSize: '90px 90px',
				}}
			/>

			{/* GLOW */}
			<div
				className='absolute left-[10%] top-[10%] h-[320px] w-[320px] rounded-full blur-[120px]'
				style={{
					background: 'rgba(122,170,206,0.22)',
				}}
			/>

			{/* PANEL */}
			<div
				className='relative mx-auto max-w-7xl overflow-hidden rounded-[40px] border backdrop-blur-2xl'
				style={{
					background: 'rgba(255,255,255,0.62)',

					border: '1px solid rgba(122,170,206,0.18)',

					boxShadow: `
            0 40px 120px rgba(53,88,114,0.10),
            inset 0 1px 0 rgba(255,255,255,0.7)
          `,
				}}>
				{/* TOP */}
				<div
					className='flex items-center justify-between border-b px-10 py-7'
					style={{
						borderColor: 'rgba(122,170,206,0.16)',
					}}>
					<div className='flex items-center gap-5'>
						<div
							className='flex h-14 w-14 items-center justify-center rounded-3xl'
							style={{
								background: 'linear-gradient(135deg,#355872,#7AAACE)',

								boxShadow: '0 10px 30px rgba(122,170,206,0.35)',
							}}>
							<Sparkles size={24} color='white' />
						</div>

						<div>
							<p
								className='text-[11px] font-bold uppercase tracking-[0.32em]'
								style={{
									color: '#7AAACE',
								}}>
								AI INFRASTRUCTURE
							</p>

							<h1
								className='mt-2 text-[68px] font-black leading-[0.88] tracking-[-0.08em]'
								style={{
									background: 'linear-gradient(180deg,#355872 0%,#7AAACE 100%)',

									WebkitBackgroundClip: 'text',

									WebkitTextFillColor: 'transparent',
								}}>
								Developer
								<br />
								Event Stream
							</h1>
						</div>
					</div>

					{/* LIVE */}
					<div
						className='flex items-center gap-3 rounded-full px-5 py-3'
						style={{
							background: 'rgba(122,170,206,0.12)',

							border: '1px solid rgba(122,170,206,0.20)',

							backdropFilter: 'blur(18px)',
						}}>
						<span className='h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500' />

						<span
							className='text-xs font-bold uppercase tracking-[0.18em]'
							style={{
								color: '#355872',
							}}>
							LIVE STREAM
						</span>
					</div>
				</div>

				{/* CONTENT */}
				<div className='grid grid-cols-12'>
					{/* SIDEBAR */}
					<div
						className='col-span-3 border-r p-6'
						style={{
							borderColor: 'rgba(122,170,206,0.14)',
						}}>
						<div
							className='rounded-[32px] p-5'
							style={{
								background: 'rgba(255,255,255,0.48)',

								border: '1px solid rgba(122,170,206,0.16)',

								backdropFilter: 'blur(24px)',

								boxShadow: '0 20px 50px rgba(53,88,114,0.08)',
							}}>
							<div className='flex items-center gap-3'>
								<Terminal size={20} color='#7AAACE' />

								<div>
									<p
										className='text-xs uppercase tracking-[0.18em]'
										style={{
											color: '#7AAACE',
										}}>
										Runtime
									</p>

									<h3
										className='mt-1 text-lg font-black'
										style={{
											color: '#102331',
										}}>
										Infrastructure Layer
									</h3>
								</div>
							</div>

							<div className='mt-8 space-y-4'>
								{[
									['Realtime Events', '24.5M'],
									['Event Streams', '128'],
									['Latency', '18ms'],
									['Sync Accuracy', '99.9%'],
								].map((item) => (
									<div
										key={item[0]}
										className='rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1'
										style={{
											background: 'rgba(255,255,255,0.56)',

											border: '1px solid rgba(122,170,206,0.14)',

											backdropFilter: 'blur(18px)',
										}}>
										<p
											className='text-[11px] uppercase tracking-[0.16em]'
											style={{
												color: '#7AAACE',
											}}>
											{item[0]}
										</p>

										<div
											className='mt-3 text-[36px] font-black tracking-[-0.06em]'
											style={{
												color: '#102331',
											}}>
											{item[1]}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* EVENTS */}
					<div className='col-span-9 p-6'>
						<div className='space-y-5'>
							{events.map((event) => {
								const Icon = event.icon;

								return (
									<div
										key={event.id}
										className='group flex items-start justify-between gap-6 rounded-[32px] p-6 transition-all duration-300 hover:-translate-y-1'
										style={{
											background: 'rgba(255,255,255,0.52)',

											border: '1px solid rgba(122,170,206,0.16)',

											backdropFilter: 'blur(24px)',

											boxShadow: '0 18px 50px rgba(53,88,114,0.06)',
										}}>
										<div className='flex gap-5'>
											<div
												className='flex h-16 w-16 items-center justify-center rounded-3xl'
												style={{
													background: 'linear-gradient(135deg,#355872,#7AAACE)',

													boxShadow: '0 10px 25px rgba(122,170,206,0.22)',
												}}>
												<Icon size={24} color='white' />
											</div>

											<div>
												<div className='flex items-center gap-3'>
													<h3
														className='text-[30px] font-black tracking-[-0.05em]'
														style={{
															color: '#102331',
														}}>
														{event.title}
													</h3>

													<div
														className='rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]'
														style={{
															background: 'rgba(122,170,206,0.14)',

															color: '#355872',
														}}>
														{event.status}
													</div>
												</div>

												<p
													className='mt-3 max-w-3xl text-[15px] leading-8'
													style={{
														color: '#5F7386',
													}}>
													{event.description}
												</p>
											</div>
										</div>

										<div className='text-right'>
											<div
												className='text-[46px] font-black tracking-[-0.08em]'
												style={{
													background: 'linear-gradient(180deg,#355872,#7AAACE)',

													WebkitBackgroundClip: 'text',

													WebkitTextFillColor: 'transparent',
												}}>
												{event.metric}
											</div>

											<div
												className='mt-3 flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-[0.12em]'
												style={{
													color: '#355872',
												}}>
												Synced
												<ArrowUpRight size={13} />
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DeveloperEventLog;
