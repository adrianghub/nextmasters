import { Star } from "lucide-react";
import { type HTMLAttributes } from "react";
import { cn } from "@/app/(core)/_utils/styles";

export const RatingStar = ({
	filled = true,
	size = 20,
	...spanProps
}: {
	filled: boolean;
	size?: number;
} & HTMLAttributes<HTMLSpanElement>) => (
	<span {...spanProps}>
		<Star size={size} className={cn(" text-amber-400", { "fill-amber-400": filled })} />
	</span>
);
