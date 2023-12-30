
// this will be sent as message form on iframe init 
const fields = [
    {
        type: 'TEXT',
        properties: {
            placeholder: 'Enter your name',
            name: 'Name',
            required: true,
            type: 'text'
        }
    },
    {
        type: 'TEXT',
        properties: {
            placeholder: 'Enter your email',
            name: 'Email',
            type: 'email',
        }
    },
    {
        type: 'NUMBER_INPUT',
        properties: {
            placeholder: 'Enter your age',
            name: 'Age',
            required: true,
            type: 'number',
            min: 0,
            max: 130
        }
    },
    {
        type: 'RADIO',
        properties: {
            placeholder: 'Select your gender',
            name: 'Gender',
            type: 'radio',
            radioOptions: ['Male', 'Female', 'Other'],
            required: true,
        }
    }
]

const theme = {
    Button: {
        defaultProps: {
            colorScheme: 'red'
        }
    }
}
export const formConfig = {
    fields,
    submitButtonLabel: 'Save details',
    theme,
    appHeading: 'Cool forms app'
}