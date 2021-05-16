import { DocumentType } from "../document-type/type";
import { schema } from "normalizr";

export type InvoiceType = {
	id: number;
	documentType: DocumentType;
};

export const invoiceTypeSchema = new schema.Entity("invoiceTypes", {});
export const invoiceTypeListSchema = new schema.Array(invoiceTypeSchema);
