import { Document } from "../document/type";
import { PresentationStatus } from "./presentationStatus/type";
import { PresentationType } from "./presentationType/type";
import { PresentationReason } from "./PresentationReason/type";

export type Presentation = {
	id: number;
	description: string;
	document: Document;
	status: PresentationStatus;
	type: PresentationType;
	jehAmount?: number;
	reasons?: PresentationReason[];
};

export type PresentationDto = {
	jehAmount?: number;
	typeId: number | null;
};
