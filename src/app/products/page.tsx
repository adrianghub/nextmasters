import { type Product } from "@/models/product";
import { ProductList } from "@/ui/organisms/ProductList";

export default function ProductsPage() {
	const products: Product[] = [
		{
			id: "1",
			name: "Jacket",
			category: "Clothes",
			price: 125,
			coverImage: {
				src: "https://picsum.photos/320/320",
				alt: "black jacket",
			},
		},
		{
			id: "2",
			name: "Jacket2",
			category: "Clothes2",
			price: 2424,
			coverImage: {
				src: "https://picsum.photos/320/320",
				alt: "yellow jacket",
			},
		},
		{
			id: "3",
			name: "Jacket2",
			category: "Clothes2",
			price: 2424,
			coverImage: {
				src: "https://picsum.photos/320/320",
				alt: "yellow jacket",
			},
		},
		{
			id: "4",
			name: "Jacket2",
			category: "Clothes2",
			price: 2424,
			coverImage: {
				src: "https://picsum.photos/320/320",
				alt: "yellow jacket",
			},
		},
	];

	return <ProductList products={products} />;
}
