import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/app/(core)/_utils/gql";
import { OrdersGetByEmailDocument } from "@/gql/graphql";

const OrdersPage = async () => {
	const user = await currentUser();
	const userEmail = user?.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)
		?.emailAddress;

	if (!userEmail) {
		redirect("/login");
	}

	const { orders } = await executeGraphql({
		query: OrdersGetByEmailDocument,
		variables: {
			email: userEmail,
		},
	});

	return (
		<div>
			<h1>{user.firstName}&rsquo;s Orders</h1>

			{orders.data.length === 0 ? (
				<div>No orders found</div>
			) : (
				<ul>
					{orders.data.map((order) => (
						<li key={order.id}>
							{order.id} - {order.totalAmount} - {order.status}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default OrdersPage;
