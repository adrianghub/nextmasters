import { ActiveLink } from "../../app/(core)/_components/atoms/ActiveLink";
import { ProductsList } from "../(products)/_components/organisms/ProductsList";
import { Button } from "@/lib/ui/button";
import { getProducts } from "@/lib/api/products";

const HomePage = async () => {
	const { data: products } = await getProducts({
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
