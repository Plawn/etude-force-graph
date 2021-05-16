import { schema } from "normalizr";
import { Field, fieldSchema } from "../field/type";
import { Mission, missionSchema } from "../mission/type";
import { Student } from "../student/type";

export type Position = {
	id: number;
	duration: number;
	createdAt: string;
	student: Student;
	description: string;
	remuneration: number;
	mission: Mission;
	jobType: Field;
};

export const positionSchema = new schema.Entity("positions", {
	// sutdent: studentS
	// mission: missionSchema,
	jobType: fieldSchema,
});

export const positionListSchema = new schema.Array(positionSchema);
