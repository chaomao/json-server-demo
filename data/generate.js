const faker = require('faker/locale/zh_CN')

const data = { users: [] }
// Create 1000 users
for (let i = 0; i < 1000; i++) {
  data.users.push({ id: i, name: faker.name.findName() })
}

console.log(JSON.stringify(data))