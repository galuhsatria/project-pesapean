'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import { PiMapPinFill, PiCowFill } from 'react-icons/pi';
import { FaRoute } from 'react-icons/fa';

const MapCard = ({ isSelected, onClick, menu }: any) => {
  return (
    <div onClick={onClick} className={`border-orange-900 border-2 flex flex-col justify-center items-center p-4 rounded-lg gap-6 cursor-pointer ${isSelected ? 'bg-[#F3F368] bg-opacity-10' : 'bg-white'}`}>
      <div className="relative w-24 h-24">
        <Image src="/images/icon-bg.svg" alt="icon-bg" width={90} height={100} className="object-cover" />
        {menu.icon}
      </div>
      <p className="text-[#8B4513] font-bold text-2xl">{menu.name}</p>
      <Button className="primary-color rounded-full px-6">Detail</Button>
    </div>
  );
};

export default function Page() {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleSelectCard = (index: any) => {
    setSelectedCard(index);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-10 pt-28 max-w-6xl mx-auto">
        {menus.map((menu: any, index) => (
          <MapCard key={index} isSelected={selectedCard === index} onClick={() => handleSelectCard(index)} menu={menu} />
        ))}
      </div>
    </div>
  );
}

const menus = [
  {
    name: 'Peta',
    icon: <PiMapPinFill className="absolute inset-0 m-auto text-white text-5xl" />,
  },
  {
    name: 'Rute',
    icon: <FaRoute className="absolute inset-0 m-auto text-white text-5xl" />,
  },
  {
    name: 'Populasi',
    icon: <PiCowFill className="absolute inset-0 m-auto text-white text-5xl" />,
  },
];
