import { UserEvent } from '../reducers/EventReducer';
import { SAVE_EVENT, GeneralActionFunction } from './constants';


export const SaveEvent: GeneralActionFunction<UserEvent> = (payload) => { return {type: SAVE_EVENT, payload}; };