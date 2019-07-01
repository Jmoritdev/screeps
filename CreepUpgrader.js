var ProcessManager = require('ProcessManager');

var CreepUpgrader = {

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

            if(ProcessManager.move(creep, creep.room.controller.pos, 3)){
                ProcessManager.upgradeController(creep, creep.room.controller);
            }

        }
    }
}

module.exports = CreepUpgrader;
