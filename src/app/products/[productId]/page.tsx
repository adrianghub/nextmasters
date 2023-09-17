import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { RelatedProductsList } from "@/ui/organisms/RelatedProductsList";

const SingleProductPage = async ({ params }: { params: { productId: string } }) => {
	const product = await getProductById(params.productId);

	return (
		<>
			<article className="max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductItemDescription {...product} />
			</article>

			<aside>
				<Suspense fallback={<p>Loading...</p>}>
					<RelatedProductsList />
				</Suspense>
			</aside>
		</>
	);
};

export default SingleProductPage;
