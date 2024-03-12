"use client";

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useFormStatus } from "react-dom";
import { Button } from "@/lib/ui/button";
import { cn } from "@/app/(core)/_utils/styles";

const AddToCartButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			variant="outline"
			className={cn(pending && "cursor-wait opacity-50")}
			disabled={pending}
		>
			Add to cart
		</Button>
	);
};

export default AddToCartButton;
