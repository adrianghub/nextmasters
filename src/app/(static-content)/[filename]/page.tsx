import { notFound } from "next/navigation";
import { type ComponentType } from "react";

export default async function StaticPage({ params }: { params: { filename: string } }) {
	const Content = await import(`./${params.filename}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(),
	);

	return (
		<article className="prose xl:prose-xl">
			<Content />
		</article>
	);
}
