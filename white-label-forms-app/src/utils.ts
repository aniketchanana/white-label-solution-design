import { IFormField, TFieldProperties } from './fields.type';
interface TValidateProperties {
    props: TFieldProperties,
    allowedKeys?: string[],
    mustHaveKeys?: string[]
}
export const validateProperties = (
    { props, allowedKeys, mustHaveKeys }: TValidateProperties
): TFieldProperties => {
    const updatedProps: TFieldProperties = { ...props };
    if (mustHaveKeys && mustHaveKeys.length > 0) {
        for (const key of mustHaveKeys) {
            if (!props[key]) {
                throw new Error(`"${key}" is a necessary property and must be supplied with properties`)
            }
        }
    }
    if (allowedKeys && allowedKeys.length > 0) {
        for (const key in props) {
            if (!allowedKeys.includes(key)) {
                delete updatedProps[key]
            }
        }
    }
    return updatedProps
};

export const getAllFieldsName = (fields: IFormField[]) => {
    return fields.map(({ properties }) => properties.name) as string[]
}
export const getAllRequiredFieldsName = (fields: IFormField[]) => {
    return fields.filter(({ properties }) => properties.required).map(({ properties }) => properties.name) as string[]
}