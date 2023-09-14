"use client";

import Link, { type LinkProps } from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

interface ActiveLinkProps<RouteInferred> {
	href: LinkProps<RouteInferred>["href"];
	children: ReactNode;
}

export const ActiveLink = ({ href, children }: ActiveLinkProps<Route>) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(`text-blue-400 hover:text-blue-600`, {
				"text-blue-600 underline": isActive,
			})}
		>
			{children}
		</Link>
	);
};
