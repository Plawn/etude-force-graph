import { schema } from "normalizr";
import { Position } from "../position/type";

export type Phase = {
	id: number;
	name: string;
	position: number;
	offsetTime: number;
	duration: number;
	jehAmount: number;
	subPhases?: SubPhase[];
};

export type PhaseForm = {
	name: string;
	JEHAmount: number;
	delivery: number;
	duration: number;
	offset: number;
};

export type PhaseCreation = {
	position: number;
	name: string;
	jehAmount: number;
	duration: number;
	offsetTime: number;
};

export type PhaseSuivi = {
	id?: number;
	name: string;
	duration: number;
	position?: number;
	jehAmount: number;
	offsetTime: number;
	subPhases?: SubPhaseSuivi[];
};

export type SubPhase = {
	id: number;
	jehPrice: number;
	jehAmount: number;
	position: Position;
};

export type SubPhaseSuivi = {
	position: Position;
	jehPrice: number;
	jehAmount: number;
};

export const phaseSchema = new schema.Entity("phases");
export const phaseListSchema = new schema.Array(phaseSchema);
