import { Mission, missionListSchema } from "../mission/type";
import { schema } from "normalizr";
import { Contact, contactListSchema } from "../contact/type";
import { CompanyType, companyTypeListSchema } from "../company-type/type";
import { ActivityArea } from "../activity-area/type";

export type Company = {
	id: number;
	name: string;
	address: string;
	zipCode: string;
	city: string;
	country: string;
	phoneNumber: string;
	mail: string;
	activityArea: ActivityArea;
	companyType: CompanyType;
	missions: Mission[];
	contacts: Contact[];
	missionCount: number;
	deletedAt: Date | null;
};

export type BasicCompanyDto = {
	id: number;
	name: string;
	address: string;
	zipCode: string;
	city: string;
	country: string;
	phoneNumber: string;
	mail: string;
	activityArea: ActivityArea;
	companyType: CompanyType;
	missions: { name: string; contact: { firstName: string; lastName: string } }[];
	missionCount: number;
};
export type SelectCompanyDto = { id: number; name: string };

export type CreateCompanyDto = Partial<Company> & {
	name: string;
	address: string;
	zipCode: string;
	city: string;
	country: string;
	phoneNumber: string;
	mail: string;
};

export const companySchema = new schema.Entity("companies", {
	type: companyTypeListSchema,
	contacts: contactListSchema,
	missions: missionListSchema,
});

export const companyListSchema = new schema.Array(companySchema);
