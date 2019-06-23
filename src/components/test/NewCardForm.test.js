import React from 'react';
import { shallow } from 'enzyme';
import NewCardForm from '../NewCardForm';


describe('NewCardForm', () => {
    test('it matches snapshot', () => {

        // Mount the component in the DOM
        const wrapper = shallow(<NewCardForm
            cardsEndpoint='abcd.com'
            addCardCallback={() => { }}
        />);

        expect(wrapper).toMatchSnapshot();
    });
});


