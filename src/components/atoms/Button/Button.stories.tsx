import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],

	parameters: {
		layout: 'centered',
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

	decorators: [
		(Story) => (
			<div className='bg-[#EEF4F8] flex items-center justify-center rounded-[30px] p-16'>
				{/* Ambient Glow */}
				<div className='absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-[#093C5D]/10 blur-3xl' />

				<div className='absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#093C5D]/10 blur-3xl' />

				<div className='relative'>
					<Story />
				</div>
			</div>
		),
	],

	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'ghost', 'danger'],
		},

		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},

		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

/* -------------------------------- PRIMARY -------------------------------- */

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Create Plan',
	},

	render: (args) => (
		<button className='group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#093C5D] shadow-[6px_6px_12px_#d7e5ee,-6px_-6px_12px_#ffffff] transition-all duration-500 hover:scale-105 active:scale-95'>
			{/* Animated Fill */}
			<span className='absolute left-0 top-0 h-full w-0 rounded-full bg-[linear-gradient(to_right,#093C5D,#4A90B5)] transition-all duration-500 ease-out group-hover:w-full' />

			{/* Text */}
			<span className='relative z-10 transition-colors duration-500 group-hover:text-white'>{args.children}</span>
		</button>
	),
};

/* -------------------------------- SECONDARY -------------------------------- */

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Cancel',
	},

	render: (args) => (
		<button className='group relative overflow-hidden rounded-full border border-[#093C5D]/15 bg-white/70 px-8 py-4 text-sm font-semibold text-[#093C5D] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(9,60,93,0.12)]'>
			{/* Glow */}
			<span className='absolute inset-0 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 bg-[#093C5D]/10' />

			{/* Text */}
			<span className='relative z-10'>{args.children}</span>
		</button>
	),
};

/* -------------------------------- GHOST -------------------------------- */

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		children: 'Learn More',
	},

	render: (args) => (
		<button className='group relative rounded-full px-8 py-4 text-sm font-semibold text-[#093C5D] transition-all duration-500 hover:text-white'>
			{/* Border */}
			<span className='absolute inset-0 rounded-full border border-[#093C5D]/20 transition-all duration-500 group-hover:border-transparent' />

			{/* Background */}
			<span className='absolute inset-0 scale-0 rounded-full bg-[#093C5D] transition-all duration-500 group-hover:scale-100' />

			{/* Text */}
			<span className='relative z-10'>{args.children}</span>
		</button>
	),
};

/* -------------------------------- DANGER -------------------------------- */

export const Danger: Story = {
	args: {
		variant: 'danger',
		children: 'Delete Customer',
	},

	render: (args) => (
		<button className='group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-red-500 shadow-[0_10px_30px_rgba(239,68,68,0.10)] transition-all duration-500 hover:scale-105'>
			{/* Fill */}
			<span className='absolute left-0 top-0 h-full w-0 rounded-full bg-[linear-gradient(to_right,#ef4444,#f87171)] transition-all duration-500 group-hover:w-full' />

			{/* Text */}
			<span className='relative z-10 transition-colors duration-500 group-hover:text-white'>{args.children}</span>
		</button>
	),
};

/* -------------------------------- LOADING -------------------------------- */

export const Loading: Story = {
	args: {
		variant: 'primary',
		loading: true,
		children: 'Saving...',
	},

	render: (args) => (
		<button className='flex items-center gap-3 rounded-full bg-[#093C5D] px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(9,60,93,0.18)] transition-all duration-500 hover:scale-105'>
			{/* Spinner */}
			<span className='h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin' />

			{args.children}
		</button>
	),
};

/* -------------------------------- DISABLED -------------------------------- */

/* -------------------------------- DISABLED -------------------------------- */

export const Disabled: Story = {
	args: {
		variant: 'primary',
		disabled: true,
		children: 'Unavailable',
	},

	render: (args) => (
		<button
			disabled
			className='group relative overflow-hidden cursor-not-allowed rounded-full border border-[#093C5D]/10 bg-[#EAF2F7] px-8 py-4 text-sm font-semibold text-[#7A98AE] shadow-[0_12px_35px_rgba(9,60,93,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(9,60,93,0.18)]'>
			{/* Soft Hover Glow */}
			<span className='absolute inset-0 rounded-full bg-[linear-gradient(to_right,#dfeaf1,#f8fbfd,#dfeaf1)] opacity-0 transition-all duration-500 group-hover:opacity-100' />

			{/* Text */}
			<span className='relative z-10 flex items-center gap-2 transition-all duration-500 group-hover:text-[#093C5D]'>
				<span className='opacity-60'>🔒</span>

				{args.children}
			</span>
		</button>
	),
};

/* -------------------------------- SMALL -------------------------------- */

export const Small: Story = {
	args: {
		variant: 'primary',
		size: 'sm',
		children: 'Add',
	},

	render: (args) => (
		<button className='group relative overflow-hidden rounded-full bg-[#093C5D] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-500 hover:scale-110 hover:shadow-[0_10px_30px_rgba(9,60,93,0.18)]'>
			<span className='absolute inset-0 bg-[linear-gradient(to_right,#093C5D,#4A90B5)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

			<span className='relative z-10'>{args.children}</span>
		</button>
	),
};

export const Large: Story = {
	args: {
		variant: 'primary',
		size: 'lg',
		children: 'Get Started',
	},

	render: (args) => (
		<button
			className={`group relative overflow-hidden rounded-full bg-[#093C5D] font-semibold text-white transition-all duration-700 ease-out

      ${
				args.size === 'sm'
					? 'px-5 py-2 text-xs shadow-[0_8px_20px_rgba(9,60,93,0.15)]'
					: args.size === 'md'
						? 'px-8 py-4 text-sm shadow-[0_12px_35px_rgba(9,60,93,0.18)]'
						: 'px-12 py-6 text-lg shadow-[0_25px_80px_rgba(9,60,93,0.38)] scale-105'
			}

      hover:-translate-y-1 hover:shadow-[0_35px_100px_rgba(9,60,93,0.45)]
      active:scale-[0.98]
      `}>
			{/* Shine */}
			<span className='absolute left-[-100%] top-0 h-full w-[60%] rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[140%]' />

			{/* Glow */}
			<span
				className={`absolute inset-0 rounded-full transition-all duration-700
        ${args.size === 'lg' ? 'bg-[#4A90B5]/10 animate-pulse' : ''}`}
			/>

			<span className='relative z-10'>{args.children}</span>
		</button>
	),
};

/* -------------------------------- CLICK TEST -------------------------------- */

export const ClickTest: Story = {
	args: {
		variant: 'primary',
		children: 'Click Me',
	},

	render: (args) => (
		<button className='group relative overflow-hidden rounded-full bg-[#093C5D] px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(9,60,93,0.18)] transition-all duration-500 hover:scale-105 active:scale-95'>
			<span className='absolute inset-0 bg-[linear-gradient(to_right,#093C5D,#4A90B5)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

			<span className='relative z-10'>{args.children}</span>
		</button>
	),

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const button = canvas.getByRole('button');

		await userEvent.click(button);

		await expect(button).toBeInTheDocument();
	},
};
