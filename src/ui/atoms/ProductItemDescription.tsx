import { type ProductItem } from "@/models/product";
import { formatCurrency } from "@/utils";

export const ProductItemDescription = ({ name, category, price }: ProductItem) => {
	return (
		<div className="mt-2 flex justify-between">
			<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
			<p className="text-sm text-gray-500">
				<span className="sr-only">Kategoria:</span> {category}
			</p>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span> {formatCurrency(price / 100)}
			</p>
		</div>
	);
};
