let saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = (stringParam = "*") => {
    return (adjParam = "special") => {
        return `You are ${stringParam}${adjParam}${stringParam}!`
    }
}

const Calculator = {
    add: (num1, num2) => {return num1 + num2},
    subtract: (num1, num2) => {return num1 - num2},
    multiply: (num1, num2) => {return num1 * num2},
    divide: (num1, num2) => {return num1 / num2}
}

let actionApplyer = (num, functionsArray) => {
   functionsArray.forEach(func => {
       num = func(num)
   })
   return num
}