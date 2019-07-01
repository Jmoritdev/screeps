var CreepUpgrader = require('CreepUpgrader');
var ProcessManager = require('ProcessManager');
//TODO fix builder being stuck because move is not called and target is already built
var CreepBuilder = {

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
                var site = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
                if(site != null){
                    creep.memory.target = {id: site.id, pos: site.pos};
                } else {
                    CreepUpgrader.execute(creep);
                    return;
                }
            }

            if(ProcessManager.move(creep, creep.memory.target.pos, 2)){
                ProcessManager.build(creep, creep.memory.target.id);
                if(creep.carry.energy == 0){
                    delete creep.memory.target;
                }
            }
        }
    }

}

module.exports = CreepBuilder;
