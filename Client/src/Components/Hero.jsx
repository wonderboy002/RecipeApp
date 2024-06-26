import React, { useState } from 'react';

const Hero = () => {
 
  return (
    <>
      <section className="mt-20 flex w-full items-center gap-4">
          <div className="w-1/2 flex flex-col gap-4">
             <h1 className="font-bold text-2xl leading-10 text-white font-sans">
             Elevate Your Cooking Game with Our Recipe Collection!
             Find, Create, and Share Your Favorite Recipes!
             </h1>
             <button className="w-1/3 transtion-all duration-300 hover:bg-black hover:text-white hover:rounded-lg bg-white font-mono font-bold px-4 py-2">Browse Recipes</button>
          </div>
          <div className="Coverimg rounded-full w-1/2 h-[350px] bg-black">
              <img className="w-full rounded-full h-[350px]" src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fHww"></img>
          </div>
        </section> 
    </>
  );
}

export default Hero;
