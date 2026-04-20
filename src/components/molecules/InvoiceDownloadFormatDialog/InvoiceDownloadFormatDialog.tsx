import Dialog from '@/components/atoms/Dialog/Dialog';
import { cn } from '@/lib/utils';
import { FileSpreadsheet, FileText, Loader2 } from 'lucide-react';
import { FC } from 'react';

export interface InvoiceDownloadFormatDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onSelectPdf: () => void | Promise<void>;
	onSelectCsv: () => void | Promise<void>;
	isPdfPending?: boolean;
	isCsvPending?: boolean;
}

const InvoiceDownloadFormatDialog: FC<InvoiceDownloadFormatDialogProps> = ({
	open,
	onOpenChange,
	onSelectPdf,
	onSelectCsv,
	isPdfPending = false,
	isCsvPending = false,
}) => {
	const busy = isPdfPending || isCsvPending;

	const handlePdf = async () => {
		try {
			await onSelectPdf();
		} finally {
			onOpenChange(false);
		}
	};

	const handleCsv = async () => {
		try {
			await onSelectCsv();
		} finally {
			onOpenChange(false);
		}
	};

	return (
		<Dialog
			isOpen={open}
			onOpenChange={onOpenChange}
			title='Download invoice'
			description='Choose a format for this invoice.'
			className='sm:max-w-md'>
			<div className='grid grid-cols-2 gap-3 w-full'>
				<button
					type='button'
					disabled={busy}
					onClick={() => void handlePdf()}
					className={cn(
						'flex flex-col items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-8 text-center transition-colors',
						'hover:bg-zinc-100 hover:border-zinc-300',
						'disabled:opacity-50 disabled:cursor-not-allowed',
					)}>
					{isPdfPending ? <Loader2 className='h-8 w-8 animate-spin text-zinc-600' /> : <FileText className='h-8 w-8 text-zinc-700' />}
					<span className='text-sm font-medium text-zinc-900'>PDF</span>
				</button>
				<button
					type='button'
					disabled={busy}
					onClick={() => void handleCsv()}
					className={cn(
						'flex flex-col items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-8 text-center transition-colors',
						'hover:bg-zinc-100 hover:border-zinc-300',
						'disabled:opacity-50 disabled:cursor-not-allowed',
					)}>
					{isCsvPending ? (
						<Loader2 className='h-8 w-8 animate-spin text-zinc-600' />
					) : (
						<FileSpreadsheet className='h-8 w-8 text-zinc-700' />
					)}
					<span className='text-sm font-medium text-zinc-900'>CSV</span>
				</button>
			</div>
		</Dialog>
	);
};

export default InvoiceDownloadFormatDialog;
