import React from 'react';

import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline' | 'destructive' | 'default' | 'link';

	size?: 'xs' | 'sm' | 'md' | 'lg' | 'icon' | 'default';

	loading?: boolean;

	isLoading?: boolean;

	prefixIcon?: React.ReactNode;
}

const variantStyles = {
	primary: 'bg-[#0B4F78] hover:bg-[#0D5C8C] text-white border-transparent shadow-sm',

	secondary: `
    bg-transparent
    hover:bg-[#0B4F78]/10
    text-[#0B4F78]
    border-2
    border-[#0B4F78]
    font-semibold
    `,

	ghost: `
    bg-transparent
    hover:bg-[#0B4F78]/10
    text-[#0B4F78]
    border-transparent
    `,

	danger: `
    bg-red-600/90
    hover:bg-red-700
    text-white
    border-transparent
    `,

	outline: `
    bg-white
    hover:bg-[#0B4F78]/5
    text-[#0B4F78]
    border
    border-[#0B4F78]/20
    `,

	destructive: `
    bg-red-600
    hover:bg-red-700
    text-white
    border-transparent
    `,

	default: `
    bg-[#0B4F78]
    hover:bg-[#0D5C8C]
    text-white
    border-transparent
    `,

	link: `
    bg-transparent
    text-[#0B4F78]
    underline
    border-transparent
    hover:opacity-80
    `,
};

const sizeStyles = {
	xs: 'px-3 py-1 text-xs',

	sm: 'px-4 py-2 text-xs',

	md: 'px-5 py-2.5 text-sm',

	lg: 'px-6 py-3 text-base',

	icon: 'h-10 w-10 p-0',

	default: 'px-5 py-2.5 text-sm',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = 'primary',

			size = 'md',

			loading = false,

			isLoading = false,

			prefixIcon,

			disabled = false,

			children,

			className,

			type = 'button',

			...props
		},

		ref,
	) => {
		return (
			<button
				ref={ref}
				type={type}
				disabled={disabled || loading || isLoading}
				aria-busy={loading || isLoading}
				aria-disabled={disabled || loading || isLoading}
				className={cn(
					`
          inline-flex items-center justify-center
          gap-2
          rounded-[20px]
          border
          font-medium
          transition-all
          duration-150

          focus:outline-none
          focus:ring-2
          focus:ring-[#093C5D]/40

          active:scale-[0.98]
          `,

					variantStyles[variant],

					sizeStyles[size],

					(disabled || loading || isLoading) && 'cursor-not-allowed opacity-50',

					className,
				)}
				{...props}>
				{(loading || isLoading) && (
					<svg className='h-4 w-4 animate-spin' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' aria-hidden='true'>
						<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />

						<path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v8z' />
					</svg>
				)}

				{prefixIcon}

				<span>{children}</span>

				{variant === 'primary' && (
					<ChevronRight size={16} className='opacity-90 transition-transform duration-300 group-hover:translate-x-0.5' />
				)}
			</button>
		);
	},
);

Button.displayName = 'Button';
