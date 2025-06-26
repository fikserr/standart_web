import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { HeroImg, HeroImg2, iphone12, iphone13, inbox, user, check, Blog1, Blog2, Blog3 } from '../images';
import HomeProduct from '@/components/shared/homeProducts';

const Home = ({products}) => {
  // const [starredCards, setStarredCards] = useState({});

  // const handleClick = (event, id) => {
  //   event.preventDefault();
  //   setStarredCards((prev) => ({
  //     ...prev,
  //     [id]: !prev[id],
  //   }));
  // }

  console.log(products, "salom");
  return (
    <div>
      <div className='p-5 relative w-full mt-20 2xl:px-20'>
        <img className='w-full md:hidden' src={HeroImg} alt="HeroImg" />
        <img className='w-full xl:h-[600px] object-cover rounded-lg hidden md:block' src={HeroImg2} alt="HeroImg" />
        <div
          style={{ fontFamily: 'Oswald' }}
          className='flex flex-col justify-between h-[80%]  lg:h-[90%] md992:p-10 absolute top-10 sm500:top-16 md:top-10 left-10 2xl:left-28 md992:left-14 md992:w-4/5 w-3/5 md:w-4/5'
        >
          <h2 className='font-bold text-[27px] sm500:text-[40px] sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl'>Kiyimlarning keng assortimenti</h2>
          <p style={{ fontFamily: 'OswaldLight' }}
            className='text-[15px] sm500:text-[22px] sm:text-3xl md992:text-4xl md:w-3/4 xl:text-5xl'
          >
            Mashhur brendlarning kiyimlari bizning katalogimizda. Faqat sifatli buyumlar
          </p>
          <button
            className='bg-black text-white flex justify-center items-center gap-2 p-4 rounded-lg w-4/5 sm500:w-1/2 xl:text-2xl hover:bg-[rgb(73,208,255)] hover:text-black duration-500'
            style={{ fontFamily: 'OswaldLight' }}
          >
            Katalogga o'ting <HiOutlineChevronRight />
          </button>
          <div className='flex gap-3 relative bottom-0 left-0'>
            <button className='w-[70px] h-[70px] sm500:w-[100px] sm500:h-[100px] flex justify-center items-center rounded-[50%] bg-slate-50 hover:bg-[rgb(73,208,255)] duration-300'><HiOutlineChevronLeft /></button>
            <button className='w-[70px] h-[70px] sm500:w-[100px] sm500:h-[100px] flex justify-center items-center rounded-[50%] bg-slate-50 hover:bg-[rgb(73,208,255)] duration-300'><HiOutlineChevronRight /></button>
          </div>
        </div>
      </div>
      <div>
        <HomeProduct data={products}/>
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
