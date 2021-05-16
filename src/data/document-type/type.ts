import { ValidationType, validationTypeListSchema } from "../validation-type/type";
import { schema } from "normalizr";
import { PublipostableType } from "../document/type";
import { InvoiceType } from "../invoice-type/type";

export type DocumentType = {
	id: number;
	value: string;
	subValue?: string;
	signature: boolean;
	validationTypes: ValidationType[];
	referencePattern: string;
	requiredEntities: PublipostableType[];
	disabled: boolean;
	invoiceType?: InvoiceType;
	extension: string;
};

export type CreateDocumentTypeDto = Partial<DocumentType> & {
	value: string;
	subValue?: string;
	referencePattern: string;
	requiredEntities: PublipostableType[];
};

export const documentTypeSchema = new schema.Entity("documentTypes", {
	validationTypes: validationTypeListSchema,
});
export const documentTypeListSchema = new schema.Array(documentTypeSchema);

export const documentTypeList = {
	REM: "REM",
	DDE: "DDE",
	PRO: "PRO",
	RDR: "RDR",
	AEN: "AEN",
	ARM: "ARM",
	PVL: "PVL",
	PVR: "PVR",
	FCS: "FCS",
	FCA: "FCA",
};

export const documentTypeSignInFollowingTab = {
	REM: "REM",
	DDE: "DDE",
	AEN: "AEN",
	ARM: "ARM",
	PVL: "PVL",
	PVR: "PVR",
};
