import { schema } from "normalizr";

export type PlanningReason = {
	id: number;
	name: string;
};

export const PlanningReasonsSchema = new schema.Entity("planningReasons", {});
export const PlanningReasonsListSchema = new schema.Array(PlanningReasonsSchema);
