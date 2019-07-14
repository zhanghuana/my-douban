const Mock=require("mockjs");

Mock.mock('../../mock/json/nav.json','get',require('./json/nav.json'))
Mock.mock('/index/link','get',require('./json/data.json'))
Mock.mock('../../mock/json/data.json','get',require('./json/data.json'))
Mock.mock('../../mock/json/sort.json','get',require('./json/sort.json'))
Mock.mock('../../mock/json/reg.json','get',require('./json/reg.json'))