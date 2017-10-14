var events = require("events");

var eventEmiter = new events.EventEmitter();


var connectHandler = function connected (){
	console.log("connect sucess!");
	
	eventEmiter.emit("data_received");
}


eventEmiter.on('connection',connectHandler );

eventEmiter.on('data_received',function(){
console.log('data recevied suceess!')});

eventEmiter.emit('connection');

console.log('finished!')
