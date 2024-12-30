import React, { useEffect } from 'react'
import "./index.css"
import Canvas from './Canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
   
  }, [])
  
  return (
    <>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
       {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))} 
        <div className='w-full h-screen text-white relative'>
          <nav className='w-full p-8 flex justify-between z-50'>
            <div className='brand text-2xl font-md'>thirtysixstudios</div>
            <div className='links flex gap-10'>
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index)=>(
                  <a key={index}
                   href={`#{link.toLowerCase()}`}
                   className='text-md hover:text-gray-300'
                   >
                    {link}
                   </a>
              ))}
            </div>
          </nav>
          <div className='textcontainer  w-full  px-[20%]'>
          <div className='text w-[50%]'>
            <h3 className='text-4xl leading-[1.2]'>At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.</h3>
            <p className='text-md w-[80%] mt-10 font-lg'>We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.</p>  
            <p className='text-md mt-10'>scroll</p>
          </div>
          </div>
          <div>
          <div className='w-full absolute bottom-0 left-0'>
            <h1 className='pl-5 text-[17rem] font-normal tracking-tight leading-none'>Thirtysixstudios</h1>
          </div>
          </div>
        </div>
      </div>
      <div className='w-full relative h-screen text-white mt-32 px-10'>
      {data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))} 
      <div className=''>
      <h1 className='text-8xl leading-[1.8] w-[80%] mt-10 font-light'>about the brand</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, cum sapiente ut suscipit repudiandae molestiae ab eius, deleniti tempora, dolorum minus vero iste at? Enim minima aut laboriosam molestiae quaerat.
      Nobis quis quia sit, corrupti tempore provident totam quas libero nulla. Tempore culpa dolorum porro sed iusto expedita, reiciendis id quidem ex repellendus, praesentium itaque neque maiores ut consequatur sapiente.
      Temporibus cum iste quam unde dicta eaque ab adipisci veniam! Reiciendis voluptate eligendi praesentium ut, facilis explicabo culpa odio, eum doloremque hic cum? Fugiat dignissimos voluptate ipsam perspiciatis aut eum.
      Aut ea placeat similique, ut distinctio possimus beatae eius blanditiis, molestiae fugiat unde doloribus amet sunt dolore, nam sit pariatur hic voluptatum ab cum dolorem. Consectetur blanditiis iure ex consequuntur!
      Maxime, cum. Atque provident optio officiis accusamus, itaque porro incidunt animi? Totam temporibus cumque nulla labore delectus aliquam. Quaerat, perspiciatis. Tempore facere iste, reprehenderit omnis explicabo odio repellat libero recusandae.
      </p>
      <img className='w-[80%] mt-10 relative z-[-10]' 
      src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400" alt="" />
      </div>
      </div>
    </>
  );
};



export default App