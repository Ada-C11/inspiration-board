import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board from '../Board';


describe('<Board />', () => {
    test('that is matches an existing snapshot', () => {

        const wrapper = shallow (<Board  url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`margaret`}/>)

        expect(wrapper).toMatchSnapshot();

    });
});