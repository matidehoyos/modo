import React from 'react';

const Portfolio = () => {
  return (
    <div class="w-[100%] py-[70px] xl:pt-[30px] px-[15px] xl:px-[20px] overflow-x-hidden bg-[#1c3133]">
          <h4 className=' mb-[12px] xl:mb-[20px] text-[20px] xl:text-[24px] text-[#b9b9b9] tracking-wide leading-[21px] font-[600] xl:font-[700]'>PORTFOLIOS<br/><span className='text-[#548589] text-[17px] xl:text-[19px] leading-none'>para profesionales</span></h4>
          <img src="porfolio1.jpeg" alt="imagen website" className='w-[75%] xl:w-[100%] h-[140px] xl:h-auto object-cover object-top opacity-80 rounded-md' />
          <p className='w-[98%] xl:w-[100%] mt-[12px] xl:mt-[20px] text-white opacity-85 text-[16px] xl:text-[20px] font-[600] leading-tight tracking-[.86px] '>Una web que muestre a la perfeccion tus proyectos, tu carrera, tu preparacion, y todo lo que se refiera a tu profesion. <br/> </p>
    </div>
  );
};

export default Portfolio;