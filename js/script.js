'use strict'

class Player {
  #name         = '';
  #strength     = 0;
  #defense      = 0;
  #dexterity    = 0;
  #gold         = 0;
  #potion       = 0;
  #level        = 0;
  #health       = 0;
  #xp           = 0;
  #score        = 0;
  #locationName = 0;
  #isInFight    = 0;
  
  constructor (name) {
    this.name         = name;
    this.strength     = 5;
    this.defense      = 50;
    this.dexterity    = 10;
    this.gold         = 10;
    this.potion       = 0;
    this.level        = 1;
    this.health       = 100;
    this.xp           = 0;
    this.score        = 0;
    this.locationName = '';
    this.isInFight    = false;
  }

  get strength () {
    return this.strength;
  }

  set level (level) {
    this.level = level;
  }

  get level () {
    return this.level;
  }

  get name () {
    return this.name;
  }

  set health (value) {
    this.health = value;
  }

  set xp (value) {
    this.xp = value;
  }

  set score (value) {
    this.score = value;
  }

  get level () {
    return this.level;
  }

  set level (value) {
    this.level = value;
  }

  get name () {
    return this.name;
  }

  get health () {
    return this.health;
  }

  run () {
    this.health -= 5;
    this.isInFight = false;
  }

  set locationName(locationName) {
    this.locationName = locationName;
  }

  drinkPotion (strength, price) {
    if(this.gold >= price) {
      this.gold -= price;
      this.health += strength;
    }
  }
}
class Monster {
  #name         = '';
  #strength     = 0;
  #defense      = 0;
  #level        = 0;
  #health       = 0;
  #xp           = 0;
  #dexterity    = 0;
  #gold         = 0;
  #score        = 0;
  
  constructor (name, strength, defense, level, health, xp, dexterity, gold) {
    this.name       = name;
    this.strength   = strength;
    this.defense    = defense;
    this.level      = level;
    this.health     = health;
    this.xp         = xp;
    this.dexterity  = dexterity;
    this.gold       = gold;
    this.score      = 0;
  }

  get name () {
    return this.name;
  }

  get strength () {
    return this.strength;
  }

  get defense () {
    return this.defense;
  }

  get level () {
    return this.level;
  }

  get health () {
    return this.health;
  }

  get xp () {
    return this.xp;
  }

  get dexterity () {
    return this.dexterity;
  }

  get gold () {
    return this.gold;
  }

  get score () {
    return this.score;
  }
}
class Village {
  constructor (name, monsters) {
    this.name = name;
    this.monsterArr = monsters;
  }

  addMonsters(monsterArr) {
    this.monsterArr = monsterArr;
  }
}
class MapGame {
  constructor () {
    this.villageArr = new Array();
  }
  addMonstersToVillage(village, monsterArr) {
    const vil = this.villageArr.find(village);
    village.addMonsters(vil);
  }
}



const fight = (player, monster, village) => {
  player.isInFight = true;

  while (player.isInFight && player.health > 0 && monster.health > 0) {
    console.log(`in fight: player.health = ${player.health} , monster.health = ${monster.health}`);
    monster.health -= 10;
    player.health -= 10;
  }
}

const WhoWillStartFighting = (player, monster) => {
  return player.dexterity * player.xp * player.level > monster.dexterity * monster.xp * monster.level ? player : monster;
}

const playerWin = function (player, monster) {
  player.xp += monster.xp;
  player.gold += monster.gold;
}

const levelUp = (player) => {
  if (player.xp >= 1000) {
    player.level += 1;
    player.xp -= 1000;
  }
}

const thirdLevelBonus = (player) => {
  if (player.level % 3 === 0) {
    player.strength += 3;
    player.defense += 3;
    player.health += 3;
    player.dexterity += 3
  }
}

const generateLocationVillage = (name, monsterArr) => {
  return new Village (name, monsterArr);
}

const generateLocationMap = (villageArr) => {
  return new MapGame (villagesArr);
}

const generateMonster = (name, strength, defense, level, health, xp, dexterity, gold) => {
  return new Monster(name, strength, defense, level, health, xp, dexterity, gold);
}

const createPlayer = (playerName) => {
  return new Player (playerName);
}

const mapLocationMonsters = (map, village, monstersArr) => {
  map.addMonstersToVillage(village, monsterArr);
}

const listLocations = () => {
  console.log(this.map.villageArr);
}

const listMonsters = (village) => {
  console.log(`Village: ${village.name} : `);

  for (let i = 0; i < village.monsterArr.length; i++) {
    console.log(`Monster #${i} : ${village.monsterArr[i]} , GOLD: ${village.monsterArr[i].gold}`);
  }
}

const locations = [
  'the dark',
  'the village',
  'the scary',
  'Mim',
  'ragnarok',
  'bogo village'
]

const monsterArr = [
  generateMonster('The Mummy', 20, 20, 1, 100, 30, 17, 20),
  generateMonster('The Raptor', 21, 22, 2, 100, 30, 20, 30),
  generateMonster('Spitemouth', 22, 26, 3, 100, 30, 25, 40),
  generateMonster('Oscar the Grouch', 23, 26, 4, 100, 30, 30, 50),
  generateMonster('Doomfoot', 24, 28, 5, 100, 30, 40, 60)
];

const startGame = () => {
  const playerName = prompt('Please enter your name:');
  console.log(playerName);
  const village = generateLocationVillage('the village', monsterArr);
  console.log(village);
  const player = createPlayer(playerName);
  console.log(player);
  player.locationName = village.name;
  console.log(player);
  fight(player, village.monsterArr[0], village);
}

startGame();

