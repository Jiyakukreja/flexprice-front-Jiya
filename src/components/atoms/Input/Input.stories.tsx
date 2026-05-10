import type { Meta, StoryObj } from '@storybook/react';
import { Search, Mail, Lock, User, Building2, AlertCircle, ShieldCheck } from 'lucide-react';

import Input from './Input';

const meta = {
	title: 'Atoms/Input',
	component: Input,

	parameters: {
		layout: 'fullscreen',

		backgrounds: {
			default: 'light',

			values: [
				{
					name: 'light',
					value: '#EEF4F8',
				},
				{
					name: 'dark',
					value: '#07141E',
				},
			],
		},
	},

	decorators: [
		(Story: any) => (
			<div className='relative min-h-screen overflow-hidden bg-[#EEF4F8] flex items-center justify-center px-6 py-20'>
				{/* Ambient Blur */}
				<div className='absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-[#093C5D]/10 blur-3xl' />

				<div className='absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#093C5D]/10 blur-3xl' />

				<div className='relative w-full max-w-[860px]'>
					<Story />
				</div>
				<style>
					{`
            @keyframes borderMove {
              0% {
                background-position: 0% 50%;
              }

              100% {
                background-position: 200% 50%;
              }
            }
          `}
				</style>
			</div>
		),
	],

	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

/* -------------------------------- COMMON INPUT STYLE -------------------------------- */

const InputShell = ({ children, danger = false }: { children: React.ReactNode; danger?: boolean }) => (
	<div className='group relative w-full'>
		{/* Glow */}
		<div
			className={`absolute -inset-[2px] rounded-[28px] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-70 group-focus-within:opacity-100 ${
				danger ? 'bg-[linear-gradient(130deg,#ef4444,#f87171,#ef4444)]' : 'bg-[linear-gradient(130deg,#093C5D,#4A90B5,#093C5D)]'
			}`}
		/>

		{/* Main Input */}
		<div
			className={`relative flex items-center rounded-[26px] border px-6 py-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_14px_45px_rgba(9,60,93,0.12)] group-focus-within:scale-[1.025]
      ${
				danger
					? 'border-red-200 bg-red-50/70 group-focus-within:border-red-300 group-focus-within:shadow-[0_18px_55px_rgba(239,68,68,0.20)]'
					: 'border-[#093C5D]/10 bg-[#F8FBFD] group-focus-within:border-[#093C5D]/30 group-focus-within:shadow-[0_18px_55px_rgba(9,60,93,0.22)]'
			}`}>
			{children}
		</div>
	</div>
);

/* -------------------------------- DEFAULT -------------------------------- */

export const Default: Story = {
	args: {
		placeholder: 'Search anything...',
		fullWidth: true,
	},

	render: (args) => (
		<div>
			{/* Interactive Input */}
			<div className='group relative w-full'>
				{/* Animated Hover Glow */}
				<div className='absolute -inset-[2px] rounded-[28px] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-70 group-focus-within:opacity-100 bg-[linear-gradient(130deg,#093C5D,#4A90B5,#093C5D)]' />

				{/* Main Input Container */}
				<div className='relative flex items-center rounded-[26px] border border-[#093C5D]/10 bg-[#F8FBFD] px-6 py-5 transition-all duration-700 ease-out hover:border-[#093C5D]/20 hover:shadow-[0_14px_45px_rgba(9,60,93,0.12)] hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99] group-focus-within:scale-[1.025] group-focus-within:border-[#093C5D]/30 group-focus-within:shadow-[0_18px_55px_rgba(9,60,93,0.22)]'>
					{/* Left Search Icon */}
					<div className='mr-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#093C5D]/8 text-[#093C5D] transition-all duration-500 group-hover:bg-[#093C5D]/12 group-focus-within:bg-[#093C5D] group-focus-within:text-white group-focus-within:scale-110'>
						<Search size={21} className='transition-all duration-500' />
					</div>

					{/* Input */}
					<div className='flex-1'>
						<Input {...args} />
					</div>

					{/* Right Indicator */}
					<div className='ml-4 hidden items-center gap-2 rounded-2xl border border-[#093C5D]/10 bg-white px-4 py-2 text-sm font-semibold text-[#093C5D] transition-all duration-300 group-hover:border-[#093C5D]/20 group-hover:shadow-sm group-focus-within:bg-[#093C5D] group-focus-within:text-white sm:flex'>
						<span className='h-2 w-2 rounded-full bg-[#0992C2] animate-pulse' />
						Active
					</div>
				</div>
			</div>
		</div>
	),
};

/* -------------------------------- WITH LABEL -------------------------------- */

export const WithLabel: Story = {
	args: {
		label: 'Email Address',
		placeholder: 'john@example.com',
		type: 'email',
		fullWidth: true,
	},

	render: (args) => (
		<div>
			<div className='mb-7 flex items-center gap-4'>
				<div className='flex h-14 w-14 items-center justify-center rounded-3xl bg-[#093C5D]/8 text-[#093C5D]'>
					<Mail size={24} />
				</div>

				<div>
					<p className='text-sm font-semibold uppercase tracking-[0.18em] text-[#7A98AE]'>CONTACT</p>

					<h2 className='mt-1 text-[28px] font-bold tracking-tight text-[#093C5D]'>Email Information</h2>
				</div>
			</div>

			<InputShell>
				<div className='mr-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#093C5D]/8 text-[#093C5D]'>
					<Mail size={20} />
				</div>

				<div className='flex-1'>
					<Input {...args} />
				</div>
			</InputShell>
		</div>
	),
};

/* -------------------------------- WITH ERROR -------------------------------- */

export const WithError: Story = {
	args: {
		label: 'Password',
		placeholder: 'Enter secure password',
		type: 'password',
		error: 'Password must be at least 8 characters',
		fullWidth: true,
	},

	render: (args) => (
		<div>
			<div className='mb-7 flex items-start gap-4'>
				<div className='flex h-14 w-14 items-center justify-center rounded-3xl bg-red-100 text-red-500'>
					<AlertCircle size={24} />
				</div>

				<div>
					<p className='text-sm font-semibold uppercase tracking-[0.18em] text-red-400'>VALIDATION ERROR</p>

					<h2 className='mt-1 text-[28px] font-bold tracking-tight text-[#093C5D]'>Secure Password Required</h2>

					<p className='mt-2 text-sm text-[#7A98AE]'>Password should contain at least 8 characters.</p>
				</div>
			</div>

			<InputShell danger>
				<div className='mr-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-100 text-red-500'>
					<Lock size={20} />
				</div>

				<div className='flex-1'>
					<Input {...args} />
				</div>
			</InputShell>
		</div>
	),
};

/* -------------------------------- DISABLED -------------------------------- */

export const Disabled: Story = {
	args: {
		label: 'Username',
		placeholder: 'Unavailable',
		disabled: true,
		fullWidth: true,
	},

	render: (args) => (
		<div>
			<div className='mb-7 flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<div className='flex h-14 w-14 items-center justify-center rounded-3xl bg-[#093C5D]/8 text-[#093C5D]'>
						<ShieldCheck size={24} />
					</div>

					<div>
						<p className='text-sm font-semibold uppercase tracking-[0.18em] text-[#7A98AE]'>RESTRICTED ACCESS</p>

						<h2 className='mt-1 text-[28px] font-bold tracking-tight text-[#093C5D]'>Read Only Mode</h2>
					</div>
				</div>

				<div className='rounded-full bg-[#093C5D]/8 px-5 py-2 text-sm font-semibold text-[#093C5D]'>LOCKED</div>
			</div>

			<InputShell>
				<div className='mr-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#093C5D]/8 text-[#093C5D]'>
					<User size={20} />
				</div>

				<div className='flex-1'>
					<Input {...args} />
				</div>
			</InputShell>
		</div>
	),
};

/* -------------------------------- FULL WIDTH -------------------------------- */

export const FullWidth: Story = {
	args: {
		label: 'Workspace Name',
		placeholder: 'Enter your workspace name',
		fullWidth: true,
	},

	render: (args) => (
		<div>
			<div className='mb-7 flex items-center gap-4'>
				<div className='flex h-14 w-14 items-center justify-center rounded-3xl bg-[#093C5D]/8 text-[#093C5D]'>
					<Building2 size={24} />
				</div>

				<div>
					<p className='text-sm font-semibold uppercase tracking-[0.18em] text-[#7A98AE]'>WORKSPACE SETUP</p>

					<h2 className='mt-1 text-[28px] font-bold tracking-tight text-[#093C5D]'>Configure Workspace</h2>
				</div>
			</div>

			<InputShell>
				<div className='mr-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#093C5D]/8 text-[#093C5D]'>
					<Building2 size={20} />
				</div>

				<div className='flex-1'>
					<Input {...args} />
				</div>
			</InputShell>
		</div>
	),
};

/* -------------------------------- WITH VALUE -------------------------------- */

export const WithValue: Story = {
	args: {
		label: 'Name',
		value: 'John Doe',
		placeholder: 'Enter your name',
		fullWidth: true,
	},

	render: (args) => (
		<div>
			<div className='mb-7 flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<div className='flex h-14 w-14 items-center justify-center rounded-3xl bg-[#093C5D]/8 text-[#093C5D]'>
						<User size={24} />
					</div>

					<div>
						<p className='text-sm font-semibold uppercase tracking-[0.18em] text-[#7A98AE]'>PROFILE</p>

						<h2 className='mt-1 text-[28px] font-bold tracking-tight text-[#093C5D]'>Personal Information</h2>
					</div>
				</div>

				<div className='rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-600'>ACTIVE</div>
			</div>

			<InputShell>
				<div className='mr-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#093C5D]/8 text-[#093C5D]'>
					<User size={20} />
				</div>

				<div className='flex-1'>
					<Input {...args} />
				</div>
			</InputShell>
		</div>
	),
};

/* -------------------------------- DARK THEME -------------------------------- */

export const DarkTheme: Story = {
	args: {
		placeholder: 'Search anything...',
		fullWidth: true,
	},

	render: (args) => (
		<div className='relative overflow-hidden rounded-[34px] border border-[#355872] bg-[#07141E] p-10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]'>
			{/* Ambient Glow */}
			<div className='absolute top-[-120px] left-[-120px] h-[280px] w-[280px] rounded-full bg-[#355872]/30 blur-3xl' />

			<div className='absolute bottom-[-100px] right-[-100px] h-[240px] w-[240px] rounded-full bg-[#0992C2]/10 blur-3xl' />

			{/* Top Border */}
			<div className='absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#0992C2,#355872,#0992C2)] bg-[length:200%_200%] animate-[borderMove_6s_linear_infinite]' />

			{/* Interactive Input */}
			<div className='group relative w-full'>
				{/* Glow */}
				<div className='absolute -inset-[2px] rounded-[28px] opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-70 group-focus-within:opacity-100 bg-[linear-gradient(130deg,#0992C2,#355872,#0992C2)]' />

				{/* Main Input */}
				<div className='relative flex items-center rounded-[26px] border border-[#355872] bg-[#0B1B28] px-6 py-5 transition-all duration-700 ease-out hover:border-[#0992C2]/40 hover:shadow-[0_14px_45px_rgba(9,146,194,0.10)] hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99] group-focus-within:scale-[1.025] group-focus-within:border-[#0992C2]/60 group-focus-within:shadow-[0_18px_55px_rgba(9,146,194,0.22)]'>
					{/* Icon */}
					<div className='mr-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#355872] text-[#0992C2] transition-all duration-500 group-hover:bg-[#0992C2]/20 group-focus-within:bg-[#0992C2] group-focus-within:text-white group-focus-within:scale-110'>
						<Search size={21} />
					</div>

					{/* Input */}
					<div className='flex-1'>
						<Input
							{...args}
							className='bg-transparent text-white placeholder:text-white/50 border-0 shadow-none focus:ring-0 focus:outline-none'
						/>
					</div>

					{/* Status */}
					<div className='ml-4 hidden items-center gap-2 rounded-2xl border border-[#355872] bg-[#102637] px-4 py-2 text-sm font-semibold text-[#0992C2] transition-all duration-300 group-hover:border-[#0992C2]/30 group-focus-within:bg-[#0992C2] group-focus-within:text-white sm:flex'>
						<span className='h-2 w-2 rounded-full bg-[#0992C2] animate-pulse' />
						Active
					</div>
				</div>
			</div>

			<style>
				{`
          @keyframes borderMove {
            0% {
              background-position: 0% 50%;
            }

            100% {
              background-position: 200% 50%;
            }
          }
        `}
			</style>
		</div>
	),
};
