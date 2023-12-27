import { ETextBoxType } from '../fields.type';

interface ITextBoxRenderer {
  type?: ETextBoxType;
}
function TextBoxRenderer({ type = ETextBoxType.TEXT }: ITextBoxRenderer) {
  return <div>TextBoxRenderer {type}</div>;
}

export default TextBoxRenderer;
