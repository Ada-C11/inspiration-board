import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';


describe('NewCardForm', () => {
  test('that is matches an existing snapshot', () => {
    const wrapper = shallow( <NewCardForm addCardCallback ={() => {} } />);

    expect(wrapper).toMatchSnapshot();
  });
});