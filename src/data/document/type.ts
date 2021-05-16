import { schema } from "normalizr";
import { DocumentType, documentTypeSchema } from "../document-type/type";
import { validationListSchema } from "../validation/type";

export type formData = { [placeholder: string]: string };

export type PublipostData = { [templateName: string]: { [placeholder: string]: string } };

export enum PublipostableType {
	Mission = "Mission",
	Student = "Student",
	Meeting = "Meeting",
}

export type PublipostFormType = {
	[name: string]: string;
};

export type LinkedEntity = {
	type: PublipostableType;
	entityId: number;
};

export type PublipostBody = {
	linkedEntities: { [namedVariable: string]: LinkedEntity };
	rootEntity: LinkedEntity;
	templateData?: PublipostData;
};

export type Document = {
	id: number;
	createdAt: string;
	deletedAt?: string;
	path: string;
	signedAt?: string | null;
	type: DocumentType;
	reference: string;
	invoicePaid: boolean;
};

export type FullDocument = Document & {
	linkedEntities: LinkedEntity[];
	relatedDocuments: RelatedDocument[];
};

export type RelatedDocument = {
	id: number;
};

export type DocumentUrlResponse = {
	url: string;
};

export const DocumentSchema = new schema.Entity("documents", {
	DocumentType: documentTypeSchema,
	validations: validationListSchema,
});
export const documentListSchema = new schema.Array(DocumentSchema);
