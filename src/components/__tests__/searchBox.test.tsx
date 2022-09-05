import React from 'react';
import { View } from 'react-native'
import { shallow } from 'enzyme';
import SearchBox from '../searchBox';

describe('Testing Component SearchBox', () => {
    const wrapper = shallow(<SearchBox />);

    const propsTextInput = {
        placeholder: 'Search',
        placeholderTextColor: '#909090',
    }

    const propsIcon = {
        name: 'search',
        size: 12,
    }

    test('should Container SearchBox exist', () => {
        expect(wrapper.find('View')).toHaveLength(1);
    });

    test('should exist subcomponent TextInput', () => {
        expect(wrapper.children().find('TextInput')).toHaveLength(1);
        expect(wrapper.children().find('TextInput').prop('placeholder')).toBe(propsTextInput.placeholder);
        expect(wrapper.children().find('TextInput').prop('placeholderTextColor')).toBe(propsTextInput.placeholderTextColor);
    });

    test('should exist subcomponent Icon', () => {
        expect(wrapper.children().find('Icon')).toHaveLength(1);
        expect(wrapper.children().find('Icon').prop('name')).toBe(propsIcon.name);
        expect(wrapper.children().find('Icon').prop('size')).toBe(propsIcon.size);
    });

});