export enum ETextBoxType {
    PASSWORD = 'password',
    TEXT = 'text',
    NUMBER = 'number',
}

export enum EFieldType {
    TEXT = 'TEXT',
    RADIO = 'RADIO',
    NUMBER_INPUT = 'NUMBER_INPUT'
}

export type TFieldProperties = Record<string, unknown>
export interface IFormField {
    type: EFieldType,
    properties: TFieldProperties
}