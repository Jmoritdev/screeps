
var ProcessManager = {

    move: function(creep, destination, range = 0){

        if(range > 0){
            //console.log(creep.name + ": checking");
            if(creep.pos.inRangeTo(destination, range)){
                delete creep.memory.path;
                return true;
            }
        } else {
            if(creep.pos == destination){
                delete creep.memory.path;
                return true;
            }
        }

        if(creep.memory.path == undefined){
            //console.log(creep.name + ": Calculating path");
            console.log(creep.name + " Calculating new path");
            creep.memory.path = { startPos:creep.pos, path:creep.pos.findPathTo(destination.x,
                                                                                destination.y,
                                                                                {serialize: true, plainCost: 2, range: range})};
        }

        //recalculate if not found
        if(creep.moveByPath(creep.memory.path.path) == ERR_NOT_FOUND){
            delete creep.memory.path;
        }

        if(creep.memory.posHistory == undefined){
            creep.memory.posHistory = Array();
        } else {
            creep.memory.posHistory.unshift(creep.pos);

            if(creep.memory.posHistory.length == 4){
                //console.log("popping");
                creep.memory.posHistory.pop();

                //check if creep is stuck
                if(creep.memory.posHistory[0].x == creep.memory.posHistory[1].x && creep.memory.posHistory[0].y == creep.memory.posHistory[1].y &&
                            creep.memory.posHistory[1].x == creep.memory.posHistory[2].x && creep.memory.posHistory[1].y == creep.memory.posHistory[2].y){
                    //force new path generation
                    console.log(creep.name + " is stuck, generating new path");
                    //console.log(creep.memory.posHistory[0].pos + " " + creep.memory.posHistory[1].pos);
                    delete creep.memory.posHistory;
                    delete creep.memory.path;
                    delete creep.memory.target;
                }
            }
        }

        return false;
    },

    pickup: function(creep, targetId){
        var target = Game.getObjectById(targetId);
        if(target != null){
            if(creep.pickup(target) == OK){
                return true;
            }
        }
        return false;
    },

    transfer: function(creep, targetId){
        var target = Game.getObjectById(targetId);
        if(target != null){
            if(creep.transfer(target, RESOURCE_ENERGY) == OK){
                return true;
            }
        }
        return false;
    },

    upgradeController: function(creep, controller){
        if(creep.upgradeController(controller) == OK){
            return true;
        }
        return false;
    },

    build: function(creep, targetId){
        var target = Game.getObjectById(targetId);
        if(target != null){
            if(creep.build(target) == OK){
                return true;
            }
        }
        return false;
    },

    repair: function(creep, targetId){
        var target = Game.getObjectById(targetId);
        if(target != null){
            //console.log("Repairer has energy");
            if(creep.repair(target) == OK){
                //console.log("Repairing");
                if(target.hits == target.hitsMax){
                    delete creep.memory.target;
                }
                return true;
            }
        }
        return false;
    }
}

module.exports = ProcessManager;
