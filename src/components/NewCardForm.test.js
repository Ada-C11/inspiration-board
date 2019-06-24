import React from 'react';
import ReactDOM from 'react-dom';
import NewCardForm from './NewCardForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewCardForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});