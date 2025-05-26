import { IconBox, Image } from "@/components/common";
import { For } from "@/components/common/for";
import { Card } from "@/components/ui/card";
import {
	accident,
	book,
	coffee,
	environment,
	harassment,
	logo,
	logoEnlarged,
	school,
	theft,
	threats,
} from "@/public/assets";
import { AccordionFaqs, Main, ReportForm } from "./-components";

const possibleReports = [
	{
		title: "Road accidents or hazards",
		image: accident,
		description: "Report crashes, unsafe roads, or blocked pathways for quick intervention",
	},
	{
		title: "Workplace or School Misconduct",
		image: school,
		description: "Expose unethical practices or violations in offices and school",
	},
	{
		title: "Harassment or Bullying",
		image: harassment,
		description: "Speak up against abuse, intimidation, or repeated mistreatment",
	},
	{
		title: "Community Threats",
		image: threats,
		description: "Report suspicious behaviour, violence, or safety concerns in your area",
	},
	{
		title: "Theft or Vandalism",
		image: theft,
		description: "Alert authorities about stolen property or damage to public/private spaces",
	},
	{
		title: "Environmental Hazards",
		image: environment,
		description: "Report illegal dumping, pollution, or anything endangering nature or health",
	},
];

const reasons = [
	"stay anonymous if you want",
	"easy-to-use platform",
	"we connect your report to the right people",
];

function HomePage() {
	return (
		<Main className="gap-8">
			<header className="flex flex-col items-center gap-4.5">
				<div className="flex flex-col gap-2 text-center">
					<h1 className="px-8 font-albert-sans text-[28px] leading-[100%] font-bold tracking-[4%]">
						Your safety, your voice
					</h1>

					<p className="text-[12px] leading-[22px] text-app-gray">
						A secure platform to report incidents, threats, or safety concerns. anonymously and
						effectively.
					</p>
				</div>

				<button
					type="button"
					className="flex h-8 w-fit items-center justify-center gap-1 rounded-[4px] bg-app-light px-3
						text-[10px] font-semibold text-app-dark"
				>
					Report now
					<span className="inline-block size-3">
						<IconBox icon="material-symbols:arrow-outward-rounded" className="size-full" />
					</span>
				</button>
			</header>

			<section className="flex flex-col items-center gap-6">
				<h2 className="text-center text-[24px] font-semibold">What You Can Report</h2>

				<div className="grid grid-cols-2 gap-4.5 lg:grid-cols-3 lg:gap-[clamp(18px,3vw,46px)]">
					<For
						each={possibleReports}
						render={(report) => (
							<Card.Root
								key={report.title}
								className="flex flex-col gap-2 rounded-[5px] bg-app-dark-2 p-3 lg:gap-6 lg:p-7"
							>
								<Image
									src={report.image}
									width={130}
									height={130}
									alt={report.title}
									className="rounded-[3px]"
								/>
								<Card.Title
									className="w-fit text-[10px] font-bold lg:text-[24px] lg:leading-[40px]"
								>
									{report.title}
								</Card.Title>
								<Card.Description
									className="text-[9px] leading-[18px] text-app-gray lg:text-[22px]
										lg:leading-[42px]"
								>
									{report.description}
								</Card.Description>
							</Card.Root>
						)}
					/>
				</div>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-[24px] font-semibold max-lg:max-w-[228px]">Why Choose Safe Report?</h2>

				<p className="text-[12px] leading-[22px] text-app-gray">
					Your Voice Matters, Make Every Report Count. Speak up about issues affecting you and your
					community. With Safe Report, your identity stays protected always.
				</p>

				<ul className="flex flex-col gap-1.5">
					<For
						each={reasons}
						render={(reason) => (
							<li key={reason} className="flex items-center gap-1.5">
								<span className="size-3 rounded-[1px] bg-app-light">
									<IconBox icon="material-symbols:check" className="size-full text-app-dark" />
								</span>
								<p className="text-[11px] text-app-gray">{reason}</p>
							</li>
						)}
					/>
				</ul>

				<button
					type="button"
					className="flex h-8 w-fit items-center justify-center gap-1 rounded-[4px] bg-app-light px-3
						text-[10px] font-semibold text-app-dark"
				>
					Report now
				</button>

				<article className="grid grid-cols-2 gap-4.5">
					<Image src={coffee} width={327} height={159} alt="Coffee" className="col-span-2" />
					<Image src={book} width={154} height={159} alt="Book" />
					<Image src={logoEnlarged} width={154} height={159} alt="Logo" />
				</article>
			</section>

			<section className="flex flex-col gap-6">
				<h2 className="text-center text-[24px] font-semibold">Report an Incident</h2>
				<ReportForm />
			</section>

			<section className="flex flex-col gap-4.5">
				<header className="flex flex-col gap-2">
					<h2 className="text-[24px] font-semibold max-lg:max-w-[264px]">
						Frequently Asked Questions
					</h2>

					<p className="text-[12px] leading-[22px] text-app-gray">
						Got Questions? We've Got Answers. Everything You Need to Know About Reporting with Safe
						Report are all right here........
					</p>
				</header>

				<AccordionFaqs />
			</section>

			<section className="flex flex-col items-center gap-2 text-center">
				<h2 className="text-[24px] font-medium">
					Want to speak up safely? Let’s make it count together.
				</h2>

				<p className="text-[10px] leading-[22px] text-app-gray">
					Your voice matters, report concerns anonymously and help create a safer environment for
					everyone.
				</p>

				<button
					type="button"
					className="flex h-8 w-fit items-center justify-center gap-1 rounded-[4px] bg-app-light px-3
						text-[10px] font-semibold text-app-dark"
				>
					Get Started
					<span className="inline-block size-3">
						<IconBox icon="material-symbols:arrow-outward-rounded" className="size-full" />
					</span>
				</button>
			</section>

			<section className="mt-2 flex flex-col gap-6 border-b border-b-[hsl(171,68%,94%)] pb-3.5">
				<article className="flex flex-col gap-3.5">
					<Image src={logo} width={69} height={60} alt="Logo" className="h-[60px] w-[69px]" />

					<p className="max-w-[158px] text-[9px] leading-[200%] text-app-gray">
						Speak Up. Stay Safe. Empowering individuals to report issues anonymously and responsibly.
					</p>
				</article>

				<h3 className="text-[20px] font-medium">Report Now</h3>

				<article className="flex flex-col gap-2.5">
					<h4 className="text-base font-medium">GET IN TOUCH</h4>

					<p className="text-[12px] font-medium text-app-gray">support@safereport.com</p>

					<p className="text-[12px] font-medium text-app-gray">+234-5454-6474</p>
				</article>
			</section>
		</Main>
	);
}

export default HomePage;
