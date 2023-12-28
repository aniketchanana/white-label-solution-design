import { EFieldType, IFormField } from '../fields.type';
import NumberInputRenderer from './NumberInputRenderer';
import RadioFieldRenderer from './RadioFieldRenderer';
import TextBoxRenderer from './TextBoxRenderer';

function FormField({ type, properties }: IFormField) {
  const FieldTypeToComponentMap = {
    [EFieldType.TEXT]: <TextBoxRenderer {...properties} />,
    [EFieldType.NUMBER_INPUT]: <NumberInputRenderer {...properties} />,
    [EFieldType.RADIO]: <RadioFieldRenderer {...properties} />,
  };
  return FieldTypeToComponentMap[type] || null;
}

export default FormField;
