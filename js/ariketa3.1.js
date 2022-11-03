//Ariketa 1. Lortu 2014 ID duena.
fetch('competitions.json')
.then(
r => r.json())
.then(
data => {
console.log(data.competitions.filter(elem=> elem.id =='2014'))
}
)
 
//Ariketa 2.  Big5 ligak iragaztea izango da helburua. (Guztira 13)

fetch('competitions.json')
.then(
r => r.json())
.then(
data => {
console.log(data.competitions.filter(elem=> elem.plan =='TIER_ONE'))
}
)

//Ariketa 3. Coupe de la Ligue

fetch('competitions.json')
.then(
r => r.json())
.then(
data => {
console.log(data.competitions.filter(elem=> elem.name =='Coupe de la Ligue'))
}
)

//Ariketa 4-5   //5 elem agertzen dira bakarrik?
let a=[]

fetch('competitions.json')
.then(
r => r.json())
.then(
data => {
    console.log("Ariketa 4:")
a=data.competitions.filter(elem=> elem.area.code =='FRA'||elem.area.code =='ESP'||elem.area.code =='DEU'||elem.area.code =='ENG').filter(x=>x.plan =='TIER_ONE')
a.shift()
console.log(a)
}
)

//Ariketa 6
let b=[]
fetch('competitions.json')
.then(
r => r.json())
.then(
data => {
console.log("Ariketa 6:")
b=data.competitions.filter(elem=> elem.area.code =='FRA'||elem.area.code =='ESP'||elem.area.code =='DEU'||elem.area.code =='ENG').filter(x=>x.plan =='TIER_ONE')
b.shift()
console.log(b)
b.map(elem=> console.log(elem.id))
}
)

//-------------------------------------------------------------------