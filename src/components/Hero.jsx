import React from 'react';

export default function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className=' max-h-[500px] relative'>
      {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center '>
          <h1 className='px-4 text-4xl sm: text-5xl md-6xl lg:text-7xl font-bold'>
            The <span className='text-orange-500'>1Best</span>{' '}
          </h1>
          <h1 className='px-4 text-4xl sm: text-5xl md-6xl lg:text-7xl font-bold'>
          <span className='text-orange-500'>Foods</span> Delivered
          </h1>
        </div>
        <img
          src='https://c4.wallpaperflare.com/wallpaper/22/193/179/dish-food-pierogi-vareniki-wallpaper-preview.jpg'
          alt=''
          className='w-full max-h-[500px] object-cover'
        />
      </div>
    </div>
  );
}
