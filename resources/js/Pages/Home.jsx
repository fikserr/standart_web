import { HiOutlineChevronRight } from "react-icons/hi";
import { iphone12, iphone13, inbox, user, check, Blog1, Blog2, Blog3 } from '../images';
import { Link } from "@inertiajs/react";
import { HomeProducts, ClothesProducts, AccessoryProducts } from "@/components/shared/homeProducts";
import HomeHero from "@/Pages/home-hero";

const Home = ({ products, banners, favorites }) => {
  return (
    <div>
      <HomeHero banner={banners} />
      <div>
        <div className='px-5 xl:px-20'>
          <div className='flex items-center justify-between my-3'>
            <h3 style={{ fontFamily: 'Oswald' }} className='font-bold text-2xl'>
              Oyoq kiyimlar
            </h3>
            <h4 style={{ fontFamily: 'Oswald' }} className='border-b-2 border-black text-xl flex items-center p-1'>
              <Link href={"/shoes"} className='md:hidden'>Ko'proq</Link>
              <Link href={"/shoes"} className='hidden md:block'>Ko'proq maxsulot</Link>
              <HiOutlineChevronRight />
            </h4>
          </div>
          <HomeProducts data={products} favorites={favorites} />
        </div>
      </div>
      <div>
        <div className='px-5 xl:px-20'>
          <div className='flex items-center justify-between my-3'>
            <h3 style={{ fontFamily: 'Oswald' }} className='font-bold text-2xl'>
              Kiyimlar
            </h3>
            <h4 style={{ fontFamily: 'Oswald' }} className='border-b-2 border-black text-xl flex items-center p-1'>
              <Link href={"/clothes"} className='md:hidden'>Ko'proq</Link>
              <Link href={"/clothes"} className='hidden md:block'>Ko'proq maxsulot</Link>
              <HiOutlineChevronRight />
            </h4>
          </div>
          <ClothesProducts data={products} favorites={favorites} />
        </div>
        <div className='px-5 xl:px-20'>
          <div className='flex items-center justify-between my-3'>
            <h3 style={{ fontFamily: 'Oswald' }} className='font-bold text-2xl'>
              Aksesuarlar
            </h3>
            <h4 style={{ fontFamily: 'Oswald' }} className='border-b-2 border-black text-xl flex items-center p-1'>
              <Link href={"/accessory"} className='md:hidden'>Ko'proq</Link>
              <Link href={"/accessory"} className='hidden md:block'>Ko'proq maxsulot</Link>
              <HiOutlineChevronRight />
            </h4>
          </div>
          <AccessoryProducts data={products} favorites={favorites} />
        </div>
      </div>
      <div className='px-5 xl:px-20 my-14 text-white'>
        <div className='w-full p-5 sm:p-8 xl:p-16 bg-[rgb(22,156,248)] rounded-lg flex flex-col gap-3 relative'>
          <div className='grid lg:grid-cols-5 md:grid-cols-4'>
            <div className='col-span-3'>
              <div className='grid sm:grid-cols-3 gap-10 '>
                <div className='flex flex-col sm:mb-2 lg:mb-10 gap-10 col-span-3'>
                  <h2
                    style={{ fontFamily: "Oswald" }}
                    className='text-center text-5xl lg:text-7xl'
                  >
                    Narxni hisoblash
                  </h2>
                  <p
                    style={{ fontFamily: "OswaldLight" }}
                    className='text-center sm:text-xl lg:text-2xl'
                  >
                    Agar siz qidirayotgan narsangizni topa olmasangiz, har doim Poizon bozorida buyurtma narxini avtomatik hisoblash, shu jumladan xizmat komissiyasi va yetkazib berishdan foydalanishingiz mumkin
                  </p>
                </div>
                <div className='hidden md:block absolute md:bottom-32 right-5 lg:hidden '>
                  <img src={iphone12} alt="Iphone" />
                </div>
              </div>
              <div>
                <div className='flex items-center gap-4'>
                  <div>
                    <span className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] rounded-[50%] flex justify-center items-center border'>
                      1
                    </span>
                  </div>
                  <span style={{ fontFamily: "OswaldLight" }} className='sm:text-xl'>Poizon ilovasini qanday o'rnatish haqida batafsil, bosqichma-bosqich maqola</span>
                </div>
                <div className='flex items-center gap-4 my-4 '>
                  <div>
                    <span className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] rounded-[50%] flex justify-center items-center border'>
                      2
                    </span>
                  </div>
                  <p style={{ fontFamily: "OswaldLight" }} className='sm:text-xl'>Qaysi mahsulotni sotib olishni xohlayotganingizni bizga Telegram yoki WhatsApp orqali yozing</p>
                </div>
              </div>
              <div className='flex justify-center lg:justify-start my-5 lg:my-0'>
                <button
                  className='bg-black flex items-center justify-center rounded-xl p-3 px-8 lg:px-16 py-5 hover:bg-[rgb(22,156,248)] duration-500'
                >
                  Narxni hisoblash
                  <HiOutlineChevronRight />
                </button>
              </div>
            </div>
            <div className='absolute bottom-0 right-0 xl:right-10 hidden lg:block'>
              <img src={iphone13} alt="iPhone 12" />
            </div>
          </div>
        </div>
      </div>
      <div className='px-5 xl:px-20 grid lg:grid-cols-3 grid-cols-1 gap-5 xl:gap-32'>
        <div className='col-span-2'>
          <h2 style={{ fontFamily: "Oswald" }} className='text-2xl lg:text-4xl mb-2'>Xwear onlayn do'koni haqida</h2>
          <p className='text-sm lg:text-lg'>XWEAR jamoasi Xitoyning eng yirik Poizon bozoridagi original mahsulotlarni yetkazib berish xizmatini taqdim etadi, shuning uchun mijozlarimiz har bir xaridda 40% dan ko'proq tejaydi.
            Biz vositachilarsiz ishlaymiz, bu bizga eng yaxshi narxni taklif qilish imkonini beradi. Tez, bepul yetkazib berish.
            Xitoyning Poizon mobil ilovasini yuklab olmasdan, juda ko'p miqdordagi tovarlarni qulay filtrlash, shuningdek, tovarlarning yakuniy narxini darhol ko'rish imkoniyati bilan qulay xarid qilishingiz mumkin bo'lgan sayt
          </p>
        </div>
        <div className='my-5 flex flex-col gap-3 sm:flex-row lg:flex-col'>
          <div className='flex items-center gap-3'>
            <div className=''>
              <img src={inbox} alt="" />
            </div>
            <div>
              <h3 className='font-bold text-md sm:text-xs md:text-base'>Rossiyaga bepul yetkazib berish</h3>
              <p className='text-sm sm:text-xs'>Buyurtmangizni Rossiyaga mutlaqo bepul yetkazib beramiz</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className=''>
              <img src={user} alt="" />
            </div>
            <div>
              <h3 className='font-bold text-md sm:text-xs md:text-base'>Biz vositachilarsiz ishlaymiz</h3>
              <p className='text-sm sm:text-xs'>Biz va mijoz o'rtasida uchinchi g'ildirak yo'q.</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className=''>
              <img src={check} alt="" />
            </div>
            <div>
              <h3 className='font-bold text-md sm:text-xs md:text-base'>Buyurtma berish va ishlatish oson</h3>
              <p className='text-sm sm:text-xs'>Poizondan buyurtma berish uchun sizga hech qanday ilova kerak emas</p>
            </div>
          </div>
        </div>
      </div>
      <div className='px-5 xl:px-20 my-5 lg:my-10'>
        <div className='flex items-center justify-between'>
          <h2 style={{ fontFamily: "Oswald" }} className='text-xl'>Bizning blog</h2>
          <h4 style={{ fontFamily: "OswaldLight" }} className='text-lg'>Blogga o'tish</h4>
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
          <div className='flex flex-col gap-3'>
            <div className='w-full mt-5'>
              <img src={Blog1} alt="Img_Blog" className='w-full' />
            </div>
            <div>
              <h3 style={{ fontFamily: "Oswald" }}>Kuz mavsumi uchun barcha ayollar kiyimlariga chegirmalarni taqdim etamiz</h3>
              <p style={{ fontFamily: "OswaldLight" }}>Biz aksiyani boshlaymiz. Yozdan boshlab kuzga tayyorlaning. Yoz davomida ayollar kuzgi kiyimlarini chegirmali narxlarda xarid qiling.</p>
            </div>
            <div className='flex items-center justify-between'>
              <h6 style={{ fontFamily: "Oswald" }}>Batafsil ma'lumot oling</h6>
              <p style={{ fontFamily: "OswaldLight" }}>16 июня 2023</p>
            </div>
          </div>
          <div className='hidden md:flex flex-col gap-3'>
            <div className='w-full mt-5'>
              <img src={Blog2} alt="Img_Blog" className='w-full' />
            </div>
            <div>
              <h3 style={{ fontFamily: "Oswald" }}>Kuz mavsumi uchun barcha ayollar kiyimlariga chegirmalarni taqdim etamiz</h3>
              <p style={{ fontFamily: "OswaldLight" }}>Biz aksiyani boshlaymiz. Yozdan boshlab kuzga tayyorlaning. Yoz davomida ayollar kuzgi kiyimlarini chegirmali narxlarda xarid qiling.</p>
            </div>
            <div className='flex items-center justify-between'>
              <h6 style={{ fontFamily: "Oswald" }}>Batafsil ma'lumot oling</h6>
              <p style={{ fontFamily: "OswaldLight" }}>16 июня 2023</p>
            </div>
          </div>
          <div className='hidden xl:flex flex-col gap-3'>
            <div className='w-full mt-5'>
              <img src={Blog3} alt="Img_Blog" className='w-full' />
            </div>
            <div>
              <h3 style={{ fontFamily: "Oswald" }}>Kuz mavsumi uchun barcha ayollar kiyimlariga chegirmalarni taqdim etamiz</h3>
              <p style={{ fontFamily: "OswaldLight" }}>Biz aksiyani boshlaymiz. Yozdan boshlab kuzga tayyorlaning. Yoz davomida ayollar kuzgi kiyimlarini chegirmali narxlarda xarid qiling.</p>
            </div>
            <div className='flex items-center justify-between'>
              <h6 style={{ fontFamily: "Oswald" }}>Batafsil ma'lumot oling</h6>
              <p style={{ fontFamily: "OswaldLight" }}>16 июня 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
