'use strict';

var result = require('./res');
var request = require ('request');
const e = require('express');
// const fetch = require('node-fetch');

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.findUsers = function(req, res) {
    var meta_id = req.params.meta_id;
    var uri = "https://raw.githubusercontent.com/codev911/learn-nft/main/metadata/"+meta_id+".json";
    var notMinter = {
        "name": "NULL",
        "description": "",
        "image": "https://avatars.githubusercontent.com/u/53482087?v=4",
        "attributes": []
    }
    request ({
        url: uri,
        json: true
    }, (error, response, body) => {
        if(body !== '404: Not Found' && !error){
            result.ok(body, res);
        }else{
            result.ok(notMinter, res);
        }
    })
};
