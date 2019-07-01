var MemoryManager = require('MemoryManager');
var RoomManager = require('RoomManager');

var SpawnManager = {

    execute: function(spawn){

        switch(spawn.room.controller.level){
            case 1:
                this.spawnController1(spawn);
                break;
            case 2:
                this.spawnController2(spawn);
                break;
            case 3:
                this.spawnController3(spawn);
                break;
            case 4:
                this.spawnController4(spawn);
                break;
            case 5:
                this.spawnController5(spawn);
                break;
        }

    },

    spawnController1: function(spawn){

        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        var haulers = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log(miners);
        if(haulers.length < miners.length){
            // console.log("haulers: " + haulers.length);
            // console.log("miners: " + miners.length);
            var newName = 'Hauler' + Game.time;

            if(this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'hauler'}}, spawn)){
                //if it spawned
                MemoryManager.assignPickupLocation(Game.creeps[newName]);
            }
        } else if(miners.length < RoomManager.getSources(spawn.room).length && !spawn.spawning){
            var newName = 'Miner' + Game.time;

            if(this.spawnCreepWrapper([WORK,MOVE], newName, {memory: {role: 'miner'}}, spawn)){
                //if it spawned
                MemoryManager.assignSource(Game.creeps[newName]);
            }
        } else if(upgraders.length < 1){
            var newName = 'Upgrader' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'upgrader'}}, spawn);
        }



    },

    spawnController2: function(spawn){
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        var haulers = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
        

        if(haulers.length < miners.length){
            // console.log("haulers: " + haulers.length);
            // console.log("miners: " + miners.length);
            var newName = 'Hauler' + Game.time;

            if(this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'hauler'}}, spawn)){
                //if it spawned
                MemoryManager.assignPickupLocation(Game.creeps[newName]);
            }
        } else if(miners.length < RoomManager.getSources(spawn.room).length && !spawn.spawning){
            var newName = 'Miner' + Game.time;

            if(this.spawnCreepWrapper([WORK,MOVE], newName, {memory: {role: 'miner'}}, spawn)){
                //if it spawned
                MemoryManager.assignSource(Game.creeps[newName]);
            }
        } else if(upgraders.length < 1){
            var newName = 'Upgrader' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'upgrader'}}, spawn);
        } else if(builders.length < 1){
            var newName = 'Builder' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'builder'}}, spawn);
        } else if(repairers.length < 1){
            var newName = 'Repairer' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'repairer'}}, spawn);
        } 
    },

    spawnController3: function(spawn){

        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        var haulers = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

        if(haulers.length < miners.length){
            // console.log("haulers: " + haulers.length);
            // console.log("miners: " + miners.length);
            var newName = 'Hauler' + Game.time;

            if(this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'hauler'}}, spawn)){
                //if it spawned
                MemoryManager.assignPickupLocation(Game.creeps[newName]);
            }
        } else if(miners.length < RoomManager.getSources(spawn.room).length && !spawn.spawning){
            var newName = 'Miner' + Game.time;

            if(this.spawnCreepWrapper([WORK,MOVE], newName, {memory: {role: 'miner'}}, spawn)){
                //if it spawned
                MemoryManager.assignSource(Game.creeps[newName]);
            }
        } else if(upgraders.length < 1){
            var newName = 'Upgrader' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'upgrader'}}, spawn);
        } else if(builders.length < 1){
            var newName = 'Builder' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'builder'}}, spawn);
        } else if(repairers.length < 1){
            var newName = 'Repairer' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'repairer'}}, spawn);
        }
    },

    spawnController4: function(spawn){

        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        var haulers = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

        if(haulers.length < miners.length){
            // console.log("haulers: " + haulers.length);
            // console.log("miners: " + miners.length);
            var newName = 'Hauler' + Game.time;

            if(this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'hauler'}}, spawn)){
                //if it spawned
                MemoryManager.assignPickupLocation(Game.creeps[newName]);
            }
        } else if(miners.length < RoomManager.getSources(spawn.room).length && !spawn.spawning){
            var newName = 'Miner' + Game.time;

            if(this.spawnCreepWrapper([WORK,MOVE], newName, {memory: {role: 'miner'}}, spawn)){
                //if it spawned
                MemoryManager.assignSource(Game.creeps[newName]);
            }
        } else if(upgraders.length < 1){
            var newName = 'Upgrader' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'upgrader'}}, spawn);
        } else if(builders.length < 1){
            var newName = 'Builder' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'builder'}}, spawn);
        } else if(repairers.length < 1){
            var newName = 'Repairer' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'repairer'}}, spawn);
        }
    },
    
    spawnController5: function(spawn){

        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        var haulers = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

        if(haulers.length < miners.length){
            // console.log("haulers: " + haulers.length);
            // console.log("miners: " + miners.length);
            var newName = 'Hauler' + Game.time;

            if(this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'hauler'}}, spawn)){
                //if it spawned
                MemoryManager.assignPickupLocation(Game.creeps[newName]);
            }
        } else if(miners.length < RoomManager.getSources(spawn.room).length && !spawn.spawning){
            var newName = 'Miner' + Game.time;

            if(this.spawnCreepWrapper([WORK,MOVE], newName, {memory: {role: 'miner'}}, spawn)){
                //if it spawned
                MemoryManager.assignSource(Game.creeps[newName]);
            }
        } else if(upgraders.length < 1){
            var newName = 'Upgrader' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'upgrader'}}, spawn);
        } else if(builders.length < 1){
            var newName = 'Builder' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'builder'}}, spawn);
        } else if(repairers.length < 1){
            var newName = 'Repairer' + Game.time;
            this.spawnCreepWrapper([WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'repairer'}}, spawn);
        }
    },

    spawnCreepWrapper: function(body, name, memory, spawn){
        switch(spawn.spawnCreep(this.getMaxCreepBody(body, spawn.room, memory), name, memory)){
            case OK:
                console.log('Spawning new creep: ' + name);
                return 1;
            case ERR_NOT_OWNER:
                console.log("You are not the owner of " + spawn + " which you are trying to spawn with.");
                return 0;
            case ERR_NAME_EXISTS:
                console.log("The name of this creep already exists!");
                return 0;
            case ERR_BUSY:
                //console.log("Spawner is busy.");
                return 0;
            case ERR_NOT_ENOUGH_ENERGY:
                //console.log("Not enough energy");
                return 0;
            case ERR_INVALID_ARGS:
                console.log("Something is wrong with the body of the creep you are trying to spawn, or there was no name provided.");
                return 0;
            case ERR_RCL_NOT_ENOUGH:
                console.log("Your RCL level is not high enough to spawn this creep.");
                return 0;
        }
    },

    getMaxCreepBody: function(body, room, memory){

        var bodyCost = body.reduce(function (cost, part) {
            return cost + BODYPART_COST[part];
        }, 0);

        var bodySize = Math.trunc(room.energyAvailable / bodyCost);

        if(memory.role == "miner" && bodySize > 5){
            bodySize = 5;
        }

        var newBody = [];

        for(var x = 0; x < bodySize; x++){
            newBody.push.apply(newBody, body);
        }

        return newBody;
    }
}

module.exports = SpawnManager;
