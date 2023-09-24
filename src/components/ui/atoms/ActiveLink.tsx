"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ComponentProps } from "react";

type ActiveLinkProps = ComponentProps<typeof Link> & {
	activeClassName?: string;
	exact?: boolean;
};

export const ActiveLink = ({ href, activeClassName, exact = false, ...props }: ActiveLinkProps) => {
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
				props.className || "text-blue-400 hover:text-blue-600",
				isActive && (activeClassName || "text-blue-600 underline"),
			)}
		>
			{props.children}
		</Link>
	);
};
