import { schema } from "normalizr";

export type Field = {
	id: number;
	name: string;
	disabled: boolean;
};

export const fieldSchema = new schema.Entity("fields", {});
export const FieldListSchema = new schema.Array(fieldSchema);
