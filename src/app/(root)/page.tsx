import { ActiveLink } from "../../app/(core)/_components/atoms/ActiveLink";
import { Button } from "@/lib/ui/button";
import { ProductsList } from "../(products)/_components/organisms/ProductsList";
import { getProducts } from "@/lib/api/products";
import { type ProductItemFragment } from "@/gql/graphql";

const HomePage = async () => {
	const products: ProductItemFragment[] = await getProducts({
		limit: 4,
	});

	return (
		<div className="flex flex-col items-center gap-4">
			<ProductsList products={products} />
			<Button>
				<ActiveLink href="/products">See all products</ActiveLink>
			</Button>
		</div>
	);
};

export default HomePage;
