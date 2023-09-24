import { ActiveLink } from "../atoms/ActiveLink";
import { generatePaginationLinks } from "@/lib/utils";

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
		<div className="my-4 grid place-content-center">
			<ul className="flex w-full gap-4">
				{pagesToShow.map((page) => (
					<li key={page}>
						{page === "..." ? (
							<span>{page}</span>
						) : (
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
