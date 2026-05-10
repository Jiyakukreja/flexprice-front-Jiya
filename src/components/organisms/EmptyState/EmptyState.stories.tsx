import type { Meta, StoryObj } from '@storybook/react';
import EmptyState from './EmptyState';

const meta: Meta<typeof EmptyState> = {
	title: 'Organisms/EmptyState',

	component: EmptyState,

	parameters: {
		layout: 'fullscreen',
	},

	decorators: [
		(Story, context) => {
			const dark = context.args.dark ?? true;

			return (
				<div
					className='relative min-h-screen w-full overflow-hidden'
					style={{
						background: dark
							? `
              radial-gradient(
                circle at top left,
                rgba(122,170,206,0.14),
                transparent 24%
              ),

              radial-gradient(
                circle at bottom right,
                rgba(53,88,114,0.30),
                transparent 34%
              ),

              linear-gradient(
                180deg,
                #07141E 0%,
                #0B1823 45%,
                #102331 100%
              )
              `
							: `
              radial-gradient(
                circle at top left,
                rgba(122,170,206,0.12),
                transparent 28%
              ),

              radial-gradient(
                circle at bottom right,
                rgba(53,88,114,0.08),
                transparent 35%
              ),

              linear-gradient(
                180deg,
                #EEF4F8,
                #F7FBFD
              )
              `,
					}}>
					{/* TOP GLOW */}
					<div
						className='absolute left-[-120px] top-[-120px] h-[340px] w-[340px] rounded-full blur-[130px]'
						style={{
							background: 'rgba(122,170,206,0.16)',
						}}
					/>

					{/* BOTTOM GLOW */}
					<div
						className='absolute bottom-[-100px] right-[-80px] h-[300px] w-[300px] rounded-full blur-[120px]'
						style={{
							background: 'rgba(53,88,114,0.32)',
						}}
					/>

					{/* CENTER LIGHT */}
					<div
						className='absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]'
						style={{
							background: dark ? 'rgba(122,170,206,0.06)' : 'rgba(122,170,206,0.08)',
						}}
					/>

					{/* GRID */}
					<div
						className='absolute inset-0 opacity-[0.035]'
						style={{
							backgroundImage: `
                linear-gradient(rgba(122,170,206,0.22) 1px, transparent 1px),
                linear-gradient(90deg, rgba(122,170,206,0.22) 1px, transparent 1px)
              `,
							backgroundSize: '78px 78px',
						}}
					/>

					{/* DEPTH SHADOW */}
					<div
						className='absolute inset-0'
						style={{
							boxShadow: dark
								? `
                  inset 0 0 160px rgba(122,170,206,0.06),
                  inset 0 -140px 200px rgba(0,0,0,0.72)
                `
								: `
                  inset 0 0 120px rgba(122,170,206,0.08)
                `,
						}}
					/>

					{/* CONTENT */}
					<div
						className={`
              relative
              z-20

              ${
								dark
									? `
                  text-[#EEF4F8]
                  `
									: `
                  text-[#102331]
                  `
							}
            `}>
						<Story />
					</div>
				</div>
			);
		},
	],
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Dark: Story = {
	args: {
		dark: true,
	},
};

export const Light: Story = {
	args: {
		dark: false,
	},
};

export const ProductionPreview: Story = {
	args: {
		dark: true,
	},

	parameters: {
		docs: {
			description: {
				story: 'Realtime operational empty state designed for AI-native infrastructure and billing workflows.',
			},
		},
	},
};
