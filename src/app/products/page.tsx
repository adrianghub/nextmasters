import { redirect } from "next/navigation";

const Page = async () => {
	return redirect("/products/1");
};

export default Page;
