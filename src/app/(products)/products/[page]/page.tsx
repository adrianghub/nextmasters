import { ProductsList } from "../../_components/organisms/ProductsList";
import { Pagination } from "@/app/(core)/_components/organisms/Pagination";
import { getProducts } from "@/lib/api/products";

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const { meta, data: products } = await getProducts({
		skip: (+params.page - 1) * 10,
	});

	const numberOfPages = Math.ceil(meta.total / 10);

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
