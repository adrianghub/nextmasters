import { getProducts, getProductsTotal } from "@/api/products";
import { Pagination } from "@/components/ui/organisms/Pagination";
import { ProductsList } from "@/components/ui/organisms/ProductsList";

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const products = await getProducts({ page: +params.page });
	const productsTotal = await getProductsTotal();

	const numberOfPages = Math.ceil(productsTotal / 20);

	return (
		<>
			<ProductsList products={products} />
			<Pagination currentPage={+params.page} numberOfPages={numberOfPages} />
		</>
	);
}

export const generateStaticParams = async () => {
	return Array.from({ length: 5 }, (_, i) => String(i + 1));
};
