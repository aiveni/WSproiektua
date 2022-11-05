//6.1 Ariketa

function differenceInDays(oinarria) {
    let gaurkoData = new Date();
    return(Math.floor((gaurkoData - oinarria)/ (1000 * 60 * 60 * 24))+1)
}

async function fetchJSON(file) {
    return await fetch(file).then(r => {
        return r.json();
    });
}


function getSolution(players, solutionArray, differenceInDays) {
    let id =solutionArray[(differenceInDays-1)%39].id
    player =players.filter(p => p.id == id)
    console.log(player[0])
    return player[0]

}
let index = differenceInDays(new Date("08-18-2022"))
console.log(index)

fetchJSON ('fullplayers.json').then(p =>{
    fetchJSON('solution.json').then(s=> {
        getSolution(p, s, index)
    })
})
