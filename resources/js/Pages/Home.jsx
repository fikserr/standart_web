import { useEffect, useState, lazy, Suspense } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { iphone12, iphone13, inbox, user, check, Blog1, Blog2, Blog3 } from '../images';
import { Link } from "@inertiajs/react";
import { Spinner } from "@/components/shared/spinner";

const HomeHero = lazy(() => import("../Pages/home-hero"));
const HomeProducts = lazy(() => import("@/components/shared/homeProducts").then(m => ({ default: m.HomeProducts })));
const ClothesProducts = lazy(() => import("@/components/shared/homeProducts").then(m => ({ default: m.ClothesProducts })));
const AccessoryProducts = lazy(() => import("@/components/shared/homeProducts").then(m => ({ default: m.AccessoryProducts })));
const BlogSection = lazy(() => import("@/components/shared/BlogSection")); // Blog bo‘limini alohida komponentga olib chiqamiz

const Section = ({ title, link, children }) => (
  <div className='my-3'>
    <div className='flex items-center justify-between'>
      <h3 style={{ fontFamily: 'Oswald' }} className='font-bold text-2xl'>{title}</h3>
      <h4 style={{ fontFamily: 'Oswald' }} className='border-b-2 border-black text-xl flex items-center p-1'>
        <Link href={link} className='md:hidden'>Ko'proq</Link>
        <Link href={link} className='hidden md:block mb-3'>Ko'proq maxsulot</Link>
        <HiOutlineChevronRight />
      </h4>
    </div>
    {children}
  </div>
);

const Home = ({ products, banners, favorites }) => {
  const [showShoes, setShowShoes] = useState(false);
  const [showClothes, setShowClothes] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  console.log(products, "products");

  useEffect(() => {
    window.scrollTo(0, 0);

    const shoesTimer = setTimeout(() => setShowShoes(true), 1000);
    const clothesTimer = setTimeout(() => setShowClothes(true), 2000);
    const accessoryTimer = setTimeout(() => setShowAccessories(true), 3000);
    const blogTimer = setTimeout(() => setShowBlog(true), 4000); // Blog bo'limini ham kech yuklaymiz

    return () => {
      clearTimeout(shoesTimer);
      clearTimeout(clothesTimer);
      clearTimeout(accessoryTimer);
      clearTimeout(blogTimer);
    };
  }, []);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <HomeHero banner={banners} />
      </Suspense>

      <div className='px-5 xl:px-20'>

        {showShoes && (
          <Section title="Oyoq kiyimlar" link="/category/3">
            <Suspense fallback={<Spinner />}>
              <HomeProducts data={products} favorites={favorites} />
            </Suspense>
          </Section>
        )}

        {showClothes && (
          <Section title="Kiyimlar" link="/category/3">
            <Suspense fallback={<Spinner />}>
              <ClothesProducts data={products} favorites={favorites} />
            </Suspense>
          </Section>
        )}

        {showAccessories && (
          <Section title="Aksesuarlar" link="/category/1">
            <Suspense fallback={<Spinner />}>
              <AccessoryProducts data={products} favorites={favorites} />
            </Suspense>
          </Section>
        )}

      </div>

      <div className='px-5 xl:px-20 grid lg:grid-cols-3 grid-cols-1 gap-5 xl:gap-32 mt-10'>
        <div className='col-span-2'>
          <p className='text-sm lg:text-lg'>
            XWEAR jamoasi Xitoyning eng yirik Poizon bozoridagi original mahsulotlarni yetkazib berish xizmatini taqdim etadi, shuning uchun mijozlarimiz har bir xaridda 40% dan ko'proq tejaydi.
            Biz vositachilarsiz ishlaymiz, bu bizga eng yaxshi narxni taklif qilish imkonini beradi. Tez, bepul yetkazib berish.
            Xitoyning Poizon mobil ilovasini yuklab olmasdan, juda ko'p miqdordagi tovarlarni qulay filtrlash, shuningdek, tovarlarning yakuniy narxini darhol ko'rish imkoniyati bilan qulay xarid qilishingiz mumkin bo'lgan sayt
          </p>
        </div>
        <div className='my-5 flex flex-col gap-5 sm:flex-row lg:flex-col xl:max-w-sm bg-slate-100 p-5'>
          <div className="flex flex-col gap-3">
            <div className='flex items-start md:items-center gap-3'>
              <img src={inbox} alt="" style={{ width: "30px", height: "30px" }} />
              <div className="flex flex-col">
                <h3 className='font-bold text-md sm:text-xs md:text-base'>Rossiyaga bepul yetkazib berish</h3>
                <p className='text-sm sm:text-xs'>Buyurtmangizni Rossiyaga mutlaqo bepul yetkazib beramiz</p>
              </div>
            </div>
            <div className='flex items-start md:items-center gap-3'>
              <img src={user} alt="" style={{ width: "30px", height: "30px" }} />
              <div className="flex flex-col">
                <h3 className='font-bold text-md sm:text-xs md:text-base'>Biz vositachilarsiz ishlaymiz</h3>
                <p className='text-sm sm:text-xs'>Biz va mijoz o'rtasida uchinchi g'ildirak yo'q.</p>
              </div>
            </div>
          </div>
          <div className='flex items-start lg:items-center gap-3'>
            <img src={check} alt="" style={{ width: "30px", height: "30px" }} />
            <div className="flex flex-col">
              <h3 className='font-bold text-md sm:text-xs md:text-base'>Buyurtma berish va ishlatish oson</h3>
              <p className='text-sm sm:text-xs'>Poizondan buyurtma berish uchun sizga hech qanday ilova kerak emas</p>
            </div>
          </div>
        </div>
      </div>
      {showBlog && (
        <Suspense fallback={<Spinner />}>
          <BlogSection />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
