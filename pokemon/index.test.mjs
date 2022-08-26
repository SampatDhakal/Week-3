// 1. Test Pokemon::getAttackDamageWrtType.

// 1.a. Test normal moves
// When fire attacks fire, 100 damage
// When grass attacks grass, 100 damage
// When water attacks water, 100 damage

// 1.b. Test super effective attacks
// When fire attacks grass, 150 damage
// When water attacks fire, 150 damage
// When grass attacks water, 150 damage

// 1.c. Test not very effective attacks
// When grass attacks fire, 50 damage
// When fire attacks water, 50 damage
// When water attacks grass, 50 damage

// 2. Test Pokemon::attack
// 2.a Non existent attacks should throw an error
// 2.b Missed attacks should return { damage: 0, miss: true, critical: false }
// 2.c Critical attacks should return { damage: expected * 2, miss: false, critical: true }

// NOTE: these methods might be broken. You might need to fix them *evil laugh*

import { Pokemon } from "./index.mjs";
import { defineTest, runTests, assertNotEqual, assertEqual, assertThrowsError } from "../test-utils.mjs"
const pikachu = new Pokemon("pikachu", "fire", "Paralyze")
const bulbasaur = new Pokemon("bulbasaur", "grass", "SeedBomb")
const squirtle = new Pokemon("squirtle", "water", "FlareBliz")




defineTest('Testing Normal Moves', () => {
    assertEqual(pikachu.getAttackDamageWrtType(pikachu), 100, 'Should damage 100')
    assertEqual(bulbasaur.getAttackDamageWrtType(bulbasaur), 100, 'Should damage 100')
    assertEqual(squirtle.getAttackDamageWrtType(squirtle), 100, 'Should damage 100');

})

defineTest('Test super effective attacks', () => {
    assertEqual(pikachu.getAttackDamageWrtType(bulbasaur), 150, 'Should damage 150')
    assertEqual(squirtle.getAttackDamageWrtType(pikachu), 150, 'Should damage 150')
    assertEqual(bulbasaur.getAttackDamageWrtType(squirtle), 150, 'Should damage 150');

})

defineTest('Test not very effective attacks', () => {
    assertEqual(bulbasaur.getAttackDamageWrtType(pikachu), 50, 'Should damage 50')
    assertEqual(pikachu.getAttackDamageWrtType(squirtle), 50, 'Should damage 50')
    assertEqual(squirtle.getAttackDamageWrtType(bulbasaur), 50, 'Should damage 50');

})

// defineTest('Non existent attacks should throw an error', () => {
//     assertThrowsError(bulbasaur.attack("Paralyze", pikachu), 'bulbasaur doesnt know how to do that.', 'Should throw an error')
// })

defineTest('Missed attacks should return { damage: 0, miss: true, critical: false }', () => {
    
})

defineTest('Critical attacks should return { damage: expected * 2, miss: false, critical: true }', () => {

})

runTests()