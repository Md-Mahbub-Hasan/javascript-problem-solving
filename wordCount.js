var speech = "I am a good person. I don't snore at night."

var count = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-i] != " "){
        count++;
    }
}
count++;
console.log(count);