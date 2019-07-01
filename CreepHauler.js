var MemoryManager = require('MemoryManager');
var RoomManager = require('RoomManager');
var ProcessManager = require('ProcessManager');
var RouteFinder = require('RouteFinder');

var CreepUpgrader = require('CreepUpgrader');
var CreepBuilder = require('CreepBuilder');

var CreepHauler = {

    execute: function(creep){

        if(creep.carry.energy == 0){

            if(creep.memory.target == undefined){
                var pickupLocation = MemoryManager.getAssignedPickupLocation(creep);

                var energy = creep.room.lookForAt(LOOK_ENERGY, pickupLocation.x, pickupLocation.y)[0];
                if(energy != null){
                    creep.memory.target = {};
                    creep.memory.target.id = energy.id;
                    creep.memory.target.pos = energy.pos;
                } else {
                    return;
                }
            }

            if(ProcessManager.move(creep, creep.memory.target.pos, 1)){
                ProcessManager.pickup(creep, creep.memory.target.id);
                delete creep.memory.target;
            }

        } else {

            if(creep.memory.target == undefined){
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_TOWER ) && structure.energy < structure.energyCapacity;
                    }
                });

                if(targets == undefined || targets.length > 0){
                    creep.memory.target = {id: targets[0].id, pos: targets[0].pos};
                } else {
                    CreepBuilder.execute(creep);
                    return;
                }
            }

            if(ProcessManager.move(creep, creep.memory.target.pos, 1)){
                ProcessManager.transfer(creep, creep.memory.target.id);
                delete creep.memory.target;
            }

        }
    },
}

module.exports = CreepHauler;
