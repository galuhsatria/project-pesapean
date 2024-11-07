import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import { PiUserCircleFill } from 'react-icons/pi';
import { Button } from './button';

export default function Navbar() {
  return (
    <header className="fixed w-full pt-6 mx-auto flex justify-center z-20 max-md:justify-end">
      <nav className="primary-color text-white py-2.5 px-10 w-max rounded-full max-md:bg-transparent">
        <div className="menu">
          <ul className="flex gap-10 max-md:hidden">
            {links.map((link, index: number) => (
              <Link href={link.link} key={index}>
                <li>{link.label}</li>
              </Link>
            ))}
            <Link href={'/'}>
              <li className="flex gap-2 items-center">
                <PiUserCircleFill className="text-xl" />
                Admin{' '}
              </li>
            </Link>
          </ul>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden max-md:primary-color">
                <AlignJustify />
              </Button>
            </SheetTrigger>
            <SheetContent className="primary-color text-white border-none">
              <ul className="flex flex-col gap-6">
                {links.map((link, index: number) => (
                  <SheetClose key={index} asChild>
                    <Link href={link.link}>
                      <li>{link.label}</li>
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href={'/'}>
                    <li className="flex gap-2 items-center">
                      <PiUserCircleFill className="text-xl" />
                      Admin{' '}
                    </li>
                  </Link>
                </SheetClose>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

const links = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Peta Intraktif',
    link: '/peta-intraktif',
  },
  {
    label: 'Data Sapi',
    link: '/',
  },
];
