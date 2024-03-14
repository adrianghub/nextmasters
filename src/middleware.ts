import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		"/categories/(.*)",
		"/collections/(.*)",
		"/products",
		"/products/(.*)",
		"/product/(.*)",
	],
});

// export function middleware(req: NextRequest) {
// 	const requestHeaders = new Headers(req.headers);
// 	requestHeaders.set("x-pathname", req.nextUrl.pathname);

// 	return NextResponse.next({
// 		request: {
// 			headers: requestHeaders,
// 		},
// 	});
// }

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
