import type { Meta, StoryObj } from '@storybook/react';
import TierBreakdown from './TierBreakdown';
import { TIER_MODE } from '@/models/Price';

const meta: Meta<typeof TierBreakdown> = {
	title: 'Molecules/TierBreakdown',
	component: TierBreakdown,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'light',
			values: [{ name: 'light', value: '#EEF4F8' }],
		},
	},
	decorators: [
		(Story: any) => (
			<div className='min-h-screen bg-[#EEF4F8] flex items-center justify-center p-10'>
				<div className='w-full max-w-2xl'>
					<Story />
				</div>
			</div>
		),
	],
};
export default meta;
type Story = StoryObj<typeof TierBreakdown>;

const slabTiers = [
	{ range: '0 - 100', quantity: '100', rate: '0.10', cost: '10.00' },
	{ range: '101 - 500', quantity: '400', rate: '0.08', cost: '32.00' },
	{ range: '501 - 1000', quantity: '500', rate: '0.06', cost: '30.00' },
];

const volumeTiers = [{ range: '0 - 1000', quantity: '1000', rate: '0.05', cost: '50.00' }];

export const SlabMode: Story = {
	args: {
		tiers: slabTiers,
		totalCost: '72.00',
		effectiveRate: '0.072',
		tierMode: TIER_MODE.SLAB,
		currency: 'USD',
		usageQuantity: '1000',
	},
};

export const VolumeMode: Story = {
	args: {
		tiers: volumeTiers,
		totalCost: '50.00',
		effectiveRate: '0.05',
		tierMode: TIER_MODE.VOLUME,
		currency: 'USD',
		usageQuantity: '1000',
	},
};

export const EmptyTiers: Story = {
	args: {
		tiers: [],
		totalCost: '0.00',
		effectiveRate: '0.00',
		tierMode: TIER_MODE.SLAB,
		currency: 'USD',
		usageQuantity: '0',
	},
};

export const INRCurrency: Story = {
	args: {
		tiers: slabTiers,
		totalCost: '5,904.00',
		effectiveRate: '5.90',
		tierMode: TIER_MODE.SLAB,
		currency: 'INR',
		usageQuantity: '1000',
	},
};
