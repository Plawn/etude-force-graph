import { schema } from "normalizr";
import { Phase, phaseListSchema } from "../phase/type";
import { Contact, contactListSchema, contactSchema } from "../contact/type";
import { documentListSchema, FullDocument } from "../document/type";
import { MissionOrigin, missionOriginSchema } from "../mission-origin/type";
import { Member, memberSchema } from "../member/type";
import { Follower, followerListSchema } from "../follower/type";
import { Planning } from "../planning/type";
import { Position, positionListSchema } from "../position/type";

export type MissionState = "PROPOSITION" | "PREPARATION" | "SUIVI" | "FIN" | "ARCHIVAGE";

export type Mission = {
	id: number;
	name: string;
	createdAt: string;
	defaultJehPrice: number;
	jehCharges: number;
	additionalCharges: number;
	phases: Phase[];
	missionOrigin: MissionOrigin;
	positions: Position[];
	documents: FullDocument[];
	followers: Follower[];
	secondaryContacts: Contact[];
	contact: Contact;
	projectManager: Member;
	state: MissionState;
	description: string;
	isSubcontracted: boolean;
	isFromSubcontracting: boolean;
	percentageAdvancePay: number;
	planning: Planning;
};

/**
 * Object type used when creating a mission
 * The only required fields are `name` and `missionOrigin`
 * The others are optional
 */
export type CreateMissionDto = Partial<Mission> & {
	name: string;
	description: string;
};

export const missionSchema = new schema.Entity("missions", {
	phases: phaseListSchema,
	missionOrigin: missionOriginSchema,
	followers: followerListSchema,
	secondaryContacts: contactListSchema,
	contact: contactSchema,
	projectManager: memberSchema,
	positions: positionListSchema,
	documents: documentListSchema,
});

export const missionListSchema = new schema.Array(missionSchema);

export const stateList = {
	PROPOSITION: "PROPOSITION",
	PREPARATION: "PREPARATION",
	SUIVI: "SUIVI",
};

export enum FIELD {
	offset,
	duration,
	delivery,
}
