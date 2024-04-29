import { MMKV } from 'react-native-mmkv';

const userDataStorage = new MMKV({ id: 'user-data-storage' });
export default userDataStorage;
