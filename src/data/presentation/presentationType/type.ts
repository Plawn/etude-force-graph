import { schema } from "normalizr";

export type PresentationType = {
	id: number;
	name: string;
};
export const PresentationTypeSchema = new schema.Entity("presentationType", {});
export const PresentationTypeListSchema = new schema.Array(PresentationTypeSchema);
