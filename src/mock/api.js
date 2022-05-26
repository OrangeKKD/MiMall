import Mock from 'mockjs'
Mock.mock('/api/user/login', {
  status: 0,
  data: {
    id: 12,
    username: 'admin',
    email: '857719037@qq.com',
    phone: null,
    role: 0,
    createTime: 121212

  }
})
