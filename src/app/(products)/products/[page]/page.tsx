import { Pagination } from "@/app/(core)/_components/organisms/Pagination";
import { ProductsList } from "@/app/(products)/_components/organisms/ProductsList";
import { getProducts, getProductsTotal } from "@/lib/api/products";

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const products = await getProducts({ page: +params.page });
	const productsTotal = await getProductsTotal();

	const numberOfPages = Math.ceil(productsTotal / 20);

	return (
		<>
			<div className="mb-12">
				<ProductsList products={products} />
			</div>
			<Pagination currentPage={+params.page} numberOfPages={numberOfPages} />
		</>
	);
}

export const generateStaticParams = async () => {
	return Array.from({ length: 5 }, (_, i) => String(i + 1));
};
