import { schema } from "normalizr";

export type PresentationStatus = {
	id: number;
	name: string;
};
export const PresentationStatusSchema = new schema.Entity("presentationStatus", {});
export const PresentationStatusListSchema = new schema.Array(PresentationStatusSchema);
