import { Civility } from "../civility/type";
import { Document } from "../document/type";
// import { Preferences } from "../preferences/type";
// import { Skill } from "../skill/type";

export type Student = {
	id: number;
	firstName: string;
	lastName: string;
	gender: string;
	mail: string;
	nationality: string;
	phoneNumber: string;
	promo: string;
	zipCode: string;
	cotisation: string;
	address: string;
	// skills: Skill[];
	city: string;
	civility: Civility;
	socialSecurityNumber: number;
	// preferences: Preferences;
	iban: number;
	picturePath: string;
	cetDocument?: Document;
	disabled: boolean;
};

export type BasicStudent = {
	id: number;
	firstName: string;
	lastName: string;
	picturePath: string;
};

export type CreateStudentDto = Partial<Student> & {
	firstName: string;
	lastName: string;
	gender: string;
	mail: string;
	nationality: string;
	phoneNumber: string;
	promo: string;
	zipCode: string;
	cotisation: string;
	address: string;
	city: string;
	password?: string;
	confirmPassword?: string;
};

export type PatchStudentDto = Partial<Student> & {
	firstName: string;
	lastName: string;
	gender: string;
	mail: string;
	nationality: string;
	phoneNumber: string;
	promo: string;
	zipCode: string;
	cotisation: string;
	address: string;
	city: string;
};