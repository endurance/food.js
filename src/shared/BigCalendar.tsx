import * as React from 'react';
import BigCalendar from 'react-big-calendar';
import { BigCalendarProps } from '../../node_modules/@types/react-big-calendar';
import { compose, defaultProps, pure } from 'recompose';

const BigCalendarBase: React.SFC<BigCalendarProps> = (props) => <BigCalendar {...props} />;

const EnhancedBase = compose<BigCalendarProps, BigCalendarProps>(
    defaultProps({events: []}),
    pure
)(BigCalendarBase);

export {EnhancedBase as BigCalendar};