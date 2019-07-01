var RouteFinder = {

    //caches paths and builds roads
    init: function(room) {
        var sources = room.memory.sources;
        var spawnPos = room.memory.spawn.location;

        //place roads to controller
        var controllerPath = spawnPos.findPathTo(room.controller.pos.x,
                                                 room.controller.pos.y,
                                                 {range: 3});
        for(i = 0; i < controllerPath.length; i++){
            room.createConstructionSite(controllerPath[i].x, controllerPath[i].y, STRUCTURE_ROAD);
        }

        for(i = 0; i < sources.length; i++){
            var source = Game.getObjectById(sources[i].sourceId);
            var sourcePath = spawnPos.findPathTo(source.pos.x,
                                                 source.pos.y,
                                                 {range: 1});

            for(j = 0; j < sourcePath.length; j++){
                room.createConstructionSite(sourcePath[j].x, sourcePath[j].y, STRUCTURE_ROAD);
            }
        }


    },

    generatePath: function(startPosition, endPosition, room) {

        for(i = 0; i < room.memory.paths.length; i++){
            var path = room.memory.paths[i];
            if(path.startPosition.x == startPosition.x && path.startPosition.y == startPosition.y &&
               path.endPosition.x == endPosition.x && path.endPosition.y == endPosition.y){
                return;
            }
        }

      	room.memory.paths.push({
            startPosition: startPosition,
            endPosition: endPosition,
            path: startPosition.findPathTo(endPosition)
        });
        console.log("New path made");
    },

    findPath: function(startPosition, endPosition, room) {

        for(i = 0; i < room.memory.paths.length; i++){
            var path = room.memory.paths[i];
            if(path.startPosition.x == startPosition.x && path.startPosition.y == startPosition.y &&
               path.endPosition.x == endPosition.x && path.endPosition.y == endPosition.y){
                return room.memory.paths[i].path;
            }
        }

        return false;
    },

    reversePath: function(path){
        console.log("reversing: " + JSON.stringify(path));

        var newPath = "";

        for(i = 0; i < path.length; i++){

            //console.log("Old direction: " + newPath[i].direction);
            newPath = ((path[i] + 3)%8+1) + newPath;
            //console.log("New direction: " + newPath[i].direction);

        }

        console.log("new path: " + newPath);

        return newPath;
    }


};

module.exports = RouteFinder;
