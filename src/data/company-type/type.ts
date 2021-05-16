import { schema } from 'normalizr';


export type CompanyType = {
  id : number;
  value : string
}
export type CreateCompanyTypeDto = Partial<CompanyType> & {
  value :string;
}

export const companyTypeSchema = new schema.Entity('companyTypes',{});
export const companyTypeListSchema = new schema.Array(companyTypeSchema);
