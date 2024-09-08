{/*
     Crie outro componente que contenha um array com 5 objetos, cada objeto deve possuir pelo menos 3 atributos.
 */}

import React from 'react'

const SecondComponents = () => 
{
     const carros = 
     [
          {id: "1", nome: "Civic", marca: "Honda", ano: 2020, preco: 100000},
          {id: "2", nome: "Fit", marca: "Honda", ano: 2021, preco: 85000},
          {id: "3", nome: "Corolla", marca: "Toyota", ano: 2000, preco: 110000},
          {id: "4", nome: "Eclipse Cross", marca: "Mitsubishi", ano: 2024, preco: 154000},
          {id: "5", nome: "Corsa", marca: "Chevrolet", ano: 2020, preco: 58700},
     ]

  return (
    <div>    
          <h3>Second components</h3>
          <h4>Lista de carros</h4>
          <p>
               {
                    carros.map
                    (
                         (carro) => 
                         (
                              <p key = {carro.id}>
                                   Nome: {carro.nome} -
                                   Marca: {carro.marca} -
                                   Ano: {carro.ano} -
                                   Preço: R$ {carro.preco}
                              </p>
                         )
                    )
               }
          </p>


          <h4>lista ordenada de carros</h4>
          <ol>
               {
                    carros.map
                    (
                         (carro) =>
                         (
                              <li>
                                   Nome: {carro.nome} -
                                   Marca: {carro.marca} -
                                   Ano: {carro.ano} -
                                   Preço: R$ {carro.preco}
                              </li>
                         )
                    )
               }
          </ol>
          
          

          


     </div>
  )
}

export default SecondComponents
