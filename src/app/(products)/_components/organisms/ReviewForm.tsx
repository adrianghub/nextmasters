import { addProductReview } from "../../_actions/addProductReview.action";
import { LabeledInput } from "../atoms/LabeledInput";
import { ReviewRatingInput } from "../molecules/ReviewRatingInput";
import { Button } from "@/lib/ui/button";

export const ReviewForm = ({ productId }: { productId: string }) => {
	return (
		<form action={addProductReview}>
			<input type="hidden" name="productId" defaultValue={productId} readOnly />
			<LabeledInput label="Rate">
				<ReviewRatingInput />
			</LabeledInput>
			<LabeledInput label="Title">
				<input
					type="text"
					name="title"
					className="w-full rounded border border-slate-200 p-2 focus:outline-amber-300"
					required
				/>
			</LabeledInput>
			<LabeledInput label="Description">
				<textarea
					name="description"
					rows={5}
					className="w-full rounded border border-slate-200 p-2"
					required
				/>
			</LabeledInput>
			<div className="block gap-4 md:flex">
				<div className="md:w-1/2">
					<LabeledInput label="Author">
						<input
							type="text"
							name="author"
							className="w-full rounded border border-slate-200 p-2"
							required
						/>
					</LabeledInput>
				</div>
				<div className="md:w-1/2">
					<LabeledInput label="Email">
						<input
							type="email"
							name="email"
							className="w-full rounded border border-slate-200 p-2"
							required
						/>
					</LabeledInput>
				</div>
			</div>
			<Button type="submit">Submit review</Button>
		</form>
	);
};
