var RoomManager = require('RoomManager');
var SpawnManager = require('SpawnManager');
var MemoryManager = require('MemoryManager');
var RouteFinder = require('RouteFinder');

var CreepMiner = require('CreepMiner');
var CreepHauler = require('CreepHauler');
var CreepUpgrader = require('CreepUpgrader');
var CreepBuilder = require('CreepBuilder');
var CreepRepairer = require('CreepRepairer');

module.exports.loop = function () {
    
    //uncomment this when resetting
    //RawMemory.set("{}");

    //first thing to do when spawn is placed
    if(Memory.creeps == undefined){
        RoomManager.init(Game.spawns['Spawn1'].room);
        RouteFinder.init(Game.spawns['Spawn1'].room);
    }

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            var role = Memory.creeps[name].role;
            if(role == 'miner'){
                RoomManager.freeSourceByCreep(Game.spawns['Spawn1'].room, name);
            }
            if(role == 'hauler'){
                RoomManager.freeSourceHaulerByCreep(Game.spawns['Spawn1'].room, name);
            }
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    SpawnManager.execute(Game.spawns['Spawn1']);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        if(creep.spawning){
            continue;
        }

        if(creep.memory.role == 'miner') {
            CreepMiner.execute(creep);
        }
        if(creep.memory.role == 'hauler') {
            CreepHauler.execute(creep);
        }
        if(creep.memory.role == 'upgrader'){
            CreepUpgrader.execute(creep);
        }
        if(creep.memory.role == 'builder'){
            CreepBuilder.execute(creep);
        }
        if(creep.memory.role == 'repairer'){
            CreepRepairer.execute(creep);
        }
    }



    var usedCpu = Game.cpu.getUsed();
    if(Memory.lowestCpu == undefined){
        Memory.lowestCpu = usedCpu;
    } else {
        if(usedCpu < Memory.lowestCpu){
            Memory.lowestCpu = usedCpu;
            console.log("New lowest cpu recorded!: " +  usedCpu);
        }
    }
    console.log("total: " + usedCpu);

}
