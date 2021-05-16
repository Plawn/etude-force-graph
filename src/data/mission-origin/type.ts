import { schema } from 'normalizr';

export type MissionOrigin = {
  id : number;
  value : string;
}

export type CreateMissionOriginDto = Partial<MissionOrigin> & {
  value : string;
}

export const missionOriginSchema = new schema.Entity('missionOrigins',{});
export const missionOriginListSchema = new schema.Array(missionOriginSchema);
