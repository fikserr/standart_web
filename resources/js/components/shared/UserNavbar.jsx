import { useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import {
    HiOutlineMenuAlt4,
    HiOutlineSearch,
    HiOutlineShoppingBag,
} from 'react-icons/hi';
import { ImStarEmpty } from 'react-icons/im';
import { RiCloseLargeFill } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import Logo from '@images/Logo1.webp';

const UserNavbar = () => {
    const [searchInputVisible, setSearchInputVisible] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const { auth } = usePage().props;

    const toggleSearch = () => setSearchInputVisible(prev => !prev);
    const toggleMobileSearch = () => setIsMobileSearchOpen(prev => !prev);

    return (
        <div className="py-5 px-5 md:px-16 xl:px-20 fixed z-10 top-0 w-full bg-[rgb(18,18,20)]">
            <div className="flex items-center justify-around md:justify-between">
                <div className="flex items-center gap-5 md:hidden">
                    <div className="flex items-center gap-2 sm:gap-5 relative">
                        <HiOutlineMenuAlt4
                            style={{ color: 'white', fontSize: '32px', cursor: 'pointer' }}
                            onClick={() => setIsSidebarOpen(true)}
                        />
                        <HiOutlineSearch
                            style={{ color: 'white', fontSize: '25px' }}
                            onClick={toggleMobileSearch}
                        />
                        <div
                            className={`absolute top-14 left-0 transition-all duration-200 ease-in transform origin-top ${isMobileSearchOpen ? 'scale-y-100 opacity-100' : 'scale-y-10 opacity-0'
                                }`}
                        >
                            <div className="flex items-center px-3 py-1 rounded-2xl bg-gray-800">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-transparent text-white px-3 py-1 outline-none w-64"
                                />
                                <HiOutlineSearch
                                    style={{ color: 'white', fontSize: '25px', cursor: 'pointer' }}
                                    onClick={toggleMobileSearch}
                                />
                            </div>
                        </div> 
                    </div>
                </div>
                <div
                    className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 p-4 transform transition-transform duration-500 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex justify-between items-center">
                        <button onClick={() => setIsSidebarOpen(false)}>
                            <img src={Logo} alt="Logo" />
                        </button>
                        <button className="text-white text-xl" onClick={() => setIsSidebarOpen(false)}>
                            <RiCloseLargeFill />
                        </button>
                    </div>
                    <div className="space-y-2 mt-10">
                        <Link href={'/clothes'}><SidebarButton label="Kiyimlar" /></Link>
                        <Link href={'/shoes'}><SidebarButton label="Oyoq kiyimlar" /></Link>
                        <Link href={'/accessory'}><SidebarButton label="Aksesuarlar" /></Link>
                        <Link href={'/policy'}><SidebarButton label="Ma'lumot"/></Link>
                        <Link href={'/profile'}><SidebarButton label="Profile" /></Link>
                        <Link href={'/favorites'}><SidebarButton label="Favorites" /></Link>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <HiOutlineMenuAlt4
                        className="hidden md:block xl:hidden"
                        style={{ color: 'white', fontSize: '32px', cursor: 'pointer' }}
                        onClick={() => setIsSidebarOpen(true)}
                    />
                    <Link href="/">
                        <img src={Logo} alt="Company Logo" />
                    </Link>
                </div>
                <div className="w-4/6 hidden xl:flex justify-start">
                    <ul className="flex gap-5 2xl:gap-10 text-xl">
                        <NavItem href="/clothes" label="Kiyimlar" />
                        <NavItem href="/shoes" label="Oyoq kiyimlar" />
                        <NavItem href="/accessory" label="Aksessuarlar" />
                        <NavItem href="/policy" label="Ma'lumot" />
                    </ul>
                </div>
                <div className="flex items-center gap-2 sm:gap-5 md:gap-6 relative">
                    <HiOutlineSearch
                        className="hidden md:block"
                        style={{ color: 'white', fontSize: '25px', cursor: 'pointer' }}
                        onClick={toggleSearch}
                    />
                    <Link href="/favorites" className='hidden md:block'>
                        <ImStarEmpty style={{ color: 'white', fontSize: '25px' }} />
                    </Link>
                    <Link href="/basket" className="text-white flex items-end">
                        <HiOutlineShoppingBag style={{ fontSize: '25px' }} />
                    </Link>
                    {auth.user ? (
                        <Link href="/profile" className='hidden md:block'>
                            <BiUser style={{ color: 'white', fontSize: '25px' }} />
                        </Link>
                    ) : (
                        <Link href="/login" className="text-white">
                            Login
                        </Link>
                    )}
                    <div
                        className={`absolute -inset-2top-0 right-[135px] transition-all duration-200 ease-in transform origin-top ${searchInputVisible ? 'scale-y-10 opacity-100' : 'scale-y-10 opacity-0'
                            }`}
                    >
                        <div className="md:flex items-center px-3 py-1 rounded-2xl bg-gray-800 hidden">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent text-white px-3 py-1 outline-none md:w-64 md992:w-80 xl:w-96"
                            />
                            <HiOutlineSearch
                                style={{ color: 'white', fontSize: '25px', cursor: 'pointer' }}
                                onClick={toggleSearch}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ href, label }) => (
    <li>
        <Link href={href} className="hover-underline text-white 2xl:text-xl">
            {label}
        </Link>
    </li>
);

const SidebarButton = ({ label }) => (
    <button className="w-full text-left hover:bg-slate-500 p-2 rounded-md duration-500">
        {label}
    </button>
);

export default UserNavbar;
