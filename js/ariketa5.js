fetch('premier.json')
.then(r => r.json())
.then(data => {
console.log(data.teams.filter(x=>x.name == 'Arsenal FC'))//Taldea lortzeko.

let taldeJokalariak=data.teams.filter(x=>x.name == 'Arsenal FC').map(a=> {return a.squad.map(b=>{return b.name})})//Taldearen joaklariak lortzeko.
console.log(taldeJokalariak)

let lehenengoJokalari=data.teams.filter(x=>x.name == 'Arsenal FC').map(a=>{return a.squad[0]})//Lehenengo jokalariaren datuak lortzeko.
console.log(lehenengoJokalari)

//5.1 atributu berriak sartu
let teamID= (data.teams.map(a=>{return a.id})) //teamId guztiak arrayan sartu
//console.log(teamID)
let leagueID=2021
//console.log(leagueID)

//data.teams[0].squad[0]+={"teamID":teamID[0]}

for(let i=0; i<teamID.length;i++){//20

   // for(let z=0; i<data.teams[i].squads.length;z++){//22
        //data.teams[i].squad[z]={}
    //}

}
})


//5.2 Atributu baten izena aldatu
fetch('premier.json')
.then(r => r.json())
.then(data => {
    let jsonString = JSON.stringify( data );

    jsonString = jsonString.split('"dateOfBirth":').join('"birthDate":');

    let json2 = JSON.parse(jsonString)
    
})

//5.3 Atributu baten balioak aldatu
fetch('premier.json')
.then(r => r.json())
.then(data => {
    let jsonString = JSON.stringify( data );

    jsonString = jsonString.split('"Offence"').join('"FW"');
    jsonString = jsonString.split('"Goalkeeper"').join('"GK"');
    jsonString = jsonString.split('"Midfield"').join('"MF"');
    jsonString = jsonString.split('"Defence"').join('"DF"');

    let json3 = JSON.parse(jsonString)
    console.log(json3)
})