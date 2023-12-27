import { EFieldType, IFormField } from '../fields.type';
import NumberInputRenderer from './NumberInputRenderer';
import RadioFieldRenderer from './RadioFieldRenderer';
import TextBoxRenderer from './TextBoxRenderer';

function FormField({ type, properties }: IFormField) {
  switch (type) {
    case EFieldType.TEXT: {
      return <TextBoxRenderer {...properties} />;
    }
    case EFieldType.NUMBER_INPUT: {
      return <NumberInputRenderer {...properties} />;
    }
    case EFieldType.RADIO: {
      return <RadioFieldRenderer {...properties} />;
    }
    default: {
      return null;
    }
  }
}

export default FormField;
