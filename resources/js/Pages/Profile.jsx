import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { BiUser } from "react-icons/bi";
import { RiUserSettingsLine, RiLogoutBoxRLine } from "react-icons/ri";
import { RxHamburgerMenu, RxLockOpen2 } from "react-icons/rx";
import { VscChecklist, VscLocation } from "react-icons/vsc";
import { GrMapLocation } from "react-icons/gr";
import { ImStarEmpty } from "react-icons/im";


const Profile = () => {
    const handleLogOut = () => {
        router.post("/logout");
    }
    return (
        <div className='my-24 px-5 xl:px-32'>
            <Link href={"/"}><h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Profile</h1></Link>
            <div className='grid lg:grid-cols-4 gap-5'>
                <div className='border rounded-md max-w-xs p-5 my-5 space-y-3 text-xl hidden lg:block'>
                    <Link href={"/profile"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full font-extrabold' style={{ fontFamily: "OswaldLight", font: "bold" }}>
                        <BiUser />
                        <span>Profil</span>
                    </Link>
                    <Link href={"/profile-edit"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiUserSettingsLine />
                        <span>Profilni tahrirlash</span>
                    </Link>
                    <Link href={"/history-order"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxHamburgerMenu />
                        <span>Tarix</span>
                    </Link>
                    <Link href={"/address"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <VscLocation />
                        <span>Joylashuv</span>
                    </Link>
                    <Link href={"/edit-password"} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RxLockOpen2 />
                        <span>Parol</span>
                    </Link>
                    <button onClick={handleLogOut} className='flex items-center gap-3 hover:bg-black hover:text-white duration-500 rounded-lg p-2 w-full text-slate-400' style={{ fontFamily: "OswaldLight", font: "extra bold" }}>
                        <RiLogoutBoxRLine />
                        <span>Chiqish</span>
                    </button>
                </div>
                <div className='col-span-4 lg:col-span-3 my-3'>
                    <h2 style={{ fontFamily: 'Oswald', fontSize: "32px" }}>Salom, Mehmon!</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-center p-5 gap-5'>
                        <Link href={"/profile"} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><BiUser /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Mening profilim</p>
                        </Link>
                        <Link href={"/history-order"} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><VscChecklist /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Buyurtmalar</p>
                        </Link>
                        <Link href={"/address"} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><VscLocation /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Bizning manzil</p>
                        </Link>
                        <Link href={"/edit-profile"} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><RiUserSettingsLine /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Profilni tahrirlash</p>
                        </Link>
                        <Link href={"/"} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><ImStarEmpty /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Tanlangan mahsulotlar</p>
                        </Link>
                        <Link href={"/edit-address"} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg lg:hidden'>
                            <p className='flex justify-center text-3xl'><GrMapLocation /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Joylashuvni tahrirlash</p>
                        </Link>
                        <Link href={"/edit-password"} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg lg:hidden'>
                            <p className='flex justify-center text-3xl'><RxLockOpen2 /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Parol</p>
                        </Link>
                        <button onClick={handleLogOut} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><RiLogoutBoxRLine /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Chiqish</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
