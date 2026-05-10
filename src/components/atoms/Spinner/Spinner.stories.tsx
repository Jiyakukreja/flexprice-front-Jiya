import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

const meta: Meta<typeof Spinner> = {
	title: 'Atoms/Spinner',
	component: Spinner,

	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {
		size: {
			control: 'number',
		},

		className: {
			control: 'text',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Spinner>;

/* -------------------------------- 3D CUBE SPINNER -------------------------------- */

const CubeSpinner = ({ size = 44, color = '#355872' }: { size?: number; color?: string }) => {
	const half = size / 2;

	return (
		<div
			className='flex items-center justify-center'
			style={{
				perspective: '1000px',
			}}>
			{/* Cube */}
			<div
				className='relative animate-[spinnerCube_2.5s_infinite_ease-in-out]'
				style={{
					width: `${size}px`,
					height: `${size}px`,
					transformStyle: 'preserve-3d',
				}}>
				{[...Array(6)].map((_, i) => (
					<div
						key={i}
						className='absolute'
						style={{
							width: '100%',
							height: '100%',
							backgroundColor: 'rgba(11,45,114,0.22)',
							border: `5px solid ${color}`,
							boxSizing: 'border-box',
							backdropFilter: 'blur(10px)',
							boxShadow: `0 18px 45px rgba(11,45,114,0.25)`,
							borderRadius: '14px',

							transform:
								i === 0
									? `translateZ(-${half}px) rotateY(180deg)`
									: i === 1
										? `rotateY(-270deg) translateX(50%)`
										: i === 2
											? `rotateY(270deg) translateX(-50%)`
											: i === 3
												? `rotateX(90deg) translateY(-50%)`
												: i === 4
													? `rotateX(-90deg) translateY(50%)`
													: `translateZ(${half}px)`,

							transformOrigin:
								i === 1 ? 'top right' : i === 2 ? 'center left' : i === 3 ? 'top center' : i === 4 ? 'bottom center' : undefined,
						}}
					/>
				))}

				{/* Keyframes */}
				<style>
					{`
            @keyframes spinnerCube {

              0% {
                transform:
                  rotate(45deg)
                  rotateX(-25deg)
                  rotateY(25deg)
                  scale(1);
              }

              50% {
                transform:
                  rotate(45deg)
                  rotateX(-385deg)
                  rotateY(25deg)
                  scale(1.08);
              }

              100% {
                transform:
                  rotate(45deg)
                  rotateX(-385deg)
                  rotateY(385deg)
                  scale(1);
              }
            }
          `}
				</style>
			</div>
		</div>
	);
};

/* -------------------------------- DEFAULT -------------------------------- */

export const Default: Story = {
	render: (args) => <CubeSpinner size={args.size} color='#355872' />,

	args: {
		size: 44,
	},
};

/* -------------------------------- SMALL -------------------------------- */

export const Small: Story = {
	render: (args) => <CubeSpinner size={args.size} color='#355872' />,

	args: {
		size: 30,
	},
};

/* -------------------------------- LARGE -------------------------------- */

export const Large: Story = {
	render: (args) => <CubeSpinner size={args.size} color='#355872' />,

	args: {
		size: 80,
	},
};

/* -------------------------------- COLORED -------------------------------- */

export const Colored: Story = {
	render: (args) => (
		<div className='rounded-[34px]shadow-[0_25px_70px_rgba(11,45,114,0.35)]'>
			<CubeSpinner size={args.size} color='#9CD5FF' />
		</div>
	),

	args: {
		size: 64,
	},
};

/* -------------------------------- ALL SIZES -------------------------------- */

export const AllSizes: Story = {
	render: () => (
		<div className='flex items-center gap-20 rounded-[34px] bg-[#EEF4F8] p-14 shadow-[0_20px_60px_rgba(11,45,114,0.10)]'>
			<CubeSpinner size={30} color='#355872' />

			<CubeSpinner size={44} color='#355872' />

			<CubeSpinner size={80} color='#355872' />
		</div>
	),
};

/* -------------------------------- DARK THEME -------------------------------- */

export const DarkTheme: Story = {
	render: () => (
		<div className='rounded-[36px] bg-[#07141E] p-16 shadow-[0_30px_90px_rgba(0,0,0,0.50)]'>
			<div className='flex items-center gap-24'>
				<CubeSpinner size={34} color='#355872' />

				<CubeSpinner size={52} color='#0992C2' />

				<CubeSpinner size={82} color='#FFFFFF' />
			</div>
		</div>
	),
};
