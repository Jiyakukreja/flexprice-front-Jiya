// src/components/molecules/InvoiceStatusBadge/InvoiceStatusBadge.tsx

import { CheckCircle2, Clock3, AlertTriangle, FileText, Ban } from 'lucide-react';

export type InvoiceStatus = 'paid' | 'draft' | 'pending' | 'overdue' | 'void';

interface InvoiceStatusBadgeProps {
	status: InvoiceStatus;
	dark?: boolean;
	pulse?: boolean;
	className?: string;
}

const statusConfig = {
	paid: {
		label: 'Paid',
		icon: CheckCircle2,

		light: 'border-emerald-200 bg-emerald-50 text-emerald-700',

		dark: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
	},

	draft: {
		label: 'Draft',
		icon: FileText,

		light: 'border-slate-200 bg-slate-100 text-slate-700',

		dark: 'border-slate-500/20 bg-slate-500/10 text-slate-300',
	},

	pending: {
		label: 'Pending',
		icon: Clock3,

		light: 'border-[#7AAACE]/30 bg-[#7AAACE]/10 text-[#355872]',

		dark: 'border-[#7AAACE]/20 bg-[#7AAACE]/10 text-[#A8D3F0]',
	},

	overdue: {
		label: 'Overdue',
		icon: AlertTriangle,

		light: 'border-orange-200 bg-orange-50 text-orange-700',

		dark: 'border-orange-500/20 bg-orange-500/10 text-orange-300',
	},

	void: {
		label: 'Void',
		icon: Ban,

		light: 'border-red-200 bg-red-50 text-red-700',

		dark: 'border-red-500/20 bg-red-500/10 text-red-300',
	},
};

const InvoiceStatusBadge = ({ status, dark = false, pulse = false, className = '' }: InvoiceStatusBadgeProps) => {
	const config = statusConfig[status];

	const Icon = config.icon;

	return (
		<div
			role='status'
			aria-label={`Invoice status ${config.label}`}
			className={`
        group
        inline-flex
        items-center
        gap-2
        border
        px-3.5
        py-1.5
        text-[11px]
        font-semibold
        uppercase
        tracking-[0.12em]
        transition-all
        duration-300
        hover:-translate-y-[1px]
        hover:shadow-[0_8px_30px_rgba(53,88,114,0.12)]

        ${dark ? config.dark : config.light}

        ${className}
      `}>
			<div className='relative flex items-center justify-center'>
				{pulse && <span className='absolute h-2 w-2 animate-ping rounded-full bg-current opacity-40' />}

				<Icon size={13} />
			</div>

			<span>{config.label}</span>
		</div>
	);
};

export default InvoiceStatusBadge;
