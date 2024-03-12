/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import { useOptimistic } from "react";
import { Button } from "@/lib/ui/button";

export const ProductQuantity = ({
	quantity,
	productId,
}: {
	quantity: number;
	productId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	console.log(productId);

	return (
		<form>
			{optimisticQuantity}
			<Button
				variant="outline"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					// await changeItemQuantity(productId, optimisticQuantity + 1);
				}}
			>
				+
			</Button>
			<Button
				variant="outline"
				formAction={async () => {
					if (optimisticQuantity > 0) {
						setOptimisticQuantity(optimisticQuantity - 1);
						// await changeItemQuantity(productId, optimisticQuantity + 1);
					}
				}}
			>
				-
			</Button>
		</form>
	);
};
