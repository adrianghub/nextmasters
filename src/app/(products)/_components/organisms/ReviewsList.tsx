import { ReviewCard } from "../molecules/ReviewCard";
import { ReviewForm } from "./ReviewForm";
import { getProductReviews } from "@/lib/api/products";

export const ReviewsList = async ({ productId }: { productId: string }) => {
	const reviews = await getProductReviews(productId);

	if (!reviews) {
		return null;
	}

	return (
		<section className="mt-8">
			<h3 className="mb-8 text-2xl font-bold md:text-3xl">Product reviews</h3>

			<div className="flex flex-col-reverse gap-16 md:flex-row">
				<div className="md:w-1/2">
					{reviews.map((review) => (
						<ReviewCard key={review.id} review={review} />
					))}
				</div>
				<div className="sticky top-[8rem] h-full">
					<ReviewForm productId={productId} />
				</div>
			</div>
		</section>
	);
};
