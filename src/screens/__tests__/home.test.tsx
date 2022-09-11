import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../home';
import PostCard from '../../components/post';
import { getDataAsyncStorage, saveDataAsyncStorage } from '../../utils/storage';
import { responseUserWithPostMock } from '../../utils/const';

describe('Testing Component Home', () => {
    jest.mock('react-native-splash-screen', () => {
        return {
            hide: jest.fn(),
            show: jest.fn()
        };
    });

    const wrapper = shallow(<Home />);

    test('component must exist', () => {
        expect(wrapper).toBeTruthy();
    });
    test('component Icon must exist', () => {
        // console.log('wrapper ', wrapper.children().find('View').debug())
        expect(wrapper.children().find('View')).toHaveLength(1);
        expect(wrapper.children().find('Title')).toHaveLength(1);
        expect(wrapper.children().find('SearchBox')).toHaveLength(1);
        expect(wrapper.children().find('FlashList')).toHaveLength(1);
    });

    // test('Read async-storage', async () => {
    //     await saveDataAsyncStorage('@data', responseUserWithPostMock);
    //     const data = await getDataAsyncStorage('@data');
    //     console.log('data ', data)
    //     expect(data).toEqual(responseUserWithPostMock);
    // });
});