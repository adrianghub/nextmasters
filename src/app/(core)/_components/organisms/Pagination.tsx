import { generatePaginationLinks } from "../../_utils/pagination";
import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = ({
	currentPage,
	numberOfPages,
}: {
	currentPage: number;
	numberOfPages: number;
}) => {
	if (numberOfPages === 1) {
		return null;
	}

	const pagesToShow = generatePaginationLinks(currentPage, numberOfPages);

	return (
		<div className="grid place-content-center">
			<ul className="flex w-full gap-4">
				{pagesToShow.map((page) => (
					<li key={page}>
						{page === "..." ? (
							<span>{page}</span>
						) : (
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							<ActiveLink href={`/products/${page}`} exact>
								{page}
							</ActiveLink>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
