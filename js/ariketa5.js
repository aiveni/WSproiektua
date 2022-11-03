fetch('premiere.json')
.then(r => r.json())
.then(data => {
console.log(data.teams.filter(x=>x.name == 'Arsenal FC'))//Taldea lortzeko.

console.log(data.teams.filter(x=>x.name == 'Arsenal FC').map(a=> {return a.squad.map(b=>{return b.name})}))//Taldearen joaklariak lortzeko.

let lehenengoJokalari=data.teams.filter(x=>x.name == 'Arsenal FC').map(a=>{return a.squad[0]})//Lehenengo jokalariaren datuak lortzeko.
console.log(lehenengoJokalari)

console.log(data.teams)//5.1 atributu berriak sartu


})
