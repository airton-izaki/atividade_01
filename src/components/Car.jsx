import React from 'react'

const Car = ({nome, marca, ano, preco}) =>
{
     return     (
          <div>
               Nome: {nome} - Marca: {marca} - Ano: {ano} - Preço: R$ {preco}
          </div>
     )
}

export default Car


