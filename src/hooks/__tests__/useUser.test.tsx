import { responseUserWithPostMock } from '../../utils/const';
import axios, { AxiosResponse, AxiosStatic } from 'axios';
import { useUserHook } from '../useUser';
import { UsersResponse } from '../../interfaces/userInterfaces';
import { mount, shallow } from 'enzyme';

interface AxiosMock extends AxiosStatic {
    mockResolvedValue: Function
    mockRejectedValue: Function
}

it("useUserHook instance standart test", async () => {
    expect(typeof useUserHook).toBe('function');
});

it('should do something', async function () {
    // const wrapper = shallow(<useUserHook />);
    // const wrapper = shallow(useUserHook);
    // const instance = wrapper.instance();
    // const result = await wrapper.instance();
    // expect(result.bar).toBe(100);
});


