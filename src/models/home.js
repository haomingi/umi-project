/**
 * Created by admin on 2019/3/23.
 */
import { reg } from '../services/home';
//import router from 'umi/router';

export default {
  namespace: 'home',
  state: {
    'list':{
      'productList': '',
      'bannerList': ''
    },
    'name': ''
  },
  effects: {
    *reg({ payload, callback }, { call, put, fork, take }) {
      //console.log(fork)
      //console.log(take)
      const response = yield call(reg, payload);
      //console.log(response)
      yield put({
        type: 'setData',
        payload: response.name || ''
      });
    }
  },
  reducers: {
    setData(state, { payload }) {
      return {
        ...state,
        name: payload,
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/home' || pathname === '/') {
          dispatch({
            type: 'reg',
          });
        }
      });
    },
  },
};
