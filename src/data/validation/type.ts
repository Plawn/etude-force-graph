import { Member, memberSchema } from "../member/type";
import { ValidationType, validationTypeSchema } from "../validation-type/type";
import { schema } from "normalizr";
import { Mission } from "../mission/type";
import { Document as DocumentType } from "../document/type";

export type ValidationStateType = "WAITING" | "CDP_SIDE" | "VALIDATOR_SIDE";

export type Validation = {
	id: number;
	createdAt: string;
	validatedAt: string | null;
	lastValidationAt: string;
	comment: string;
	goingAndComingsNb: number;
	state: ValidationStateType; //TODO handle enum?
	validator: Member;
	document: DocumentType;
	mission: Mission;
	validationType: ValidationType;
	relatedValidators: { [x: string]: string };
};

export type CreateValidationDto = Partial<Validation>;

export const validationSchema = new schema.Entity("validations", {
	validator: memberSchema,
	validationType: validationTypeSchema,
});

export const validationListSchema = new schema.Array(validationSchema);
