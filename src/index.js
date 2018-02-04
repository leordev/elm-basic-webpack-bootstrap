'use strict';

// Require index.html so it gets copied to dist
require('./index.html');

var Elm = require('./Main.elm');
var mountNode = document.getElementById('main');

// .embed() can take an optional second argument. This would be an object describing the data we need to start a program, i.e. a userID or some token
var app = Elm.Main.embed(mountNode);

// eos play

Eos = require('eosjs'); // Eos = require('./src')

// API, note: to use a local testnet, use Eos.Localnet()
let eos = Eos.Testnet();

// All API methods print help when called with no-arguments.
eos.getBlock();
