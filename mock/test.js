const Mock = require('mockjs')

let id = Mock.mock('@id')

let obj = Mock.mock(
    {
        id: '@id()',
        username: "@cname()",
        date: "@date()",
        avatar: "@image('200x200', 'red', '#fff', 'avatar')",
        description: "@paragraph()",
        ip: "@ip()",
        email: "@email()"
    }
)
console.log(id,obj);