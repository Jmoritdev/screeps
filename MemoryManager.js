var MemoryManager = {

    getAssignedSourceId:function(creep){

        for (i = 0; i < creep.room.memory.sources.length; i++) {
            if(creep.room.memory.sources[i].minerName == creep.name){
                return creep.room.memory.sources[i].sourceId;
            }
        }

        return "not found";
    },

    assignSource: function(creep){
        for (i = 0; i < creep.room.memory.sources.length; i++) {
            if(creep.room.memory.sources[i].minerName == 'unoccupied'){
                creep.room.memory.sources[i].minerName = creep.name;
                console.log("assigning source to: " + creep.name);
                return;
            }
        }
    },

    //Sets the location so the hauler knows where to pick up the resources
    updatePickupLocation: function(creep){
      for (i = 0; i < creep.room.memory.sources.length; i++) {
          if(creep.room.memory.sources[i].minerName == creep.name){
              creep.room.memory.sources[i].pickupLocation = creep.pos;
              return;
          }
      }
    },

    assignPickupLocation: function(creep){
      for (i = 0; i < creep.room.memory.sources.length; i++) {
          if(creep.room.memory.sources[i].pickupLocation != 'none' && creep.room.memory.sources[i].haulerName == 'none'){
              creep.room.memory.sources[i].haulerName = creep.name;
              console.log("assigning pickup location to: " + creep.name);
              return;
          }
      }
    },

    getAssignedPickupLocation: function(creep){
      for (i = 0; i < creep.room.memory.sources.length; i++) {
          if(creep.room.memory.sources[i].haulerName == creep.name){
              return creep.room.memory.sources[i].pickupLocation;
          }
      }
    }

}

module.exports = MemoryManager;
