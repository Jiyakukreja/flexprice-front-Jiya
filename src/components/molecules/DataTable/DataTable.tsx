import React, { useMemo, useRef, useState } from 'react';

import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';

import { useVirtualizer } from '@tanstack/react-virtual';

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

	const sortedData = useMemo(() => {
		return [...data].sort((a, b) => {
			if (!sortKey) return 0;

			const av = a[sortKey];

			const bv = b[sortKey];

			if (av < bv) return sortDir === 'asc' ? -1 : 1;

			if (av > bv) return sortDir === 'asc' ? 1 : -1;

			return 0;
		});
	}, [data, sortDir, sortKey]);

	const pageSize = pagination?.pageSize ?? 10;

	const totalPages = pagination ? Math.ceil(pagination.total / pageSize) : 1;

	/* -------------------------------------------------------------------------- */
	/*                               VIRTUALIZATION                               */
	/* -------------------------------------------------------------------------- */

	const parentRef = useRef<HTMLDivElement>(null);

	const rowVirtualizer = useVirtualizer({
		count: sortedData.length,

		getScrollElement: () => parentRef.current,

		estimateSize: () => 68,

		overscan: 12,
	});

	const virtualRows = rowVirtualizer.getVirtualItems();

	/* -------------------------------------------------------------------------- */
	/*                                   LOADING                                  */
	/* -------------------------------------------------------------------------- */

	if (loading) {
		return (
			<div className='overflow-hidden rounded-2xl border border-[#DCE7EF] bg-white shadow-sm'>
				<div className='animate-pulse'>
					<div className='h-14 border-b border-[#DCE7EF] bg-[#F8FBFD]' />

					{[...Array(6)].map((_, i) => (
						<div key={i} className='flex h-16 items-center gap-4 border-b border-[#EEF4F8] px-6'>
							<div className='h-3 w-1/4 rounded bg-[#DCE7EF]' />

							<div className='h-3 w-1/3 rounded bg-[#DCE7EF]' />

							<div className='h-3 w-1/5 rounded bg-[#DCE7EF]' />
						</div>
					))}
				</div>
			</div>
		);
	}

	/* -------------------------------------------------------------------------- */
	/*                                 EMPTY STATE                                */
	/* -------------------------------------------------------------------------- */

	if (data.length === 0) {
		return (
			<div className='rounded-2xl border border-[#DCE7EF] bg-white p-20 text-center shadow-sm'>
				<div className='mb-4 text-5xl'>📭</div>

				<h3 className='text-[24px] font-bold tracking-tight text-[#102331]'>{emptyTitle}</h3>

				<p className='mx-auto mt-3 max-w-md text-sm leading-7 text-[#6B8193]'>{emptyDescription}</p>
			</div>
		);
	}

	/* -------------------------------------------------------------------------- */
	/*                                   TABLE                                    */
	/* -------------------------------------------------------------------------- */

	return (
		<div className='overflow-hidden rounded-2xl border border-[#DCE7EF] bg-white shadow-[0_20px_60px_rgba(53,88,114,0.08)]'>
			{/* TABLE CONTAINER */}
			<div ref={parentRef} className='max-h-[720px] overflow-auto'>
				<table className='w-full border-collapse text-sm'>
					{/* HEADER */}
					<thead className='sticky top-0 z-20 bg-[#F8FBFD] backdrop-blur-xl'>
						<tr className='border-b border-[#DCE7EF]'>
							{columns.map((col) => (
								<th
									key={String(col.key)}
									className={cn(
										`
                      px-6
                      py-4
                      text-left
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#6B8193]
                      transition-all
                      duration-200
                    `,

										col.sortable &&
											`
                        cursor-pointer
                        select-none
                        hover:text-[#355872]
                      `,
									)}
									onClick={() => col.sortable && handleSort(col.key)}>
									<div className='flex items-center gap-2'>
										{col.header}

										{col.sortable &&
											(sortKey === col.key ? (
												sortDir === 'asc' ? (
													<ChevronUp size={14} />
												) : (
													<ChevronDown size={14} />
												)
											) : (
												<ChevronsUpDown size={14} className='text-[#B8C9D6]' />
											))}
									</div>
								</th>
							))}
						</tr>
					</thead>

					{/* BODY */}
					<tbody
						className='relative'
						style={{
							height: `${rowVirtualizer.getTotalSize()}px`,
						}}>
						{virtualRows.map((virtualRow) => {
							const row = sortedData[virtualRow.index];

							return (
								<tr
									key={virtualRow.key}
									className='absolute left-0 top-0 flex w-full border-b border-[#EEF4F8] transition-all duration-200 hover:bg-[#F8FBFD]'
									style={{
										transform: `translateY(${virtualRow.start}px)`,
									}}>
									{columns.map((col) => (
										<td key={String(col.key)} className='flex-1 px-6 py-5 text-[14px] font-medium text-[#1F3447]'>
											{col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '-')}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			{/* PAGINATION */}
			{pagination && totalPages > 1 && (
				<div className='flex items-center justify-between border-t border-[#DCE7EF] bg-[#F8FBFD] px-6 py-4'>
					<p className='text-xs font-medium text-[#6B8193]'>
						Page {pagination.page} of {totalPages}
					</p>

					<div className='flex items-center gap-3'>
						<button
							onClick={() => pagination.onChange(pagination.page - 1)}
							disabled={pagination.page === 1}
							className='rounded-xl border border-[#DCE7EF] bg-white px-4 py-2 text-xs font-semibold text-[#355872] transition-all duration-200 hover:border-[#7AAACE] hover:bg-[#F8FBFD] disabled:cursor-not-allowed disabled:opacity-40'>
							Previous
						</button>

						<button
							onClick={() => pagination.onChange(pagination.page + 1)}
							disabled={pagination.page === totalPages}
							className='rounded-xl border border-[#355872] bg-[#355872] px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#28475E] disabled:cursor-not-allowed disabled:opacity-40'>
							Next
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export { DataTable };
