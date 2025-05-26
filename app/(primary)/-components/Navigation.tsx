import { NavLink } from "@/components/common";
import { getElementList } from "@/components/common/for";
import { cnMerge } from "@/lib/utils/cn";

const navLinks = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Report",
		href: "/report",
	},
	{
		title: "Contact",
		href: "/contact",
	},
];

const [NavList] = getElementList();

export function BottomNavigation(props: { className?: string }) {
	const { className } = props;

	return (
		<nav className={cnMerge("px-12 py-6", className)}>
			<NavList
				className="flex justify-between gap-10"
				each={navLinks}
				render={(link) => (
					<li key={link.href}>
						<NavLink href={link.href} className="text-[13px] font-medium">
							{link.title}
						</NavLink>
					</li>
				)}
			/>
		</nav>
	);
}
