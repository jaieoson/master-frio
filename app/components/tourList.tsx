/* eslint-disable react/no-children-prop */
import React from 'react';
import Image from 'next/image';
import BlueButton from './botao';

const toursData = [
  {
    id: 1,
    title: 'Passeio na Lagoa',
    description: 'Navegue pelas águas serenas da Lagoa Mundaú, uma experiência única em Alagoas. 🚤✨.',
    imageUrl: '/ar-condicionado.webp',
  },
  {
    id: 2,
    title: 'Limpeza',
    description: 'Da serenidade da Lagoa Mundaú à beleza intocada da Prainha: seu passeio dos sonhos. 🏞️🚤',
    imageUrl: '/refrigeracao.jpg',
  },
  {
    id: 3,
    title: 'Manutenção',
    description: 'Explore a exuberância da Lagoa Mundaú à agitação da Praia do Francês. Uma jornada inesquecível. 🏝️🚤',
    imageUrl: '/refri02.jfif',
  },
];

const ToursList = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center">
      {toursData.map((tour) => (
        <div
          key={tour.id}
          className="w-full md:w-1/2 lg:w-1/3 p-4"
        >
          <div className="bg-white rounded-md overflow-hidden shadow-lg">
            <Image width={300} height={350}
              src={tour.imageUrl}
              alt={tour.title}
              className="w-full h-62 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{tour.title}</h2>
              <p className="text-gray-600">{tour.description}</p>
              <br></br><br></br>
              <BlueButton onClick={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
                throw new Error('Function not implemented.');
              } } children={'undefined'}/>
            </div>
          </div>
        </div>
      ))}

    <iframe src="https://calendly.com/boreste/30min"  width="100%" height="1000" frameBorder="0" scrolling="no"></iframe>
    </div>
  );
};

export default ToursList;
