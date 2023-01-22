'use strict'

class Player {
  constructor (name) {
    this.name = name;
    this.strength = 5;
    this.defense = 50;
    this.dexterity = 10;
    this.gold = 10;
    this.potion = 0;
    this.level = 1;
    this.health = 100;
    this.xp = 0;
    this.score = 0;
    this.locationName = '';
    this.isInFight = false;
  }

  run () {
    this.health -= 5;
    this.isInFight = false;
  }

  goToLocation(locationName) {
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
  constructor (name, strength, defense, level, health, xp, dexterity, gold) {
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.level = level;
    this.health = health;
    this.xp = xp;
    this.dexterity = dexterity;
    this.gold = gold;
    this.score = 0;
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


// fight - while player life bigger than 0 and monster life bigger than 0:
// attack or
// drink potion or
// run away
// buyPotion: 
// if player gold bigger than potion price:
// add potion to player inventory
// updateXp - get xp from monster - add to player XP. if player level up:
// levelUp - update player level. if level is % 3 ==0, add points to player specs.
// updateGold - get gold from monster, update players gold.
// and any other function you want.


const fight = (player, monster, village) => {
  player.isInFight = true;

  while (player.isInFight && player.health > 0 && monster.health > 0) {
    console.log(`in fight: player.health = ${player.health} , monster.health = ${monster.health}`);
    monster.health -= 10;
    player.health -= 10;


  }
}

const WhoWillStartFighting = (player, monster) => {
  return player.dexterity * player.xp * player.level > monster.dexterity * monster.xp * monster.level ?player : monster;
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
  'bogo'
]

const monsterArr = [
  generateMonster('The Mummy', 20, 20, 1, 100, 30, 17, 20),
  generateMonster('The Raptor', 21, 22, 2, 100, 30, 20, 30),
  generateMonster('Spitemouth', 22, 26, 3, 100, 30, 25, 40),
  generateMonster('Oscar the Grouch', 23, 26, 4, 100, 30, 30, 50),
  generateMonster('Doomfoot', 24, 28, 5, 100, 30, 40, 60)
];

const StartGame = () => {
  
// const playerName = prompt('Please enter your name:');
// console.log(playerName);
const village = generateLocationVillage('the village', monsterArr);
console.log(village);
const player = createPlayer(playerName);
console.log(player);
player.goToLocation(village.name);
console.log(player);
fight(player, village.monsterArr[0], village);

}

StartGame();