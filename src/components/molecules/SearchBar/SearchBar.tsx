import React, { useState, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SearchBarProps {
	onSearch: (query: string) => void;
	placeholder?: string;
	debounceMs?: number;
	className?: string;
	defaultValue?: string;
}

/**
 * SearchBar for FlexPrice UI.
 * Debounced search with clear button — used on Customers, Invoices, Plans pages.
 */
export const SearchBar = ({ onSearch, placeholder = 'Search...', debounceMs = 300, className, defaultValue = '' }: SearchBarProps) => {
	const [value, setValue] = useState(defaultValue);
	const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const val = e.target.value;
			setValue(val);
			if (timer) clearTimeout(timer);
			const t = setTimeout(() => onSearch(val), debounceMs);
			setTimer(t);
		},
		[timer, debounceMs, onSearch],
	);

	const handleClear = useCallback(() => {
		setValue('');
		onSearch('');
	}, [onSearch]);

	return (
		<div className={cn('relative flex items-center w-full', className)}>
			<Search size={16} className='absolute left-3 text-gray-400 pointer-events-none' aria-hidden='true' />
			<input
				type='search'
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				aria-label={placeholder}
				className='w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-9 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100'
			/>
			{value && (
				<button onClick={handleClear} aria-label='Clear search' className='absolute right-3 text-gray-400 hover:text-gray-600'>
					<X size={14} />
				</button>
			)}
		</div>
	);
};
