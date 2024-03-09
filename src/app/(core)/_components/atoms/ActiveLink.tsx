"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps } from "react";

type ActiveLinkProps = ComponentProps<typeof Link> & {
	activeClassName?: string;
	exact?: boolean;
};

export const ActiveLink = ({
	href,
	activeClassName,
	exact = false,
	children,
	...props
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const matchedPath = (typeof href === "string" ? href : href.pathname) ?? null;

	const isActive =
		matchedPath &&
		pathname &&
		(exact ? matchedPath === pathname : pathname.startsWith(matchedPath));

	return (
		<Link
			href={href}
			className={clsx(
				"h-full hover:text-blue-600",
				props.className,
				isActive && (activeClassName || "border-b border-blue-400 text-blue-400"),
			)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
