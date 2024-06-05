// let user = {
//     name: "mustafa",
//     age: 24,
//     univ: "KFS",
//     lastName: "amen",
//     gender: "male",
//     wife: {
//         name: "omnia",
//         age: 23,
//         child: {
//             child1: {
//                 name: "morad",
//                 age: 4,
//             },
//           child2:{
//             name:"layla",
//             age: 3,
//           }
//         }
//     }
// }
// console.log(user);
// let pizza = ["mafrom", " beef", "kreep ", "baneh", "estribs"]
// for (let i = 0; i < pizza.length; i++){
//     console.log(pizza[i]);
// }

let hamosha = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde,"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero,"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West,"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain,"
    },
    {
        quote: "“We accept the love we think we deserve.”",
        author: "― Stephen Chbosky,"
    },
    {
        quote: "“Without music, life would be a mistake.”",
        author: "― Friedrich Nietzsche,"
    },
]

let x = -1  //
function hamada( ){
    let random = Math.floor(Math.random() * hamosha.length)
    if (x==random) {
        random=Math.floor(Math.random() * hamosha.length)
    }
// console.log(random);
document.getElementById("quote").innerHTML= hamosha[random].quote
document.getElementById("author").innerHTML= hamosha[random].author
x=random
}





