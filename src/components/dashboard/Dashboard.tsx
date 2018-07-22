import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { BigCalendar } from '../../shared/BigCalendar';
import { SaveEvent } from '../../redux/actions/EventAction';
import { UserEvent } from '../../redux/reducers/EventReducer';
import { GeneralActionFunction } from '../../redux/actions/constants';
import { withHandlers, compose } from 'recompose';

interface DashboardProps {
    saveEvent: GeneralActionFunction<UserEvent>;
    onSelectSlot: any;
}

class DashboardBaseComponent extends React.PureComponent<DashboardProps> {

    render() {
        const {onSelectSlot} = this.props;
        return (
        <div style={{height: 800}}>
            <BigCalendar
                popup={true} 
                events={[]}
                selectable={true}
                onSelectSlot={onSelectSlot}
            />
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        saveEvent: (payload: UserEvent) => dispatch(SaveEvent(payload))
    };
};

const Dashboard = compose(
    connect((state) => {console.log(state); return state; }, mapDispatchToProps),
    withHandlers({
        onSelectSlot: (props: any) => (slot: any) => {
            props.saveEvent({start: slot.start, end: slot.end});
        }
    }))((DashboardBaseComponent));

export {Dashboard};