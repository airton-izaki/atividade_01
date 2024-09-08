import React from 'react'

const ThirdComponents = () =>
{
     const carros = [
          { id: "1", nome: "Civic", marca: "Honda", ano: 2020, preco: 100000 },
          { id: "2", nome: "Fit", marca: "Honda", ano: 2021, preco: 85000 }, // Corrigido 'preço' para 'preco'
          { id: "3", nome: "Argo", marca: "Fiat", ano: 2024, preco: 90000 },
          { id: "4", nome: "Eclipse Cross", marca: "Mitsubishi", ano: 2024, preco: 154000 },
          { id: "5", nome: "Corsa", marca: "Chevrolet", ano: 2020, preco: 58700 },
        ];
      
        // Ordenando o array por nome em ordem alfabética
        const carrosOrdenados = carros.sort((a, b) => a.nome.localeCompare(b.nome));
      
        return (
          <div>
            <h4>Lista em ordem alfabética por nome</h4>
            
              {
                    carrosOrdenados.map
                    (
                         (carro) => 
                         (
                              <p>
                                   Nome: {carro.nome} - 
                                   Marca: {carro.marca} - 
                                   Ano: {carro.ano} - 
                                   Preço: R$ {carro.preco}
                              </p>
                         )
                    )
               }

          

          
          </div>
        );
      };

export default ThirdComponents