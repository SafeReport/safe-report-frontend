import { IconBox } from "@/components/common";
import { For } from "@/components/common/for";
import { Accordion } from "@/components/ui";

const FAQs = [
	{
		question: "What is Safe Report and how does it work?",
		answer:
			"Safe Report is an online platform that allows you to report incidents, threats, or safety concerns anonymously.",
	},
	{
		question: "Is my report really anonymous?",
		answer: "Yes, your identity is protected and your report is anonymous.",
	},
	{
		question: "Who can use Safe Report?",
		answer: "Anyone can use Safe Report.",
	},
	{
		question: "What happens after I submit a report?",
		answer:
			"After submitting your report, it will be reviewed by our team. If it meets our criteria, it will be forwarded to the appropriate authorities.",
	},
	{
		question: "Is there a penalty for false reporting?",
		answer:
			"No, there is no penalty for false reporting. However, we reserve the right to take appropriate action if we determine that a report is false or fraudulent.",
	},
];

function AccordionFaqs() {
	return (
		<Accordion.Root type="single" collapsible={true} className="flex flex-col gap-2">
			<For
				each={FAQs}
				render={(FAQ) => (
					<Accordion.Item key={FAQ.question} value={FAQ.answer}>
						<Accordion.Trigger
							className="flex items-center justify-between border-b border-b-app-dark-2 pb-1.5"
							withIcon={false}
						>
							<p className="text-left text-[12px] text-pretty text-app-gray">{FAQ.question}</p>

							<IconBox icon="f7:plus-square" className="size-3" />
						</Accordion.Trigger>

						<Accordion.Content className="px-0 pt-2 pb-0">
							<p className="text-left text-[10px] text-pretty text-app-gray">{FAQ.answer}</p>
						</Accordion.Content>
					</Accordion.Item>
				)}
			/>
		</Accordion.Root>
	);
}

export { AccordionFaqs };
