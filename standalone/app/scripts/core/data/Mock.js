'use strict';

(function(window, naddoddr, undefined){
    naddoddr.Mock = {};
    naddoddr.Mock.Adventure = {};
    naddoddr.Mock.Adventure.basic = {
        '_id': 1,
        'name': 'La Antilla',
        'description': 'Primer Baño de Duna en el Mar'
    };

    naddoddr.Mock.Adventure.adventures = [
        naddoddr.Mock.Adventure.basic
    ];

    naddoddr.Mock.Adventure.findAll = function(){
        return naddoddr.Mock.Adventure.adventures;
    }

    naddoddr.Mock.Adventure.findById = function(id){
        var adventures = naddoddr.Mock.Adventure.adventures;
        for(var index in adventures){
            if(adventures[index]._id == id){
                return adventures[index];
            }
        }
        return false;
    }

    naddoddr.Mock.Adventure.parseObject = function(object) {
        return new naddoddr.Adventure(object);
    }

})(window, naddoddr);