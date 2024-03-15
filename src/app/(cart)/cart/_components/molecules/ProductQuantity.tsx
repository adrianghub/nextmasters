"use client";

// useOptimistic is not a part of the react library (canary)
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useOptimistic } from "react";
import { changeProductQuantityAction } from "../../_actions/changeProductQuantityAction";
import { Button } from "@/lib/ui/button";

export const ProductQuantity = ({
	quantity,
	productId,
}: {
	quantity: number;
	productId: string;
}) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	return (
		<form>
			{optimisticQuantity}
			<Button
				variant="outline"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeProductQuantityAction(productId, optimisticQuantity + 1);
				}}
			>
				+
			</Button>
			<Button
				variant="outline"
				disabled={optimisticQuantity === 1}
				formAction={async () => {
					if (optimisticQuantity > 1) {
						setOptimisticQuantity(optimisticQuantity - 1);
						await changeProductQuantityAction(productId, optimisticQuantity - 1);
					}
				}}
			>
				-
			</Button>
		</form>
	);
};
