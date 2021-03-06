import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {
	Category,
	Home,
	SingleDish,
	AdminList,
	App,
	LoginForm,
	Signup,
} from './components';
import {
	AddCategoryContainer,
	AddDishContainer,
	AdminCategoryContainer,
	AdminDishContainer,
} from './containers';
import { Provider } from 'react-redux';
import configureStore from './store';
import { loginUserSuccess } from './actions/auth';

import { syncHistoryWithStore } from 'react-router-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import ReduxToastr from 'react-redux-toastr';
import { push } from 'react-router-redux';
import userAuthenticated from './utils/authWrapper';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store, {
	selectLocationState (state) {
		return state.get('routing').toObject();
	}
});

const options = {
	authSelector: state => state.get('auth'),
	predicate: auth => auth.get('isAuthenticated'),
	redirectAction: ({ pathname, query }) => {
		if(query.redirect) {
			// If the user is not logged in go to /login
			return push(`${pathname}?next=${query.redirect}`);
		}
	},
	wrapperDisplayName: 'UserIsJWTAuthenticated'
};
const requireAuthentication = userAuthenticated(options);

const adminAuth = userAuthenticated({
	authSelector: state => state.get('auth'),
	predicate: auth => auth.get('admin'),
	redirectAction: ({pathname, query}) => {
		if (query.redirect) {
			return push(`${pathname}?next=${query.redirect}`);
		}
	},
	wrapperDisplayName: 'UserIsJWTAuthenticated'
});

const routes = (
<MuiThemeProvider>
	<Provider store={store}>
		<div className="wrapper">
    <Router history={history}>
        <Route path="/" component={App} >
          <IndexRoute component={requireAuthentication(Home)} />
	        <Route path="add" component={AddCategoryContainer} />
	        <Route path="admin" component={adminAuth(AdminList)}/>
	        <Route path="/admin/category" component={AdminCategoryContainer}/>
	        <Route path="/admin/dishes" component={AdminDishContainer}/>
	        <Route path="addcat" component={AddCategoryContainer}/>
          <Route path="adddish" component={AddDishContainer}/>
          <Route path="/:catId/dishes" component={Category}/>
          <Route path="/:catId/:dishId" component={SingleDish}/>
	        <Route path="login" component={LoginForm}/>
	        <Route path="signup" component={Signup}/>
          <Route path="*" component={App}/>
        </Route>
    </Router>
			<ReduxToastr
				timeOut={2000}
				newestOnTop={false}
				preventDuplicates={true}
				position="top-center"
				transitionIn="fadeIn"
				transitionOut="fadeOut"
				/>
		</div>
	</Provider>
</MuiThemeProvider>
);

const token = localStorage.getItem('token');
if (token !== null) {
	store.dispatch(loginUserSuccess(token));
}

export default routes;