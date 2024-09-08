{/*
     Crie o seu primeiro componente.  Nomeie de acordo com sua preferência. Por exemplo, poderia ser FirstComponent.jsx. Neste componente, crie váriaveis que armazenem seu nome, seu sobrenome, sua matrícula, nome do Professor e nome da disciplina. Seu componente deve informar o seu nome completo com matrícula e o nome do professor com nome da disciplina.
 */}

import React from 'react'

const FirstComponents = () => 
{
     const nome = "Airton";
     const sobrenome = "Izaki";
     const matricula = "123456";
     const professor = "Felipe";
     const disciplina = "Construção de Front-End"

     return (
          <div>
               <h3>First Component</h3>
               <p>Meu nome é {nome} {sobrenome}, minha matrícula no IESB é {matricula} curos a disciplina de {disciplina} com professor {professor}</p>
          </div>
     )
}

export default FirstComponents