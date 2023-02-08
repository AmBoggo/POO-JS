import User from "./user.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    
    criarCurso(novoCurso, vagas){
        return `Criado o curso ${novoCurso} com ${vagas} vagas`
    }
    exibirInfo() {
        return `${this.nome}, ${this.role}`
    }
}

const novoAdmin = new Admin("Rod", "r@e.com", "2000-01-01")
// console.log(novoAdmin.criarCurso("Js", 20))