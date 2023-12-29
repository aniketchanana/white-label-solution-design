import { FORMS_APP_URL, postMessageToIFrame } from './message.utils';

function App() {
  const handleIframeOnLoad = () => {
    postMessageToIFrame('INIT_FORM', { data: 'something init' });
  };
  return (
    <>
      <iframe
        id='FORM_APP_IFRAME'
        src={FORMS_APP_URL}
        onLoad={handleIframeOnLoad}
      />
    </>
  );
}

export default App;
