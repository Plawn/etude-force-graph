import { schema } from "normalizr";
import { Civility } from "../civility/type";
import { Company } from "../company/type";

export type Contact = {
	id: number;
	gender: string;
	firstName: string;
	lastName: string;
	mail?: string;
	phoneNumber?: string;
	position?: string;
	civility: Civility;
	company: Company;
	deletedAt?: Date;
};

export type ContactDto = Partial<Contact> & {
	gender: string;
	firstName: string;
	lastName: string;
	mail: string;
	phoneNumber: string;
	position: string;
};
export const contactSchema: any = new schema.Entity("contacts", {});
export const contactListSchema = new schema.Array(contactSchema);
