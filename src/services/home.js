/**
 * Created by admin on 2019/3/23.
 */
import proxyRequest from '../utils/request';

export async function reg(params) {
  return proxyRequest.get('/api/home', params);
}
