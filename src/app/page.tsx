import { getProductsGql } from "@/api/products";
import { type ProductItem } from "@/models/product";
import { ProductsList } from "@/components/ui/organisms/ProductsList";
import { Button } from "@/components/ui/button";
import { ActiveLink } from "@/components/ui/atoms/ActiveLink";

const HomePage = async () => {
	const products: ProductItem[] = await getProductsGql();

	return (
		<div className="flex flex-col items-center">
			<ProductsList products={products} />
			<Button>
				<ActiveLink href="/products">See all products</ActiveLink>
			</Button>
		</div>
	);
};

export default HomePage;
