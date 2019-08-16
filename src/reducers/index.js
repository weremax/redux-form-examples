import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import PostsReducer from './reducer_posts';
import NumbReducer from './reducer_numb';
import storage from 'redux-persist/lib/storage/session';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['numb']
}

const numbPersistConfig = {
  key: 'numb',
  storage: storage,
  blacklist: []
}

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostsReducer,
  numb: persistReducer(numbPersistConfig, NumbReducer),
  form: formReducer
});

export default persistReducer(rootPersistConfig, rootReducer);
