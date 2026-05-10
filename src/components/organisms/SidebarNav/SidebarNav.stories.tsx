import type { Meta, StoryObj } from '@storybook/react';
import SidebarNav from './SidebarNav';

const meta: Meta<typeof SidebarNav> = {
	title: 'Organisms/SidebarNav',

	component: SidebarNav,

	parameters: {
		layout: 'fullscreen',
	},

	decorators: [
		(Story, context) => {
			const dark = context.args.dark ?? true;

			return (
				<div
					className='flex min-h-screen items-start justify-start overflow-hidden'
					style={{
						background: dark
							? `
              radial-gradient(
                circle at top left,
                rgba(122,170,206,0.10),
                transparent 28%
              ),

              linear-gradient(
                180deg,
                #07141E,
                #091827
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
					{/* floating glow */}
					<div
						className='absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full blur-[120px]'
						style={{
							background: 'rgba(122,170,206,0.10)',
						}}
					/>

					{/* grid */}
					<div
						className='absolute inset-0 opacity-[0.03]'
						style={{
							backgroundImage: `
                linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
              `,
							backgroundSize: '72px 72px',
						}}
					/>

					{/* sidebar container */}
					<div
						className='relative z-20'
						style={{
							boxShadow: dark
								? `
                  0 0 80px rgba(0,0,0,0.45)
                `
								: `
                  0 10px 40px rgba(53,88,114,0.08)
                `,
						}}>
						<Story />
					</div>
				</div>
			);
		},
	],
};

export default meta;

type Story = StoryObj<typeof SidebarNav>;

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
				story: 'Production-ready AI-native infrastructure sidebar navigation built for operational SaaS workflows.',
			},
		},
	},
};
