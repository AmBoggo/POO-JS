import User from "./user.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";


const novoUser = new User('João', "j@emal.com", "2002-02-02")
// console.log(novoUser.exibirInfo())

const novoAdmin = new Admin('Sergio', "s@emal.com", "2002-02-02")
// console.log(novoAdmin.nome)
novoAdmin.nome = "Ana"
// console.log(novoAdmin.nome)
console.log(novoAdmin.exibirInfo())
console.log(novoUser.exibirInfo())