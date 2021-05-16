import { schema } from "normalizr";

export type PlanningType = {
	id: number;
	name: string;
};

export const PlanningTypesSchema = new schema.Entity("planningTypes", {});
export const PlanningTypesListSchema = new schema.Array(PlanningTypesSchema);
