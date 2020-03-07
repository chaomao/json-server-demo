# json-server-demo

1. 默认端口 12306
2. `npm run prepare-data` 调用 `data/generate.js`生成`data/db.json`，其中用到了`faker`生成假数据
3. `npm run start-server` 调用`src/server.js`启动服务，用`data/db.json`生成REST API
4. `get /`会显示json server欢迎页面，验证是否启动成功
5. `post /api/login`来登录，用户名密码 `admin/password`，正确则返回 `token`，否则返回400和错误消息
6. 正常数据请求都会验证是否request中是否携带token，逻辑在`src/login_middleware.js`中
7. `get /api/users`, `post /api/users`, `get /api/users/:id`, `put /api/users/:id`, `delete /api/users/:id`会同步更新`data/db.json`
8. 分页参数`get /api/posts?_page=7&_limit=20`，每页20个，要第7页，response header中有item总数和总页数
9. 排序`GET /api/posts?_sort=views&_order=asc`，按照字段`view`升序排列
10. 全文搜索关键字internet `GET /api/posts?q=internet`
