import React from 'react'
import { Link, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { BiUser } from "react-icons/bi";
import { RiUserSettingsLine, RiLogoutBoxRLine } from "react-icons/ri";
import { RxHamburgerMenu, RxLockOpen2 } from "react-icons/rx";
import { VscLocation } from "react-icons/vsc";

const ProfileSidebar = () => {
    const { url } = usePage();
    const isActive = (path) => url === path;

    const handleLogOut = () => {
        router.post("/logout");
    }
    const linkStyle = (path) =>
        `flex items-center gap-3 duration-300 rounded-lg p-2 w-full font-medium ${isActive(path)
            ? 'bg-black text-white font-bold'
            : 'text-slate-400 hover:bg-black hover:text-white'
        }`;
    return (
        <div>
            <div className='border rounded-md max-w-xs p-5 my-5 space-y-3 text-xl hidden lg:block'>
                <Link href={"/profile"} className={linkStyle("/profile")} style={{ fontFamily: "OswaldLight", font: "bold" }}>
                    <BiUser />
                    <span>Profil</span>
                </Link>
                <Link href={"/profile-edit"} className={linkStyle("/profile-edit")}  style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                    <RiUserSettingsLine />
                    <span>Profilni tahrirlash</span>
                </Link>
                <Link href={"/history-order"} className={linkStyle("/history-order")} style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                    <RxHamburgerMenu />
                    <span>Tarix</span>
                </Link>
                <Link href={"/address"} className={linkStyle('/address')} style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                    <VscLocation />
                    <span>Joylashuv</span>
                </Link>
                <Link href={"/edit-password"} className={linkStyle('/edit-password')} style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                    <RxLockOpen2 />
                    <span>Parol</span>
                </Link>
                <button onClick={handleLogOut} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                    <RiLogoutBoxRLine />
                    <span>Chiqish</span>
                </button>
            </div>
        </div>
    )
}

export default ProfileSidebar
