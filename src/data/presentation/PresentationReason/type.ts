import { schema } from "normalizr";

export type PresentationReason = {
	id: number;
	name: string;
};

export const PresentationReasonsSchema = new schema.Entity("presentationReasons", {});
export const PresentationReasonsListSchema = new schema.Array(PresentationReasonsSchema);
