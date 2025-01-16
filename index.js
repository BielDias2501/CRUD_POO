// index.js
const { AlunoController } = require("./src/controllers/ControllerAluno");
const { Curso } = require("./src/models/Curso");

const alunos = new AlunoController()

alunos.listarAluno();

// alunos.adicionarAluno('Fulano','fulano@gmail,com','84999999999','a93214','enfermagem')
alunos.listarAluno();


alunos.editarAluno('a93214', 'Editado com coalesce',null,null,null)

alunos.excluirAluno('a93214')