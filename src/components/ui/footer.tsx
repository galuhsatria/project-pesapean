import Link from 'next/link';
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="primary-color text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between border-b border-white pb-10">
          <div>
            <p>Contact Person:</p>
          </div>
          <div>
            <p className="font-bold">Menu</p>
            <div className="flex flex-col gap-2 mt-3">
              <Link href={'/'}>Home</Link>
              <Link href={'/'}>Peta Interaktif</Link>
              <Link href={'/'}>Data Sapi</Link>
              <Link href={'/'}>Admin</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-3 mt-4 justify-center'>
        <Link href={'/'} className="">
          <Instagram className="bg-white p-1 rounded-full text-4xl text-orange-700" />
        </Link>
        <Link href={'/'} className="">
          <Facebook className="bg-white p-1 rounded-full text-4xl text-orange-700" />
        </Link>
        <Link href={'/'} className="">
          <Instagram className="bg-white p-1 rounded-full text-4xl text-orange-700" />
        </Link>
      </div>
    </footer>
  );
}
