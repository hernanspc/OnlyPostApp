import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import PostCard from '../post';
import { TouchableOpacity } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import { responseUserWithPostMock } from '../../utils/const';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Component SearchBox', () => {

    const wrapper = shallow(<PostCard user={responseUserWithPostMock[0]} />);

    test('should Container SearchBox exist is liked true', () => {
        expect(wrapper.find('View')).toHaveLength(27);
    });

    test('should Container SearchBox exist is liked false', () => {
        const wrapper = shallow(<PostCard user={responseUserWithPostMock[1]} />);
        expect(wrapper.find('View')).toHaveLength(27);
    });

    test('should Text render', () => {
        expect(wrapper.children().find('Text')).toHaveLength(12);
    });

}); 