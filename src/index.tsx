import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import BigCalendar from 'react-big-calendar';
import * as moment from 'moment';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { EventReducer } from './redux/reducers/EventReducer';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);
const store: Store = createStore(EventReducer);

ReactDOM.render( (
  <Provider store={store}>
    <App />
  </Provider>),  document.getElementById('root') as HTMLElement);
registerServiceWorker();
