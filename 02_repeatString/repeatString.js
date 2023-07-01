const repeatString = function(word, times) {
    
    if(times>=0){
        let result=""
        for (let i=0; i<times; i++)
        result += word;
        return result
    }else{
        return "ERROR";
    }
    if(times===number){
        const times = Math.floor(Math.random() * number)
    }
    if (word==""){
        return ""
    }
};


console.log(repeatString('hey', 3))

// Do not edit below this line
module.exports = repeatString;
