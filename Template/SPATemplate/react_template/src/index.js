import './css/site.css';
//import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';
import registerServiceWorker from './registerServiceWorker';

let routes = RoutesModule.routes;
function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
    ReactDOM.render(React.createElement(AppContainer, null,
        React.createElement(BrowserRouter, { children: routes, basename: baseUrl })), document.getElementById('react-app'));
}
renderApp();
// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require('./routes').routes;
        renderApp();
    });
}

registerServiceWorker();