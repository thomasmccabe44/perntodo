import React, { Fragment } from 'react';
import './App.css';
import InputTodo from './components/inputTodo.component';
import ListTodo from './components/listTodo.component';

function App() {
	return (
		<Fragment>
			<div className="container">
				<InputTodo />
				<ListTodo />
			</div>
		</Fragment>
	);
}

export default App;
