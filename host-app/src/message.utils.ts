const FORM_APP_IFRAME = 'FORM_APP_IFRAME';

export const FORMS_APP_URL = 'http://localhost:5173/';

export const postMessageToIFrame = <T>(type: string, payload: T) => {
    const editorIframe = document.getElementById(FORM_APP_IFRAME);
    if (editorIframe instanceof HTMLIFrameElement) {
        editorIframe.contentWindow?.postMessage({
            type,
            payload,
            to: 'MY_FROM_APP',
            from: 'FORM_APP_CONSUMER',
        }, '*');
    }
    else {
        console.error('UNABLE TO FIND IFRAME ELEMENT')
    }
};