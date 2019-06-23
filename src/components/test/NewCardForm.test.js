// src/components/test/NewPetForm.test.js
import React from 'react';
import NewPetForm from '../NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow( <NewPetForm onSubmitNewCardCallback={() => {} } />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
