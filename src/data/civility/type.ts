import { schema } from 'normalizr';


export type Civility = {
  id : number;
  value : string;
}

export type CreateCivilityDto = Partial<Civility> & {
  value:string;
}

export const civilitySchema = new schema.Entity('civilities',{});
export const civilityListSchema = new schema.Array(civilitySchema);
