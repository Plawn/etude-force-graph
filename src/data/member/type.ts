import { schema } from "normalizr";
import { Student } from "../student/type";

export type Member = {
	id: number;
	dn: string;
	username: string;
	student: Student;
	validations: string; //TODO modify this to Validation
	mail: string;
	disabled: boolean;
};

export type BasicMember = {
	id: number;
	dn: string;
	username: string;
	mail: string;
	disabled: boolean;
};

export type LdapGroup = {
	name: string;
};

export const memberSchema = new schema.Entity("members", {
	//TODO student and validation
});

export const memberListSchema = new schema.Array(memberSchema);
