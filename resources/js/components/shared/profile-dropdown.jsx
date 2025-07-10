import React from 'react'
import { Link } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const ProfileDropdown = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className='lg:hidden px-5 outline-none'>Menu</DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white space-y-1 pb-3 flex flex-col">
                    <DropdownMenuLabel>Menu</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href={"/profile"}><DropdownMenuItem>Profil</DropdownMenuItem></Link>
                    <Link href={"/history-order"}><DropdownMenuItem>Buyurtmalar</DropdownMenuItem></Link>
                    <Link href={"/address"}><DropdownMenuItem>Manzil</DropdownMenuItem></Link>
                    <Link href={"/address-add"}><DropdownMenuItem>Manzil qo'shish</DropdownMenuItem></Link>
                    <Link href={"/edit-password"}><DropdownMenuItem>Parol</DropdownMenuItem></Link>
                    <Link href={"/"}><DropdownMenuItem>Chiqish</DropdownMenuItem></Link>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default ProfileDropdown
