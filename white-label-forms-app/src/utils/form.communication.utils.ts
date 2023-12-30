import { EMessagesToFormApp, ESources } from './constant';

export interface IMessage<P = unknown> {
    type: EMessagesToFormApp,
    payload: P,
    to: string,
    from: string
}

export type TMessageHandler = (data: IMessage) => void;
export type TFeatureFuncImplementation<T = unknown> = (payload: T) => void;

export const validateMessage = (messageHandler: TMessageHandler) => ({ data }: { data: IMessage }) => {
    const { to, from } = data;
    if (from === ESources.FORM_APP_CONSUMER && to === ESources.MY_FROM_APP) {
        messageHandler(data)
    } else {
        console.warn("INVALID-SOURCE -->", { to, from })
    }
};

