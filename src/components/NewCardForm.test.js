import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewCardForm from './NewCardForm';


describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<NewCardForm addCardCallback={() => { }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
