jest.unmock('../serialize_params') // unmock to use the actual implementation of serialize_params
import serialize_params from '../serialize_params'

describe('serialize_params', () => {
  it('serialize_params {a} to equal a=a', () => {
    // const serialize_params = require('../serialize_params');
    expect(serialize_params({ a: 'a' })).toBe('a=a')
  })

  it('serialize_params {a, b, c} to equal a=a&b=b&c=c', () => {
    // const serialize_params = require('../serialize_params');
    expect(serialize_params({ a: 'a', b: 'b', c: 'c' })).toBe('a=a&b=b&c=c')
  })

  it('should serialize a simple object', () => {
    const obj = { name: 'John', age: 30 }
    const result = serialize_params(obj)
    expect(result).toBe('name=John&age=30')
  })

  it('should serialize an object with special characters', () => {
    const obj = { name: 'John Doe', city: 'New York & Co.' }
    const result = serialize_params(obj)
    expect(result).toBe('name=John%20Doe&city=New%20York%20%26%20Co.')
  })

  it('should serialize an object with numeric keys', () => {
    const obj = { 1: 'one', 2: 'two' }
    const result = serialize_params(obj)
    expect(result).toBe('1=one&2=two')
  })

  it('should serialize an object with boolean values', () => {
    const obj = { isActive: true, isAdmin: false }
    const result = serialize_params(obj)
    expect(result).toBe('isActive=true&isAdmin=false')
  })

  it('should serialize an empty object', () => {
    const obj = {}
    const result = serialize_params(obj)
    expect(result).toBe('')
  })

  it('should serialize an object with null values', () => {
    const obj = { name: 'John', age: null }
    const result = serialize_params(obj)
    expect(result).toBe('name=John&age=null')
  })
})
