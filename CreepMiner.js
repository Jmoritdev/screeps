var MemoryManager = require('MemoryManager');
var ProcessManager = require('ProcessManager');

var CreepMiner = {

    execute: function(creep){
        var source = Game.getObjectById(MemoryManager.getAssignedSourceId(creep));

        switch(creep.harvest(source)){
            case ERR_NOT_IN_RANGE:
                ProcessManager.move(creep, source.pos, 1);
                MemoryManager.updatePickupLocation(creep);
                break;
            case OK:
                MemoryManager.updatePickupLocation(creep);
                delete creep.memory.path;
                break;
        }
    }

}


module.exports = CreepMiner;
