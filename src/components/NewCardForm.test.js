import React from 'react';
import { shallow } from 'enzyme';
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow( <NewCardForm updateCardListCallback={() => {} } />);

    expect(wrapper).toMatchSnapshot();
  });
});