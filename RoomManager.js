var RoomManager = {

    init: function(room){

        var sources = room.find(FIND_SOURCES);

        room.memory.sources = new Array();
        for (i = 0; i < sources.length; i++) {
            room.memory.sources[i] = {sourceId: sources[i].id,
                                      minerName: 'unoccupied',
                                      haulerName: 'none',
                                      pickupLocation: 'none'};
        }

        var spawn = room.find(FIND_MY_STRUCTURES, {
            filter: { structureType: STRUCTURE_SPAWN }
        })[0];

        room.memory.spawn = {id: spawn.id, location: spawn.pos};
    },

    getSources: function(room){
        return room.memory.sources;
    },

    occupySource: function(room, sourceId, minerName){
        for(i = 0; i < room.memory.sources.length; i++){
            if(sourceId == room.memory.sources[i].sourceId){
                room.memory.sources[i].minerName = minerName;
            }
        }
    },

    freeSource: function(room, sourceId){
        for(i = 0; i < room.memory.sources.length; i++){
            if(sourceId == room.memory.sources[i].sourceId){
                room.memory.sources[i].minerName = 'unoccupied';
            }
        }
        console.log("Energy resource freed");
    },

    freeSourceByCreep: function(room, minerName){
        for(i = 0; i < room.memory.sources.length; i++){
            if(minerName == room.memory.sources[i].minerName){
                room.memory.sources[i].minerName = 'unoccupied';
                console.log("Energy resource freed");
            }
        }
    },

    freeSourceHaulerByCreep: function(room, haulerName){
        for(i = 0; i < room.memory.sources.length; i++){
            if(room.memory.sources[i].haulerName == haulerName){
                room.memory.sources[i].haulerName = 'none';
                console.log("Hauler source freed");
            }
        }
    },

    placeRoad: function(room, position){
        var stuffAtPosition = room.lookAt(position);
        for(i = 0; i < stuffAtPosition.length; i++){
            if(stuffAtPosition[i].type != LOOK_TERRAIN && stuffAtPosition[i].type != LOOK_CREEPS){
                return;
            }
        }
        console.log('Placing road construction site at: ' + position)
        room.createConstructionSite(position, STRUCTURE_ROAD);
    }

}

module.exports = RoomManager;
