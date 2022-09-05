import 'react-native-gesture-handler/jestSetup';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => { };

    return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

Enzyme.configure({ adapter: new Adapter() })