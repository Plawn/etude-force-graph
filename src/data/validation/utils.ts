import { ValidationType } from "../validation-type/type";
import { Validation } from "./type";

export const packValidations = (validations?: Validation[]) => {
    const step1: Map<string, { type: ValidationType, validations: Validation[] }> = new Map();
    const res: { type: ValidationType, validations: Validation[], validated: boolean }[] = [];
    if (validations) {
        validations.forEach(v => {
            if (step1.has(v.validationType.value)) {
                step1.get(v.validationType.value)!.validations.push(v);
            } else {
                step1.set(v.validationType.value, { type: v.validationType, validations: [v] });
            }
        })
    }
    step1.forEach(value => {
        res.push({
            type: value.type,
            validations: value.validations,
            validated: validations!.some(v => v.validatedAt !== null)
        })
    })
    return res;
}
