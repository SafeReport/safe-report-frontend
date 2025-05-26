import { BottomNavigation } from "./-components/Navigation";

function PrimaryLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex min-h-svh w-full flex-col items-center bg-app-dark">
			{children}
			<BottomNavigation className="lg:hidden" />
		</div>
	);
}

export default PrimaryLayout;
