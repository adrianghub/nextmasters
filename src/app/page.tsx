import { ActiveLink } from "./(core)/_components/atoms/ActiveLink";
import { Button } from "@/lib/ui/button";
import { ProductsList } from "@/app/(products)/_components/organisms/ProductsList";
import { type ProductItem } from "@/models/product";
import { getProducts } from "@/lib/api/products";

const HomePage = async () => {
	const products: ProductItem[] = await getProducts();

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
