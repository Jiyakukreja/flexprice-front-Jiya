import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
	title: 'Atoms/Tooltip',
	component: Tooltip,

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

	tags: ['autodocs'],
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},

		className: {
			table: {
				disable: true,
			},
		},

		content: {
			control: 'text',
		},

		side: {
			control: 'select',
			options: ['top', 'right', 'bottom', 'left'],
		},

		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
		},

		delayDuration: {
			control: 'number',
		},
	},
	decorators: [
		(Story) => (
			<div className='flex min-h-[420px] items-center justify-center bg-[#EEF4F8] p-12'>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/* -------------------------------------------------------------------------- */
/*                                   BUTTON                                   */
/* -------------------------------------------------------------------------- */

const TriggerBtn = ({
	text = 'Explore',
	variant = 'default',
}: {
	text?: string;
	variant?: 'default' | 'bottom' | 'right' | 'left' | 'delay' | 'rich';
}) => {
	const styles = {
		default: 'bg-[#355872] border-[#355872] hover:bg-white hover:text-[#355872] hover:shadow-[0_18px_45px_rgba(53,88,114,0.22)]',

		bottom: 'bg-[#4A6C82] border-[#4A6C82] hover:bg-[#27485F] hover:border-[#27485F] hover:shadow-[0_18px_45px_rgba(39,72,95,0.22)]',

		right: 'bg-[#27485F] border-[#27485F] hover:bg-white hover:text-[#27485F] hover:shadow-[0_18px_45px_rgba(39,72,95,0.22)]',

		left: 'bg-[#355872] border-[#355872] hover:bg-[#EEF4F8] hover:text-[#355872] hover:shadow-[0_18px_45px_rgba(53,88,114,0.16)]',

		delay: 'bg-[#1F3A4D] border-[#1F3A4D] hover:bg-[#355872] hover:border-[#355872] hover:shadow-[0_18px_45px_rgba(31,58,77,0.24)]',

		rich: 'bg-[#355872] border-[#355872] hover:bg-white hover:text-[#355872] hover:shadow-[0_18px_45px_rgba(53,88,114,0.24)]',
	};

	return (
		<button
			className={`group relative inline-flex min-w-[220px] items-center justify-center gap-4 overflow-hidden rounded-full border-2 px-7 py-4 text-[15px] font-semibold tracking-[0.2px] text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] ${styles[variant]}`}>
			{/* ICON */}
			<span className='relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white transition-all duration-300 group-hover:scale-110'>
				{/* DEFAULT + LEFT + RICH */}
				{(variant === 'default' || variant === 'left' || variant === 'rich') && (
					<>
						<svg
							viewBox='0 0 14 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='absolute h-[12px] w-[12px] text-[#355872] transition-all duration-300 group-hover:translate-x-[180%] group-hover:-translate-y-[180%]'>
							<path
								d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
								fill='currentColor'
							/>
						</svg>

						<svg
							viewBox='0 0 14 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='absolute h-[12px] w-[12px] translate-x-[-180%] translate-y-[180%] text-[#355872] transition-all duration-300 delay-100 group-hover:translate-x-0 group-hover:translate-y-0'>
							<path
								d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
								fill='currentColor'
							/>
						</svg>
					</>
				)}

				{/* PLUS */}
				{variant === 'bottom' && (
					<span className='text-[22px] font-light text-[#4A6C82] transition-all duration-300 group-hover:rotate-45'>+</span>
				)}

				{/* DOT */}
				{variant === 'right' && <span className='h-3 w-3 rounded-full bg-[#27485F] transition-all duration-300 group-hover:scale-[2.5]' />}

				{/* CHEVRON */}
				{variant === 'delay' && (
					<svg
						className='h-4 w-4 text-[#1F3A4D] transition-all duration-300 group-hover:translate-x-1'
						fill='none'
						stroke='currentColor'
						strokeWidth='2.5'
						viewBox='0 0 24 24'>
						<path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
					</svg>
				)}
			</span>

			{/* TEXT */}
			<span className='relative whitespace-nowrap'>{text}</span>
		</button>
	);
};

/* -------------------------------------------------------------------------- */
/*                                   STORIES                                  */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
	render: (args) => (
		<Tooltip {...args} content='Explore premium features'>
			<TriggerBtn text='Explore Features' variant='default' />
		</Tooltip>
	),
};

export const Bottom: Story = {
	render: (args) => (
		<Tooltip {...args} content='Create a new workspace' side='bottom'>
			<TriggerBtn text='Create New' variant='bottom' />
		</Tooltip>
	),
};

export const Right: Story = {
	render: (args) => (
		<Tooltip {...args} content='System currently active' side='right'>
			<TriggerBtn text='Live Status' variant='right' />
		</Tooltip>
	),
};

export const Left: Story = {
	render: (args) => (
		<Tooltip {...args} content='Open quick access menu' side='left'>
			<TriggerBtn text='Quick Access' variant='left' />
		</Tooltip>
	),
};

export const WithDelay: Story = {
	render: (args) => (
		<Tooltip {...args} content='Appears after 500ms' delayDuration={500}>
			<TriggerBtn text='Continue' variant='delay' />
		</Tooltip>
	),
};

export const RichContent: Story = {
	render: (args) => (
		<Tooltip
			{...args}
			content={
				<div className='space-y-1'>
					<p className='text-sm font-semibold text-[#355872]'>Usage Analytics</p>

					<p className='text-xs text-gray-500'>500 requests remaining this month</p>
				</div>
			}>
			<TriggerBtn text='View Details' variant='rich' />
		</Tooltip>
	),
};
