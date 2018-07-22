import { Moment } from 'moment';
import { SAVE_EVENT } from '../actions/constants';

export interface UserEvent {
    start: Moment | Date;
    end: Moment | Date;
}

const initialState: UserEvent[] = [{
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
}];

export const EventReducer = (state: UserEvent[] = initialState, action: {type: string, payload: UserEvent}) => {
    switch (action.type) {
        case SAVE_EVENT: {
            const eventsCopy = [...state];
            eventsCopy.push(action.payload);
            return eventsCopy;
        }
        default: {
            return state;
        }
    }
};