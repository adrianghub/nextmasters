"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Overlay() {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	});

	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			className="absolute inset-0 z-30 bg-slate-800 bg-opacity-75"
		/>
	);
}
