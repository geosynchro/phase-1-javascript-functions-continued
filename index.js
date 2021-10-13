// Your code here

function saturdayFun(input = "roller-skate"){
    return `This Saturday, I want to ${input}!`
}

function mondayWork(action = "go to the office"){
    return `This Monday, I will ${action}.`
}


function wrapAdjective(emphatic = "*"){
    const you = "You are"
    return function(text){
        return `${you} ${emphatic}${text}${emphatic}!`;
    };
}

console.log(wrapAdjective()("a hard worker"))