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
				{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
				{/* @ts-ignore */}
				<ActiveLink href="/products/1">See all products</ActiveLink>
			</Button>
		</div>
	);
};

export default HomePage;
