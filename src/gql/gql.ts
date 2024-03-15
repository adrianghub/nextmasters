/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories {\n    id\n    name\n    slug\n    description\n  }\n  collections {\n    id\n    name\n    slug\n    description\n  }\n  images {\n    id\n    url\n    width\n    height\n    alt\n  }\n  price\n}": types.ProductItemFragmentDoc,
    "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}": types.CartAddItemDocument,
    "mutation CartComplete($cartId: ID!, $userEmail: String!) {\n  cartComplete(cartId: $cartId, userEmail: $userEmail) {\n    createdAt\n    id\n    lines\n    status\n    totalAmount\n    updatedAt\n  }\n}": types.CartCompleteDocument,
    "mutation CartFindOrCreate($input: MutationCartFindOrCreateInput = {}, $id: ID) {\n  cartFindOrCreate(input: $input, id: $id) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}": types.CartFindOrCreateDocument,
    "mutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}": types.CartRemoveItemDocument,
    "mutation CartItemUpdateQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}": types.CartItemUpdateQuantityDocument,
    "mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}": types.ReviewCreateDocument,
    "query OrdersGetByEmail($email: String!) {\n  orders(email: $email) {\n    data {\n      updatedAt\n      totalAmount\n      status\n      lines\n      id\n      createdAt\n    }\n    meta {\n      count\n      total\n    }\n  }\n}": types.OrdersGetByEmailDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetReviews($id: ID!) {\n  product(id: $id) {\n    reviews {\n      author\n      createdAt\n      description\n      email\n      id\n      rating\n      title\n      updatedAt\n    }\n  }\n}": types.ProductGetReviewsDocument,
    "mutation ProductReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}": types.ProductReviewCreateDocument,
    "query ProductsGet($take: Int!, $skip: Int!, $search: String) {\n  products(take: $take, skip: $skip, search: $search) {\n    data {\n      ...ProductItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}": types.ProductsGetDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories {\n    id\n    name\n    slug\n    description\n  }\n  collections {\n    id\n    name\n    slug\n    description\n  }\n  images {\n    id\n    url\n    width\n    height\n    alt\n  }\n  price\n}"): typeof import('./graphql').ProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartComplete($cartId: ID!, $userEmail: String!) {\n  cartComplete(cartId: $cartId, userEmail: $userEmail) {\n    createdAt\n    id\n    lines\n    status\n    totalAmount\n    updatedAt\n  }\n}"): typeof import('./graphql').CartCompleteDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreate($input: MutationCartFindOrCreateInput = {}, $id: ID) {\n  cartFindOrCreate(input: $input, id: $id) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartItemUpdateQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartItemUpdateQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrdersGetByEmail($email: String!) {\n  orders(email: $email) {\n    data {\n      updatedAt\n      totalAmount\n      status\n      lines\n      id\n      createdAt\n    }\n    meta {\n      count\n      total\n    }\n  }\n}"): typeof import('./graphql').OrdersGetByEmailDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetReviews($id: ID!) {\n  product(id: $id) {\n    reviews {\n      author\n      createdAt\n      description\n      email\n      id\n      rating\n      title\n      updatedAt\n    }\n  }\n}"): typeof import('./graphql').ProductGetReviewsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ProductReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGet($take: Int!, $skip: Int!, $search: String) {\n  products(take: $take, skip: $skip, search: $search) {\n    data {\n      ...ProductItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
