import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Column<T> {
	key: keyof T;
	header: string;
	sortable?: boolean;
	render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface DataTableProps<T> {
	columns: Column<T>[];
	data: T[];
	loading?: boolean;
	emptyTitle?: string;
	emptyDescription?: string;
	pagination?: {
		page: number;
		total: number;
		pageSize?: number;
		onChange: (page: number) => void;
	};
}

function DataTable<T extends Record<string, unknown>>({
	columns,
	data,
	loading = false,
	emptyTitle = 'No data found',
	emptyDescription = 'No records to display.',
	pagination,
}: DataTableProps<T>) {
	const [sortKey, setSortKey] = useState<keyof T | null>(null);
	const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

	const handleSort = (key: keyof T) => {
		if (sortKey === key) {
			setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
		} else {
			setSortKey(key);
			setSortDir('asc');
		}
	};

	const sortedData = [...data].sort((a, b) => {
		if (!sortKey) return 0;
		const av = a[sortKey];
		const bv = b[sortKey];
		if (av < bv) return sortDir === 'asc' ? -1 : 1;
		if (av > bv) return sortDir === 'asc' ? 1 : -1;
		return 0;
	});

	const pageSize = pagination?.pageSize ?? 10;
	const totalPages = pagination ? Math.ceil(pagination.total / pageSize) : 1;

	if (loading) {
		return (
			<div className='rounded-xl border border-gray-200 bg-white overflow-hidden'>
				<div className='animate-pulse'>
					<div className='h-12 bg-gray-50 border-b border-gray-200' />
					{[...Array(5)].map((_, i) => (
						<div key={i} className='h-14 border-b border-gray-100 px-6 flex items-center gap-4'>
							<div className='h-3 w-1/4 bg-gray-200 rounded' />
							<div className='h-3 w-1/3 bg-gray-200 rounded' />
							<div className='h-3 w-1/5 bg-gray-200 rounded' />
						</div>
					))}
				</div>
			</div>
		);
	}

	if (data.length === 0) {
		return (
			<div className='rounded-xl border border-gray-200 bg-white p-16 text-center'>
				<div className='text-4xl mb-3'>📭</div>
				<p className='font-semibold text-gray-700'>{emptyTitle}</p>
				<p className='text-sm text-gray-400 mt-1'>{emptyDescription}</p>
			</div>
		);
	}

	return (
		<div className='rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm'>
			<div className='overflow-x-auto'>
				<table className='w-full text-sm'>
					<thead>
						<tr className='border-b border-gray-200 bg-gray-50'>
							{columns.map((col) => (
								<th
									key={String(col.key)}
									className={cn(
										'px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider',
										col.sortable && 'cursor-pointer select-none hover:text-gray-700',
									)}
									onClick={() => col.sortable && handleSort(col.key)}>
									<div className='flex items-center gap-1'>
										{col.header}
										{col.sortable &&
											(sortKey === col.key ? (
												sortDir === 'asc' ? (
													<ChevronUp size={14} />
												) : (
													<ChevronDown size={14} />
												)
											) : (
												<ChevronsUpDown size={14} className='text-gray-300' />
											))}
									</div>
								</th>
							))}
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-100'>
						{sortedData.map((row, i) => (
							<tr key={i} className='hover:bg-gray-50 transition-colors'>
								{columns.map((col) => (
									<td key={String(col.key)} className='px-6 py-4 text-gray-700'>
										{col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '-')}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{pagination && totalPages > 1 && (
				<div className='flex items-center justify-between px-6 py-3 border-t border-gray-200 bg-gray-50'>
					<p className='text-xs text-gray-500'>
						Page {pagination.page} of {totalPages}
					</p>
					<div className='flex gap-2'>
						<button
							onClick={() => pagination.onChange(pagination.page - 1)}
							disabled={pagination.page === 1}
							className='px-3 py-1 text-xs rounded border border-gray-200 disabled:opacity-40 hover:bg-gray-100'>
							Previous
						</button>
						<button
							onClick={() => pagination.onChange(pagination.page + 1)}
							disabled={pagination.page === totalPages}
							className='px-3 py-1 text-xs rounded border border-gray-200 disabled:opacity-40 hover:bg-gray-100'>
							Next
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export { DataTable };
