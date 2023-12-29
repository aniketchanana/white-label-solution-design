import { Input } from '@chakra-ui/react';
import { validateProperties } from '../communicationUtils/common';
import { ETextBoxType, TFieldProperties } from '../fields.type';

const allowedKeys = ['type', 'placeholder', 'min', 'max', 'name'];
function NumberInputRenderer(props: TFieldProperties) {
  return (
    <Input
      {...validateProperties({ props, allowedKeys })}
      type={ETextBoxType.NUMBER}
    />
  );
}

export default NumberInputRenderer;
