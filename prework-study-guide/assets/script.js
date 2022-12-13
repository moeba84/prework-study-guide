var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic= topics[Math.floor( Math.random()*topics.length)];
function listTopics(){
for(var x=0; x <topics.length; x++){
    console.log (topics[x]);
}
}
function selectTopics (){

if (randomTopic==='HTML'){
    console.log("Let's Study HTML!");
} else if (randomTopic==='CSS'){
    console.log( "Let's Study Code!");
} else if (randomTopic==='Git'){
    console.log ("Let's Study Git!");
} else if (randomTopic==='JavaScript'){
console.log( "let's Study JavaScript!");
} else{console.log ('Please Try Again');
}
}
console.log('Here are the topics we learned through prework:');
listTopics ()
console.log('Which topic should we study first?');
selectTopics ()