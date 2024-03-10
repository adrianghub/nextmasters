import { formatCurrency } from "@/app/(core)/_utils/common";
import { type ProductItemFragment } from "@/gql/graphql";

export const ProductItemDescription = ({ categories, price }: ProductItemFragment) => {
	return (
		<>
			{categories[0] && (
				<p className="text-sm text-gray-500">
					<span className="sr-only">Category:</span> {categories[0].name}
				</p>
			)}
			<p className="text-sm font-bold text-gray-900">
				<span className="sr-only">Price:</span> {formatCurrency(price / 100)}
			</p>
		</>
	);
};
