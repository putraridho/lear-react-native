import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { reducer } from './todoListRedux';

export const store = createStore(
  persistReducer(
    {
      key: 'root',
      storage: AsyncStorage,
    },
    reducer,
  ),
);

export const persistor = persistStore(store);
