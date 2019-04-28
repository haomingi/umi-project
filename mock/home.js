/**
 * Created by admin on 2019/3/23.
 */
export default {
  // 支持值为 Object 和 Array
  // hm:模拟数据必须带code request.js里面定义的
  'GET /api/home': { code: 1, name: 'haoming' },

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },
};
