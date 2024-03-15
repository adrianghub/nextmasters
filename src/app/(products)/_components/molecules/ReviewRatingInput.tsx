"use client";

import { useState } from "react";
import clsx from "clsx";
import { RatingStar } from "../atoms/ReviewStar";

export const ReviewRatingInput = () => {
	const [rating, setRating] = useState(0);
	const [chosenRating, setChosenRating] = useState<number | undefined>(undefined);

	const isFilled = (idx: number) => {
		return rating > 0 ? idx < rating : chosenRating ? idx < chosenRating : false;
	};

	return (
		<div className="relative flex">
			{Array.from({ length: 5 }).map((_, idx) => (
				<RatingStar
					key={`star-${idx}`}
					filled={isFilled(idx)}
					size={30}
					className={clsx("relative z-10 cursor-pointer", { "me-1": idx < 4 })}
					onMouseEnter={() => setRating(idx + 1)}
					onMouseLeave={() => setRating(0)}
					onClick={() => setChosenRating(idx + 1)}
				/>
			))}
			<input
				type="number"
				name="rating"
				defaultValue={chosenRating}
				required
				className="absolute bottom-0 left-20 w-1 opacity-0"
			/>
		</div>
	);
};
