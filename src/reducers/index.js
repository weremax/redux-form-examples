import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import NumbReducer from './reducer_numb';
// import formTestReducer from './reducer_formTest';
import docgenReducer from './reducer_docgen';

// adding persistance setup
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

/*const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['numb']
}*/

const numbPersistConfig = {
  key: 'numb',
  storage: storage,
  blacklist: []
}
// end persistance setup
// Note the persistReducer in the combineReducers
// and the persistReducer wrapping the export below

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostsReducer,
  numb: persistReducer(numbPersistConfig, NumbReducer),
  form: formReducer,
  // docgen: formTestReducer,
  docgen: docgenReducer
});

export default rootReducer;
