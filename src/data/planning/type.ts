import { Document } from "../document/type";
// import { DateTime } from "luxon";
import { Phase, PhaseCreation, PhaseForm, PhaseSuivi } from "../phase/type";
import { PlanningType } from "./planningTypes/type";
import { PlanningReason } from "./planningReasons/type";

export type Planning = {
	id: number;
	createdAt: string;
	reason: PlanningReason;
	type: PlanningType;
	deliveries: Delivery[];
	updatedAt: string;
};

export type PlanningForm = {
	phases: PhaseForm[];
	deliveries: DeliveryForm[];
};

export type Delivery = {
	id: number;
	deliveryDate: string;
	document?: Document;
	invoice?: Document;
	phases: Phase[];
};

export type DeliveryForm = {
	deliveryDate: string; //DateTime;
};

export type PlanningCreation = {
	type?: { id: number };
	reason?: { id: number };
	deliveries: DeliveryCreation[];
};

export type DeliveryCreation = {
	deliveryDate: string;
	phases: PhaseCreation[];
};

export type PlanningSuivi = {
	id?: number;
	createdAt: string;
	updatedAt?: string;
	reason?: PlanningReason;
	type?: PlanningType;
	document: Document;
	deliveries: DeliverySuivi[];
};

export type ExtendedPlanningSuivi = PlanningSuivi & { modifiedPrice: number; modifiedDuration: number };

export type DeliverySuivi = {
	id?: number;
	deliveryDate: string;
	planning?: PlanningSuivi;
	JEHAmount?: number;
	document: Document;
	invoice?: Document;
	phases: PhaseSuivi[];
};
