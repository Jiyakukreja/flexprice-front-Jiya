import React from 'react';

import { Sparkles, ArrowRight } from 'lucide-react';

interface Props {
	dark?: boolean;
}

const EmptyState: React.FC<Props> = ({ dark = true }) => {
	return (
		<section
			className='relative min-h-screen flex items-center justify-center overflow-hidden p-10'
			style={{
				background: dark
					? `
          radial-gradient(
            circle at top,
            rgba(122,170,206,0.14),
            transparent 20%
          ),

          linear-gradient(
            180deg,
            #07141E 0%,
            #0B1823 45%,
            #102331 100%
          )
          `
					: `
          linear-gradient(
            180deg,
            #EEF4F8,
            #F8FBFD
          )
          `,
			}}>
			{/* top glow */}
			<div
				className='absolute top-[-120px] left-[-80px] h-[320px] w-[320px] rounded-full blur-[120px]'
				style={{
					background: 'rgba(122,170,206,0.12)',
				}}
			/>

			{/* bottom glow */}
			<div
				className='absolute bottom-[-120px] right-[-80px] h-[280px] w-[280px] rounded-full blur-[120px]'
				style={{
					background: 'rgba(53,88,114,0.28)',
				}}
			/>

			{/* CARD */}
			<div
				className='relative z-20 max-w-3xl w-full overflow-hidden rounded-[42px] border p-14 backdrop-blur-2xl'
				style={{
					background: dark
						? `
            linear-gradient(
              145deg,
              rgba(10,20,31,0.96),
              rgba(14,28,42,0.92)
            )
            `
						: `
            linear-gradient(
              180deg,
              rgba(255,255,255,0.96),
              rgba(248,252,255,0.94)
            )
            `,

					borderColor: dark ? 'rgba(122,170,206,0.14)' : 'rgba(53,88,114,0.08)',

					boxShadow: dark
						? `
              0 30px 90px rgba(0,0,0,0.55),
              inset 0 1px 0 rgba(255,255,255,0.04)
            `
						: `
              0 20px 50px rgba(53,88,114,0.10)
            `,
				}}>
				{/* floating light */}
				<div
					className='absolute right-0 top-0 h-[240px] w-[240px] rounded-full blur-[100px]'
					style={{
						background: 'rgba(122,170,206,0.12)',
					}}
				/>

				<div className='relative z-10'>
					{/* icon */}
					<div
						className='mb-8 flex h-20 w-20 items-center justify-center rounded-[28px] border'
						style={{
							background: 'linear-gradient(135deg, rgba(53,88,114,0.34), rgba(122,170,206,0.14))',

							borderColor: 'rgba(122,170,206,0.16)',

							boxShadow: '0 10px 30px rgba(122,170,206,0.12)',
						}}>
						<Sparkles size={34} color='#7AAACE' />
					</div>

					{/* label */}
					<p className='mb-5 text-[12px] uppercase tracking-[0.38em] text-[#7AAACE]'>Realtime Infrastructure</p>

					{/* heading */}
					<h1
						className={`
    max-w-[900px]

    text-[92px]
    md:text-[110px]

    font-black
    leading-[0.84]
    tracking-[-0.12em]

    relative

    ${
			dark
				? `
        bg-gradient-to-b
        from-white
        via-[#EAF6FF]
        to-[#7AAACE]
        bg-clip-text
        text-transparent
        `
				: `
        bg-gradient-to-b
        from-[#102331]
        to-[#355872]
        bg-clip-text
        text-transparent
        `
		}
  `}
						style={{
							textShadow: dark
								? `
        0 0 40px rgba(122,170,206,0.22),
        0 0 90px rgba(122,170,206,0.08)
      `
								: `
        0 10px 40px rgba(53,88,114,0.12)
      `,
						}}>
						No Usage
						<br />
						<span className='relative'>
							Events Yet
							{/* underline glow */}
							<span
								className='absolute -bottom-3 left-1 h-[10px] w-[92%] rounded-full blur-xl'
								style={{
									background: 'rgba(122,170,206,0.28)',
								}}
							/>
						</span>
					</h1>

					{/* paragraph */}
					<p
						className={`
              mt-8
              max-w-xl
              text-[18px]
              leading-9

              ${dark ? 'text-[#C7DFF0]' : 'text-[#355872]'}
            `}>
						Start monitoring AI-native infrastructure, billing pipelines and realtime usage streams from a unified operational layer.
					</p>

					{/* buttons */}
					<div className='mt-12 flex flex-wrap gap-5'>
						<button
							className='group relative overflow-hidden rounded-2xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.03]'
							style={{
								background: 'linear-gradient(135deg, #355872, #7AAACE)',

								boxShadow: '0 12px 40px rgba(122,170,206,0.18)',
							}}>
							<div
								className='absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100'
								style={{
									background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
								}}
							/>

							<div className='relative z-10 flex items-center gap-3'>
								Launch Monitoring
								<ArrowRight size={18} className='transition-all duration-300 group-hover:translate-x-1' />
							</div>
						</button>

						<button
							className={`
                rounded-2xl
                border
                px-8
                py-4
                font-medium
                transition-all
                duration-300

                hover:scale-[1.02]
                hover:bg-white/5

                ${dark ? 'text-[#EEF4F8]' : 'text-[#355872]'}
              `}
							style={{
								borderColor: 'rgba(122,170,206,0.18)',

								background: dark ? 'rgba(122,170,206,0.04)' : 'rgba(255,255,255,0.72)',
							}}>
							Developer Docs
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmptyState;
