"use client";

import { Form } from "@/components/ui/form";
import { z } from "@/lib/zod";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useForm } from "react-hook-form";

const ReportFormSchema = z.object({});

function ReportForm() {
	const methods = useForm<z.infer<typeof ReportFormSchema>>({
		resolver: standardSchemaResolver(ReportFormSchema),
	});

	return (
		<Form.Root methods={methods} className="gap-4.5">
			{""}
		</Form.Root>
	);
}

export { ReportForm };
