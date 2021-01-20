// const EntityBase = require('./entityBase')

// console.log(new EntityBase({
//   name: 'Leandro',
//   gender: 'male'
// }).#name)

const assert = require('assert')
const Employee = require('./employee')
const Util = require('./util')

const GENDER = {
  male: 'male',
  female: 'female'
}

{
  const employee = new Employee({
    name: 'Xuxa da Silva',
    gender: GENDER.female
  })
  assert.throws(() => employee.birthYear, { message: 'you must define age first!!'} )
}

{
  const employee = new Employee({
    name: 'Joãozinho',
    age: 20,
    gender: GENDER.male
  })
  assert.deepStrictEqual(employee.name, "Mr. Joãozinho")
  assert.deepStrictEqual(employee.age, undefined)
  assert.deepStrictEqual(employee.gender, undefined)
  assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
  assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))
}