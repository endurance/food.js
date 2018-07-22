
export interface GeneralAction<T> {
    type: string;
    payload: T;
}

export interface GeneralActionFunction<T> {
    (payload: T): GeneralAction<T>;
}

export const SAVE_EVENT = 'SAVE_EVENT';