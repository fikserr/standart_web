import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

import LogoFooter from '@images/LogoFooter.WebP'
import telegram from '@images/telegram.WebP'
import whatsapp from '@images/whatsapp.WebP'
import vk from '@images/vk.WebP'
import { Link } from '@inertiajs/react';

const Footer = () => {
  return (
    <footer className="bg-[rgb(18,18,20)] min-h-[320px]">
      {/* Mobile logo */}
      <div className="flex justify-center py-5 md:hidden">
        <img 
          src={LogoFooter} 
          alt="Logo" 
          loading="lazy" 
          width="150" 
          height="50" 
          className="w-[150px] h-auto"
        />
      </div>

      {/* Mobile dropdowns */}
      <div 
        
        className="md:hidden px-5 space-x-2 sm:space-x-4 flex justify-center font-oswald"
      >
        {/* Ma'lumot */}
        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden px-5 outline-none text-black rounded-md bg-white">
            Ma'lumot
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" sideOffset={5} className="absolute z-50 space-y-1 pb-3 flex flex-col">
            <DropdownMenuLabel>Ma'lumot</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link><DropdownMenuItem>Ma'lumot</DropdownMenuItem></Link>
            <Link><DropdownMenuItem>Blog</DropdownMenuItem></Link>
            <Link><DropdownMenuItem>Kontaktlar</DropdownMenuItem></Link>
            <Link><DropdownMenuItem>Yetkazib berish</DropdownMenuItem></Link>
            <Link><DropdownMenuItem>To'lov</DropdownMenuItem></Link>
            <Link><DropdownMenuItem>FAQ</DropdownMenuItem></Link>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Katalog */}
        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden px-5 outline-none text-black rounded-md bg-white">
            Katalog
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" sideOffset={5} className="absolute z-50 space-y-1 pb-3 flex flex-col">
            <DropdownMenuLabel>Katalog</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link><DropdownMenuItem>Katalog</DropdownMenuItem></Link>
            <Link href={"/category/3"}><DropdownMenuItem>Kiyimlar</DropdownMenuItem></Link>
            <Link href={"/category/4"}><DropdownMenuItem>Oyoq kiyimlar</DropdownMenuItem></Link>
            <Link href={"/category/1"}><DropdownMenuItem>Aksessuarlar</DropdownMenuItem></Link>
            <Link><DropdownMenuItem>Xarajatlarni hisoblash</DropdownMenuItem></Link>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Kontaktlar */}
        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden px-5 outline-none text-black rounded-md bg-white">
            Kontaktlar
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" sideOffset={5} className="absolute z-50 space-y-1 pb-3 flex flex-col">
            <DropdownMenuLabel>Kontaktlar</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link><DropdownMenuItem>Kontaktlar</DropdownMenuItem></Link>
            <Link><DropdownMenuItem>info@xwear.info</DropdownMenuItem></Link>
            <Link><DropdownMenuItem>+7 993 608 38 85</DropdownMenuItem></Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop footer */}
      <div className="hidden md:block py-10">
        <div className="flex justify-evenly">
          {/* Katalog */}
          <ul className="text-white flex flex-col gap-1 text-lg font-oswald">
            <li className="text-2xl">Katalog</li>
            <Link href={'/category/3'}><li>Kiyimlar</li></Link>
            <Link href={'/category/4'}><li>Oyoq kiyimlar</li></Link>
            <Link href={'/category/1'}><li>Aksessuarlar</li></Link>
          </ul>

          {/* Ma'lumot */}
          <ul className="text-white flex flex-col gap-1 text-lg font-oswald" >
            <li className="text-2xl">Ma'lumot</li>
            <li>Blog</li>
            <li>Kontaktlar</li>
            <li>Yetkazib berish</li>
            <li>To'lov</li>
            <li>FAQ</li>
          </ul>

          {/* Kontaktlar */}
          <ul className="text-white flex flex-col gap-1 text-lg font-oswald">
            <li className="text-2xl">Kontaktlar</li>
            <li>info@xwear.info</li>
            <li>+7 993 608 38 85</li>
            <li>Messengerlar</li>
            <li className="flex gap-1">
              <img src={telegram} alt="Telegram" width="40" height="40" className="w-10 h-10 cursor-pointer" loading="lazy" />
              <img src={whatsapp} alt="Whatsapp" width="40" height="40" className="w-10 h-10 cursor-pointer" loading="lazy" />
            </li>
            <li>Bizning ijtimoiy tarmoqlarimiz</li>
            <li>
              <img src={vk} alt="VK" width="40" height="40" className="w-10 h-10 cursor-pointer" loading="lazy" />
            </li>
          </ul>
        </div>
      </div>

      {/* Socials bottom */}
      <div>
        <div className="flex gap-2 justify-center py-5">
          <img src={telegram} alt="Telegram" width="30" height="30" className="w-[30px] h-[30px] cursor-pointer" loading="lazy" />
          <img src={whatsapp} alt="Whatsapp" width="30" height="30" className="w-[30px] h-[30px] cursor-pointer" loading="lazy" />
          <img src={vk} alt="VK" width="30" height="30" className="w-[30px] h-[30px] cursor-pointer" loading="lazy" />
        </div>
        <div className="text-white text-center">
          <p className='font-oswald'>Yangiliklarga obuna bo'ling</p>
          <p className="text-xs">Chegirmalar va yangiliklardan xabardor bo'ling</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
