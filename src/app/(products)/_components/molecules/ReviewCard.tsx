"use client";

import { useCallback, useState } from "react";
import { RatingStar } from "../atoms/ReviewStar";
import { cn } from "@/app/(core)/_utils/styles";
import { type Review } from "@/gql/graphql";

export const ReviewCard = ({
	review: { title, rating, description, author },
}: {
	review: Partial<Review>;
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = useCallback(() => setIsExpanded(!isExpanded), [isExpanded]);

	return (
		<div className="relative mb-4 flex flex-col rounded-sm border border-gray-200 p-4">
			<div className="mb-2 flex items-center">
				<h3 className="text-xl font-semibold text-gray-800">{author}</h3>
				<div className="ms-2 flex">
					{Array.from({ length: rating! }).map((_, idx) => (
						<RatingStar key={`star-${idx}`} filled />
					))}
				</div>
			</div>
			<div className="mb-2">{title}</div>
			<p
				className={cn("mb-0 max-h-[100px] overflow-hidden pb-4 text-gray-500", {
					"max-h-full": isExpanded,
				})}
			>
				{description}
			</p>
			<button
				className={cn(
					"absolute bottom-0 left-0 flex w-full items-end justify-center focus:outline-none",
					{
						"bg-gradient-to-t from-white from-30% pb-2 pt-20": !isExpanded,
						"py-2 ": isExpanded,
					},
				)}
				onClick={toggleExpand}
			>
				{isExpanded ? "Show less" : "Show more"}
			</button>
		</div>
	);
};
