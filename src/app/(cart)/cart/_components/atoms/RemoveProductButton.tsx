"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeProductAction } from "../../_actions/removeProduct.action";
import { Button } from "@/lib/ui/button";

const RemoveProductButton = ({ productId }: { productId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<Button
			className="text-red-500"
			variant="outline"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeProductAction(productId);
					router.refresh();
				});
			}}
		>
			Remove
		</Button>
	);
};

export default RemoveProductButton;
