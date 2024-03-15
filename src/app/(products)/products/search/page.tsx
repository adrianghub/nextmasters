import { ProductsList } from "../../_components/organisms/ProductsList";
import { getProducts } from "@/lib/api/products";

type ProductSearchPageProps = {
	searchParams: {
		query: string;
	};
};

const ProductSearchPage = async ({ searchParams }: ProductSearchPageProps) => {
	const { data: products } = await getProducts({
		skip: 0,
		limit: 10,
		searchQuery: searchParams.query,
	});
	return <ProductsList products={products} />;
};

export default ProductSearchPage;
