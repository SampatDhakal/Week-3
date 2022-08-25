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
