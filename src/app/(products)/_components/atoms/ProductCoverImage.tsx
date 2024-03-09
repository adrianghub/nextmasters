interface ProductCoverImageProps {
	src: string;
	alt: string;
}

export const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
	return (
		<div className="aspect-square max-h-[640px] max-w-[640px] overflow-hidden rounded-md border bg-zinc-50">
			<img
				width={640}
				height={640}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4 transition-transform"
			/>
		</div>
	);
};
