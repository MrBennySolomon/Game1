'use strict';

class Model {
  #player;
  #monster;
  #location;
  #map;
  constructor () {  
    this.#player    = localStorage.getItem('player');
    this.#monster   = localStorage.getItem('monster');
    this.#location  = localStorage.getItem('location');
    this.#map       = localStorage.getItem('map');
  }

  get player () {
    return this.#player;
  }

  get monster () {
    return this.#monster;
  }

  get location () {
    return this.#location;
  }

  get map () {
    return this.#map;
  }

  set player (value) {
    this.#player = value;
  }

  set monster (value) {
    this.#monster = value;
  }

  set location (value) {
    this.#location = value;
  }

  set map (value) {
    this.#map = value;
  }

  updateDB () {
    localStorage.setItem('player',   this.#player);
    localStorage.setItem('monster',  this.#monster);
    localStorage.setItem('location', this.#location);
    localStorage.setItem('map',      this.#map);
  }
}