import React from "react";
import { Blog1, Blog2, Blog3 } from '../../images';

const BlogSection = () => (
  <div className='px-5 xl:px-20 my-5 lg:my-10'>
    <div className='flex items-center justify-between'>
      <h2 className='text-xl font-oswald'>Bizning blog</h2>
      <h4 className='text-lg font-oswald'>Blogga o'tish</h4>
    </div>
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
      {[Blog1, Blog2, Blog3].map((blogImg, i) => (
        <div key={i} className='flex flex-col gap-3'>
          <div className='w-full mt-5'>
            <img src={blogImg} alt={`Img_Blog_${i}`} className="w-full h-auto" loading="lazy" />
          </div>
          <div>
            <h3 className="font-oswald" >Kuz mavsumi uchun barcha ayollar kiyimlariga chegirmalarni taqdim etamiz</h3>
            <p className="font-oswald" >Biz aksiyani boshlaymiz. Yozdan boshlab kuzga tayyorlaning. Yoz davomida ayollar kuzgi kiyimlarini chegirmali narxlarda xarid qiling.</p>
          </div>
          <div className='flex items-center justify-between'>
            <h6 className="font-oswald">Batafsil ma'lumot oling</h6>
            <p className="font-oswald">16 июня 2023</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BlogSection;
