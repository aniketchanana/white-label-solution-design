import { ETextBoxType } from '../fields.type';
import TextBoxRenderer from './TextBoxRenderer';

function NumberInputRenderer() {
  return <TextBoxRenderer type={ETextBoxType.NUMBER} />;
}

export default NumberInputRenderer;
