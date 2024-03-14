import { Overlay } from "@/app/(core)/_components/atoms/Overlay";
import { getCartFromCookies } from "@/lib/api/cart";

export default async function SidebarCart() {
	const cart = await getCartFromCookies();

	return (
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-full w-full max-w-sm bg-white">
				<ul>
					{cart?.cartFindOrCreate.items.map((item) => (
						<li key={item.product.id}>{item.product?.name}</li>
					))}
				</ul>
			</div>
		</>
	);
}
