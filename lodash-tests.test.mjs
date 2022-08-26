// Assessment
// clamp, inRange <- write exhaustive tests for one of these
// flatten, zip <- write exhaustive tests for one of these
// map, filter <- write exhaustive tests for one of these

// Use library: https://www.npmjs.com/package/lodash-es
// Reference of these functions: https://lodash.com/docs/4.17.15

import { inRange,zip,filter } from 'lodash-es'
import { defineTest, runTests, assertNotEqual, assertEqual } from './test-utils.mjs'




  defineTest('Testing inRange true values', () => {
    assertEqual(inRange(3,2,4), true , 'should be true')
  })

  defineTest('Testing inRange false values', () => {
    assertNotEqual(inRange(3,4,6), true, 'should be false')
    assertNotEqual(inRange(Infinity,Infinity,Infinity), true, 'should be false')
    assertNotEqual(inRange(undefined,undefined,undefined), true, 'should be false')
    assertNotEqual(inRange(null,null,null), true, 'should be false')
  })

  defineTest('Testing zip array', () => {
    // assertEqual(zip([Infinity,Infinity],[Infinity,Infinity],[Infinity,Infinity]),[[Infinity,Infinity,Infinity],[Infinity,Infinity,Infinity]], 'should zip the arrays')
    assertEqual(zip(['a','b'],[1,2],[true,false]),[["a",1,true],["b",2,false]], 'should zip the arrays')
  })
  

  var users =[
    {'user':'barney','age':36,'active':true},
    {'user':'fred','age':40,'active':false}
    ];
    
  defineTest('Testing filtering', () => {
    // assertEqual(filter(users,function(o){return!o.active;}), [{user:'fred',age:40,active:false}], 'should return not active user')
    assertEqual(filter(users,{'age':36,'active':true}), [{"user":"barney","age":36,"active":true}], 'should return objects of barney')
  })


  console.log(filter(users,function(o){return!o.active;}))
  runTests()