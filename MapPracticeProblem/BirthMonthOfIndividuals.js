let birthMonthOfIndividuals = new Map();
for(let person = 1; person<=50 ; person++)
{
    let birthMonth = (Math.floor(Math.random() * 100) % 12) + 1;
    birthMonthOfIndividuals.set(person, birthMonth);
}
for(let month = 1; month <= 12; month++)
{
    let sameMonth = [...birthMonthOfIndividuals.entries()].filter(([a,b]) => b == month).map(([c,d]) => c);
    console.log("Individuals having birthdays in the same month " + month);
    console.log(sameMonth);
}