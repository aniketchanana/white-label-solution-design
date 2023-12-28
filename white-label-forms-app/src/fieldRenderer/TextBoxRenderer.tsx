import { Input } from '@chakra-ui/react';
import { ETextBoxType, TFieldProperties } from '../fields.type';
import { validateProperties } from '../utils';

const allowedKeys = ['type', 'placeholder', 'name'];

function TextBoxRenderer(props: TFieldProperties) {
  return (
    <Input
      type={ETextBoxType.TEXT}
      {...validateProperties({ props, allowedKeys })}
    />
  );
}

export default TextBoxRenderer;
