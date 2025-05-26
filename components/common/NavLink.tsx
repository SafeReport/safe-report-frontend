"use client";

import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { isObject } from "@zayne-labs/toolkit-type-helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink(props: InferProps<typeof Link>) {
	const { className, href, ...restOfProps } = props;

	const pathname = usePathname();

	const pathNameFromHref = isObject(href) ? href.pathname : href;

	const isActive = pathname === pathNameFromHref;

	return <Link href={href} className={cnMerge(className, isActive && "active")} {...restOfProps} />;
}

export { NavLink };
