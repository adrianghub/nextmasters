import { formatCurrency } from "@/app/(core)/_utils/common";
import { type ProductItem } from "@/models/product";

export const ProductItemDescription = ({ category, price }: ProductItem) => {
	return (
		<>
			<p className="text-sm text-gray-500">
				<span className="sr-only">Category:</span> {category}
			</p>
			<p className="text-sm font-bold text-gray-900">
				<span className="sr-only">Price:</span> {formatCurrency(price / 100)}
			</p>
		</>
	);
};
