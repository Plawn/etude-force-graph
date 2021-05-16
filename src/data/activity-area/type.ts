import { schema } from 'normalizr';

export type ActivityArea = {
  id : number;
  value : string;
}
export type CreateActivityAreaDto = Partial<ActivityArea> & {
  value:string;
}

export const activityAreaSchema = new schema.Entity('activityAreas',{});
export  const activityAreaListSchema = new schema.Array(activityAreaSchema);
