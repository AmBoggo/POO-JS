import User from "./user.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criaAula(materia, horas){
        return `nova materia ${materia} com ${horas} carga horária`
    }
}

const novoDocente = new Docente("Fla", "f@f.com", "2010-01-01")

// console.log(novoDocente.criaAula("objeto", "6h"))