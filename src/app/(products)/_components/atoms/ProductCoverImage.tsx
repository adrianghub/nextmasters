import NextImage from "next/image";

interface ProductCoverImageProps {
	url?: string;
}

export const ProductCoverImage = ({ url }: ProductCoverImageProps) => {
	return (
		<div className="aspect-square max-h-[640px] max-w-[640px] overflow-hidden rounded-md border bg-zinc-50">
			<NextImage
				width={640}
				height={640}
				alt=""
				src={url!}
				className="h-full w-full object-cover object-center p-4 transition-transform"
			/>
		</div>
	);
};
