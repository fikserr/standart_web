import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import ProfileSidebar from '@/components/shared/profile-sidebar';
import { BiUser } from "react-icons/bi";
import { RiUserSettingsLine, RiLogoutBoxRLine } from "react-icons/ri";
import { RxLockOpen2 } from "react-icons/rx";
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
                <ProfileSidebar />
                <div className='col-span-3 lg:col-span-3 my-3'>
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
                        <Link href={"/favorites"} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><ImStarEmpty /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Tanlangan mahsulotlar</p>
                        </Link>
                        <Link href={"/address"} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><VscLocation /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Bizning manzil</p>
                        </Link>
                        <Link href={"/edit-password"} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg'>
                            <p className='flex justify-center text-3xl'><RxLockOpen2 /></p>
                            <p style={{ fontFamily: 'OswaldLight' }}>Parol</p>
                        </Link>
                        <button onClick={handleLogOut} className='border text-center p-10 max-w-xs hover:bg-black hover:text-white duration-500 rounded-lg '>
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
