var CreepUpgrader = require('CreepUpgrader');
var ProcessManager = require('ProcessManager');

var CreepRepairer = {

    execute: function(creep){

        if(creep.carry.energy == 0){
            if(creep.memory.target == undefined){
                var energy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
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

                var repairTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: object => object.hits < object.hitsMax && object.structureType != STRUCTURE_WALL && object.structureType != STRUCTURE_RAMPART
                });
                if(repairTarget != null){
                    creep.memory.target = {id: repairTarget.id, pos: repairTarget.pos};
                } else {
                    CreepUpgrader.execute(creep);
                    return;
                }

            }

            if(ProcessManager.move(creep, creep.memory.target.pos, 3)){
                //console.log(creep.memory.target.id);
                ProcessManager.repair(creep, creep.memory.target.id);

                if(creep.carry.energy == 0){
                    delete creep.memory.target;
                }
            }

        }
    }
}

module.exports = CreepRepairer;
