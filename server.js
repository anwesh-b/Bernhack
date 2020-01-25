const discord = require('discord.js');
const client = new discord.Client();
const bot = "NjcwMzIxMDgyMDk5NTY0NTQ0.XivBDA.p1zSR_t8wigPr1_8OEnzvbRcxo4";

const fs = require('fs');

client.on("message",async msg=>{
    msghernefun(msg)
})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
} 

var arr = JSON.parse(fs.readFileSync('hawa.json'));
var isAnswered = true;
var answer;
var isPlaying = false;
var x = 0;
var temp;

async function msghernefun(msg){
    if(msg.content==='start'){
        if(isAnswered==false&&x!=0){
            console.log("Not answered")
            msg.channel.send("Answer the unsolved question");
            return;
        }
        isPlaying = true;
        var randomm = getRandomInt(52)
        console.log("Random Int = ",randomm);
        console.log("Array",arr[randomm-1].alphabet);
        answer=arr[randomm-1].alphabet;
        // const attach = './29.jpeg';
        // msg.channel.send(msg.author,randomm);
        
        
        var xD = "./img/"+randomm+".jpg"
        // msg.channel.send(xD);
        msg.channel.send({files:[
            xD
        ]});
        isAnswered = false;
        x++;
    }
    if(msg.content==='stop'){
        if(!isAnswered&&x==1){
            console.log("Please complete the game first");
            msg.channel.send("Answer the unsolved question");
            return;
        }
        console.log("Tank you for playing");
        msg.channel.send("Thank you for playing");
        x=0;
        // break;
    }

    if(msg.content.toUpperCase()==answer.toUpperCase()&&isAnswered==false){
        // if(msg.content.toUpperCase()==answer.toUpperCase()){
        
    console.log("Correct")
        msg.channel.send("Correct answer");
        isAnswered = true;
        isPlaying = true;
        temp = answer;
        var randomm = getRandomInt(52)
        console.log("Random Int = ",randomm);
        console.log("Array",arr[randomm-1].alphabet);
        answer=arr[randomm-1].alphabet;
        // const attach = './29.jpeg';
        // msg.channel.send(msg.author,randomm);
        
        
        var xD = "./img/"+randomm+".jpg"
        // msg.channel.send(xD);
        msg.channel.send({files:[
            xD
        ]});
        isAnswered = false;
        x++;
    }
    if(x!=0&&msg.content.toUpperCase()!=answer.toUpperCase()&&isAnswered==false){
        if(msg.author.id!="670321082099564544"&&msg.content.toUpperCase()!=temp.toUpperCase()&&msg.content!="start"){
            console.log(`Msg -> ${msg.content} <- End`)
            console.log(`Msg -> ${answer} <- End`)
            console.log("Game lai loop ma halna paryo")
            msg.channel.send("Wrong please try again")
        }
        
    }   

}


client.login(bot)
.then(console.log("Logged in discord"))

