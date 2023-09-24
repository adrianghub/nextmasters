import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat("pl", {
		style: "currency",
		currency: "PLN",
	}).format(value);
};

export const generatePaginationLinks = (
	currentPage: number,
	numberOfPages: number,
): (number | string)[] => {
	const maxPagesToShow = 5;

	const generatePageRange = (start: number, end: number): number[] =>
		Array.from({ length: end - start + 1 }, (_, i) => start + i);

	if (numberOfPages <= maxPagesToShow) {
		return generatePageRange(1, numberOfPages);
	}

	if (currentPage <= 2) {
		const firstPages = generatePageRange(1, maxPagesToShow - 1);
		const middleSeparator = currentPage < numberOfPages - maxPagesToShow + 2 ? ["..."] : [];
		const lastPage = [numberOfPages];
		return [...firstPages, ...middleSeparator, ...lastPage];
	}

	if (currentPage >= numberOfPages - 2) {
		const firstPage = [1];
		const middleSeparator = currentPage >= numberOfPages - 1 ? [] : ["..."];
		const lastPagesStart = Math.max(numberOfPages - maxPagesToShow + 1, 2);
		const lastPages = generatePageRange(lastPagesStart, numberOfPages);
		return [...firstPage, ...middleSeparator, ...lastPages];
	}

	const firstPage = [1];
	const middleStart = currentPage > 4 ? ["..."] : [];
	const middlePages = generatePageRange(currentPage - 1, currentPage + 1);
	const middleEnd = currentPage < numberOfPages - 4 ? ["..."] : [];
	const lastPage = [numberOfPages];
	return [...firstPage, ...middleStart, ...middlePages, ...middleEnd, ...lastPage];
};
