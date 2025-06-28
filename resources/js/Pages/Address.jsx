import { Link, router } from '@inertiajs/react';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BiSolidPencil, BiSolidTrash } from "react-icons/bi";
import ProfileSidebar from '@/components/shared/profile-sidebar';
import ProfileDropdown from '@/components/shared/profile-dropdown';
import { toast } from '@/hooks/use-toast'; // toast ishlatmoqchi bo‘lsang

const Address = ({ address }) => {
    // 💥 id parametrli function
    const handleDelete = (id) => {
        router.delete(`/address-delete/${id}`, {
            onSuccess: () => {
                toast({ title: "🗑️ O‘chirildi", description: "Manzil muvaffaqiyatli o‘chirildi." });
                router.visit('/address');
            },
            onError: () => {
                toast({ title: "❌ Xatolik", description: "O‘chirishda muammo yuz berdi." });
            },
        });
    };


    return (
        <div className='my-24 px-5 xl:px-32'>
            <div className='flex items-center gap-2 mb-6'>
                <HiOutlineChevronLeft className='text-2xl' />
                <Link href="/profile">
                    <h1 className='font-bold text-5xl' style={{ fontFamily: "Oswald" }}>Joylashuv</h1>
                </Link>
            </div>

            <div className='grid lg:grid-cols-4 gap-5'>
                <ProfileSidebar />

                <div className='col-span-3'>
                    <div className='flex items-end justify-between gap-4'>
                        <h2 className='text-3xl sm500:text-4xl' style={{ fontFamily: 'Oswald' }}>Manzil</h2>
                        <ProfileDropdown />
                    </div>

                    <div className='grid sm:grid-cols-2 gap-5 my-6'>
                        {address.map((item) => (
                            <div className='border p-5 rounded-lg relative h-[300px]' key={item.id}>
                                <div className='absolute top-0 right-0 bg-slate-50 p-3 rounded-bl-lg border'>
                                    <h3 style={{ fontFamily: 'OswaldLight' }}>Manzil #{item.id}</h3>
                                </div>
                                <div className='space-y-2'>
                                    <h2 className='mt-3 text-2xl' style={{ fontFamily: 'Oswald' }}>
                                        {item.first_name} {item.last_name}
                                    </h2>
                                    <div>
                                        <p className='text-slate-500 text-md' style={{ fontFamily: 'OswaldLight' }}>Viloyat/Tuman</p>
                                        <p className='xl:text-md' style={{ fontFamily: 'Oswald' }}>{`${item.region},${item.city}`}</p>
                                    </div>
                                    <div>
                                        <p className='text-slate-500 text-md' style={{ fontFamily: 'OswaldLight' }}>Ko'cha/xonadon</p>
                                        <p className='xl:text-md' style={{ fontFamily: 'Oswald' }}>{`${item.street}, ${item.house_number}`}</p>
                                    </div>
                                    <div className='my-3'>
                                        <p className='text-slate-500 text-md' style={{ fontFamily: 'OswaldLight' }}>Telefon</p>
                                        <p className='xl:text-md' style={{ fontFamily: 'Oswald' }}>{item.phone}</p>
                                    </div>
                                </div>

                                <div className='absolute bottom-0 left-0 bg-slate-50 rounded-tr-lg rounded-bl-lg flex items-center gap-5 p-3 border w-full'>
                                    <Link href={`/edit-address/${item.id}`} className='flex items-center gap-2'>
                                        <BiSolidPencil />
                                        <span>Tahrirlash</span>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className='flex items-center gap-2 text-red-600 hover:text-red-800'
                                    >
                                        <BiSolidTrash />
                                        <span>O'chirish</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
