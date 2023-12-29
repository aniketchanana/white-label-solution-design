import React from 'react';
import { EMessagesToFormApp } from './constant';
import {
  IMessage,
  TFeatureFuncImplementation,
  validateMessage,
} from './form.communication.utils';

export const useMessageHandler = () => {
  const initializeFormsApp = React.useCallback(() => {
    console.log('i am initializing forms app');
  }, []);

  const messageToFeatureFuncMap: Record<
    EMessagesToFormApp,
    TFeatureFuncImplementation
  > = React.useMemo(
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
};
