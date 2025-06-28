import { Link, router } from '@inertiajs/react';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BiSolidPencil, BiSolidTrash } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
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
                    <div className='flex flex-col sm500:flex-row items-center justify-between gap-4'>
                        <h2 className='text-3xl sm500:text-4xl' style={{ fontFamily: 'Oswald' }}>Manzil</h2>
                        <div className='flex items-center gap-4'>
                            <ProfileDropdown className='hidden lg:block' />
                            <Link href='/address-add' className='bg-slate-100 px-5 py-2 rounded-lg flex items-center gap-2'>
                                <VscLocation className='text-xl' />
                                <span style={{ fontFamily: 'OswaldLight' }}>Manzil qo'shish</span>
                            </Link>
                        </div>
                    </div>

                    <div className='grid sm:grid-cols-2 gap-5 my-6'>
                        {address.map((item) => (
                            <div className='border p-5 rounded-lg relative' key={item.id}>
                                <div className='absolute top-0 right-0 bg-slate-50 p-3 rounded-bl-lg border'>
                                    <h3 style={{ fontFamily: 'OswaldLight' }}>Manzil #{item.id}</h3>
                                </div>

                                <h2 className='mt-3 text-2xl' style={{ fontFamily: 'Oswald' }}>
                                    {item.first_name} {item.last_name}
                                </h2>
                                <p className='xl:text-xl'>{`${item.region}, ${item.city}, ${item.street} ${item.house_number}`}</p>

                                <div className='my-3'>
                                    <p className='text-slate-500 text-md' style={{ fontFamily: 'OswaldLight' }}>Telefon</p>
                                    <p className='xl:text-xl'>{item.phone}</p>
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
