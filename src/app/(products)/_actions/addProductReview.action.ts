"use server";

import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/app/(core)/_utils/gql";
import { ProductReviewCreateDocument } from "@/gql/graphql";

export const addProductReview = async (formData: FormData) => {
	await executeGraphql({
		query: ProductReviewCreateDocument,
		variables: {
			productId: formData.get("productId") as string,
			title: formData.get("headline") as string,
			description: formData.get("description") as string,
			rating: parseInt(formData.get("rating") as string),
			author: formData.get("author") as string,
			email: formData.get("email") as string,
		},
	});

	revalidateTag("reviews");
};
