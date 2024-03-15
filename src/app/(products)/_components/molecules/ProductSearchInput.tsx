"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, type ChangeEvent, useEffect } from "react";

export const ProductSearchInput = () => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useSearchParams();
	const [searchTerm, setSearchTerm] = useState<string>(params.get("query") || "");

	useEffect(() => {
		const term = searchTerm.trim();
		if (!term && pathname.startsWith("/products/search")) {
			router.push("/products");
			return;
		}

		if (term.length < 2) return;

		const timer = setTimeout(() => {
			router.push(`/products/search?query=${term}`);
		}, 300);

		return () => clearTimeout(timer);
	}, [pathname, router, searchTerm]);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div className="flex h-full flex-1 items-center px-2 py-4 lg:ml-6 lg:justify-end">
			<input
				className="w-full rounded-sm border border-slate-200 bg-slate-100 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none lg:w-[300px]"
				value={searchTerm}
				onChange={handleSearch}
				type="text"
				placeholder="Search"
				role="searchbox"
			/>
		</div>
	);
};
