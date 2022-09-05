import React from 'react';
import { View } from 'react-native'
import { shallow } from 'enzyme';
import SearchBox from '../searchBox';

describe('Testing Component SearchBox', () => {
    const wrapper = shallow(<SearchBox />);

    const propsIcon = {
        name: 'search',
        size: 12,
    }

    test('should Container SearchBox exist', () => {
        expect(wrapper.find('View')).toHaveLength(1);
    });

    test('should TextInput lenght', () => {
        expect(wrapper.children().find('TextInput')).toHaveLength(1);
    });

    test('Icon component exist', () => {
        expect(wrapper.children().find('Icon')).toHaveLength(1);
        expect(wrapper.children().find('Icon').prop('name')).toBe(propsIcon.name);
        expect(wrapper.children().find('Icon').prop('size')).toBe(propsIcon.size);
    });


});