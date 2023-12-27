import { EFieldType, IFormField } from './fields.type';

// this will be sent as message form on iframe init 
export const fields: IFormField[] = [
    {
        type: EFieldType.TEXT,
        properties: {
            placeholder: 'Enter your name',
            name: 'Name',
            required: true,
            type: 'text'
        }
    },
    {
        type: EFieldType.TEXT,
        properties: {
            placeholder: 'Enter your email',
            name: 'Email',
            type: 'email',
        }
    },
    {
        type: EFieldType.NUMBER_INPUT,
        properties: {
            placeholder: 'Enter your age',
            name: 'Age',
            required: true,
            type: 'number'
        }
    },
    {
        type: EFieldType.RADIO,
        properties: {
            placeholder: 'Select your gender',
            name: 'Gender',
            type: 'radio',
            radioOptions: ['Male', 'Female', 'Other'],
            required: true,
        }
    }
]