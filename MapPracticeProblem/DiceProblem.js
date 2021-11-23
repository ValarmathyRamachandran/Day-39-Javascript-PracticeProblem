let dieRoll = new Map();
let flag = true;
while(flag) {
    let numOnDice = Math.floor(Math.random() * 6) + 1;
    if (dieRoll.has(numOnDice)) {
        let count = dieRoll.get(numOnDice);
        count++;
        dieRoll.set(numOnDice, count);
    }
    else {
        dieRoll.set(numOnDice, 1);
    }

    for (let key of dieRoll.keys()) {
        if(dieRoll.get(key) == 10) {
            flag = false;
            break;
        }
    }
}

let numAppearedMaxTimes;
let numAppearedLeast;
let minCountOfNum = 100;
console.log(dieRoll);
for (let [key, value] of dieRoll) {
    if(value == 10) {
        numAppearedMaxTimes = key;
    }
    
    if(value < minCountOfNum){
        minCountOfNum = value;
        numAppearedLeast = key;
    }
}
console.log("Number that appeared Maximum Times: " + numAppearedMaxTimes);
console.log("Number That appeared Least Times: " + numAppearedLeast);