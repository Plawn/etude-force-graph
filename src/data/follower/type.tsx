import { schema } from "normalizr";
import { Member, memberSchema } from "../member/type";
import { ValidationType } from "../validation-type/type";
import { validationSchema } from "../validation/type";

export type Follower = {
	id: number;
	member: Member;
	type: ValidationType;
};

export const followerSchema = new schema.Entity("followers", {
	type: validationSchema,
	member: memberSchema,
});
export const followerListSchema = new schema.Array(followerSchema);
