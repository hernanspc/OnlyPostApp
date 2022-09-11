import React from 'react';
import { mount, shallow } from 'enzyme';
import TitleComponent from '../title';

describe('Testing Component TitleComponent', () => {

    const wrapper = shallow(<TitleComponent />);

    test('component must exist', () => {
        expect(wrapper).toBeTruthy();
    });
    test('component Icon must exist', () => {
        expect(wrapper.children().find('Icon').at(0)).toHaveLength(1);
    });

});