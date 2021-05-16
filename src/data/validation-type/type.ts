import { schema } from "normalizr";

export type ValidationType = {
	id: number;
	value: string;
	mailAlias: string;
	role: string;
	icon: string;
	disabled: boolean;
};
export type CreateValidationTypeDto = Partial<ValidationType> & {
	value: string;
	mailAlias: string;
	role: string;
};

export const validationTypeSchema = new schema.Entity("validationTypes", {});
export const validationTypeListSchema = new schema.Array(validationTypeSchema);
