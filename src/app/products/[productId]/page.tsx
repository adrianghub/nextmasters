const SingleProductPage = async ({ params }: { params: { productId: string } }) => {
	return <div>{params.productId}</div>;
};

export default SingleProductPage;
