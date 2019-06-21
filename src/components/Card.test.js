import React from 'react';
import Card from './Card';
import {shallow} from 'enzyme';

describe ('Card', () => {
    test('that is matches an existing snapshot', () => {
        const wrapper = shallow( <Card 
            id={1}
            text=""
            emoji=""
            deleteCardCallback = { () => {} }/>);

        expect(wrapper).toMatchSnapshot();
    });
});