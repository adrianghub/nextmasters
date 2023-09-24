export type ProductItem = {
	id: string;
	name: string;
	description: string;
	category: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
};

export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export type Rating = {
	rate: number;
	count: number;
};

export interface Root {
	data: {
		products: {
			id: string;
			name: string;
			description: string;
			images: {
				url: string;
			}[];
			price: number;
		}[];
	};
}
