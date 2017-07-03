'use strict'
const chai = require('chai')
const expect = require('chai').expect
const assert = require('chai').assert
const getPrimes = require('../getprimes.js')
describe('Function ',()=>{
  it('should pass when everything is okay',()=>{
    expect(true).to.be.true; 
  })  
})

describe('getPrimes',()=>{
  it('should return array for integers >=0',()=>{
    assert.typeOf(getPrimes(0),'array')
  })
  it('should return null if input is not a number',function(){
    assert.deepEqual(getPrimes(''),null)
  })
  it('should return [] for input less than 0',function(){
    assert.deepEqual(getPrimes(-1),[])
  })
  it('should return [] for input 0',function(){
    assert.deepEqual(getPrimes(0),[])
  })
  it('should return [2] for input 2',function(){
    assert.deepEqual(getPrimes(2),[2])
  })
  it('should return [2,3,5] for input value 5',function(){
    assert.deepEqual(getPrimes(5),[2,3,5])
  })
  it('should return [ 2, 3, 5, 7 ] for input 10',function(){
    assert.deepEqual(getPrimes(10),[ 2, 3, 5, 7 ])
  })
  it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]  for input 50',function(){
    assert.deepEqual(getPrimes(50),[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47])
  })
  it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for input 100',function(){
    assert.deepEqual(getPrimes(100),[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
  })
  it('length of input 1000 should be 168',function(){
    assert.deepEqual(getPrimes(1000).length,168)
  })
  it('length of input 10000 should be 1229 ',function(){
    assert.deepEqual(getPrimes(10000).length,1229)
  })
})