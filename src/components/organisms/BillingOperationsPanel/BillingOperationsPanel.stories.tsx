import type { Meta, StoryObj } from '@storybook/react';

import BillingOperationsPanel from './BillingOperationsPanel';

const meta: Meta<typeof BillingOperationsPanel> = {
	title: 'Organisms/BillingOperationsPanel',

	component: BillingOperationsPanel,

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
			],
		},
	},
};

export default meta;

type Story = StoryObj<typeof BillingOperationsPanel>;

/* -------------------------------------------------------------------------- */
/*                                LIGHT THEME                                 */
/* -------------------------------------------------------------------------- */

export const LightTheme: Story = {
	render: () => (
		<div className='min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#EEF4F8_0%,#E7EFF5_100%)] px-4 py-10 sm:px-8 sm:py-12'>
			{/* BG */}
			<div className='absolute left-[-240px] top-[-240px] h-[620px] w-[620px] rounded-full bg-[#355872]/10 blur-3xl' />

			<div className='absolute bottom-[-260px] right-[-260px] h-[700px] w-[700px] rounded-full bg-[#7AAACE]/10 blur-3xl' />

			<div className='relative mx-auto max-w-7xl space-y-10'>
				{/* HERO */}
				<div className='space-y-7'>
					<div className='inline-flex items-center gap-2 border border-[#D7E3EC] bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.30em] text-[#355872] shadow-sm'>
						Realtime Infrastructure
					</div>

					<div className='space-y-5'>
						<h1 className='max-w-6xl bg-gradient-to-b from-[#102331] to-[#355872] bg-clip-text text-[64px] font-black leading-[0.86] tracking-[-0.10em] text-transparent sm:text-[88px] md:text-[108px]'>
							Billing
							<br />
							Operations
							<br />
							Workspace
						</h1>

						<div className='flex items-center gap-3'>
							<div className='h-[4px] w-28 bg-[#355872]' />

							<div className='h-[4px] w-10 bg-[#7AAACE]' />
						</div>
					</div>

					<p className='max-w-4xl text-[16px] leading-[1.9] text-[#5E7385] sm:text-[18px]'>
						Monitor realtime billing infrastructure, subscription workflows and usage-based monetization systems powering AI-native
						products.
					</p>
				</div>

				{/* PANEL */}
				<BillingOperationsPanel />
			</div>
		</div>
	),
};
