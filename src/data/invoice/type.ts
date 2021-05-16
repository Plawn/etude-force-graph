import { Document } from "../document/type";
import { Mission } from "../mission/type";

export type InvoicePreviewDto = {
	id: number;
	mission: Mission;
	states: InvoiceState[];
	document: Document;
};

export type InvoiceDto = InvoicePreviewDto & {
	documentInvoiced: Document;
};

export enum InvoiceState {
	REGISTERED = "REGISTERED",
	ACCOUNTED = "ACCOUNTED",
	PAID = "PAID",
	PRINTED = "PRINTED",
}

// Use this array to be able to map enum
export const INVOICE_STATE = [InvoiceState.REGISTERED, InvoiceState.ACCOUNTED, InvoiceState.PAID, InvoiceState.PRINTED];
