import React from 'react'
import Car from './Car'; // Importa o componente Carro

const ListCar = () => {
  const cars = [
    { id: "1", nome: "Civic", marca: "Honda", ano: 2020, preco: 100000 },
    { id: "2", nome: "Fit", marca: "Honda", ano: 2021, preco: 85000 },
    { id: "3", nome: "Corolla", marca: "Toyota", ano: 2000, preco: 110000 },
    { id: "4", nome: "Eclipse Cross", marca: "Mitsubishi", ano: 2024, preco: 154000 },
    { id: "5", nome: "Corsa", marca: "Chevrolet", ano: 2020, preco: 58700 },
  ];

  return (
    <div>
      <h4>Lista de Carros usando o componente "Car"</h4>
      <ul>
        {
          cars.map
          (
               (car) => 
               (
                    <Car
                         key={car.id}
                         nome={car.nome}
                         marca={car.marca}
                         ano={car.ano}
                         preco={car.preco}
                    />
               )
          )
        }
      </ul>
    </div>
  );
};

export default ListCar;
