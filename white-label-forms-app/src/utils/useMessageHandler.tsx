import React from 'react';
import { EMessagesToFormApp } from './constant';
import { IMessage, validateMessage } from './form.communication.utils';

type TInitFormPayload = {
  theme: Record<string, string>;
  appName: string;
  fieldsConfig: Record<string, unknown>[];
};

export const useMessageHandler = () => {
  const [appConfig, setAppConfig] = React.useState<Record<string, unknown>>({});
  const initializeFormsApp = React.useCallback((payload: TInitFormPayload) => {
    setAppConfig(payload);
  }, []);

  const messageToFeatureFuncMap: Record<EMessagesToFormApp, unknown> =
    React.useMemo(
      () => ({
        [EMessagesToFormApp.INIT_FORM]: initializeFormsApp,
      }),
      [initializeFormsApp]
    );

  const handleIncomingMessage = React.useCallback(
    (data: IMessage) => {
      const { type } = data;
      const featureFunction = messageToFeatureFuncMap[type];
      if (typeof featureFunction !== 'function') {
        console.error('FUNCTION-IMPLEMENTATION-MISSING');
      } else {
        featureFunction(data.payload);
      }
    },
    [messageToFeatureFuncMap]
  );

  React.useEffect(() => {
    const handleMessageWithValidation = validateMessage(handleIncomingMessage);
    window.addEventListener('message', handleMessageWithValidation);
    return () =>
      window.removeEventListener('message', handleMessageWithValidation);
  }, [handleIncomingMessage]);

  return { appConfig };
};
