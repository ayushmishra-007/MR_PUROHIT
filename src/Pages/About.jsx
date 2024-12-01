import React from 'react'
import about_image from '../assets/about.jpg'
import play_icon from '../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
         {/* Left Box */}
      <div className="relative mb-8 w-full md:mb-0 md:w-[40%]">
        <img src={about_image} alt="" className="w-full rounded-lg" />
        <img
          src={play_icon}
          alt=""
          className="absolute top-1/2 left-1/2 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer "
          onClick={() => setPlayState(true)}
        />
      </div>

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-md text-gray-600  '>
          <p>Welcome to Mr. Purohit, your trusted partner in bringing the divine closer to your everyday life. Rooted in the principles of Sanatan Dharma, we strive to make spirituality accessible, meaningful, and convenient for everyone. Our mission is to honor tradition while embracing the modern world, ensuring every ritual you perform is a step toward profound peace and divine connection.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to make spirituality accessible and meaningful, empowering individuals to perform sacred rituals with ease and authenticity.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We envision transforming every home into a temple of positivity and blessings. By combining timeless traditions with modern convenience, we aim to bring the divine closer to every heart, one ritual at a time.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p className='text-center'>OUR<span className='text-gray-700 font-semibold'> SERVICES</span> </p>
      </div>

      <div className='flex flex-col mt-10 gap-2 md:flex-row mb-20'>
        <div className='border rounded-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Premium Puja Samagri: </b>
          <p>Delivering authentic, high-quality spiritual products for daily rituals, festivals, and special ceremonies..</p>
        </div>

        <div className='border rounded-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Purohit Services: </b>
          <p>Connecting you with knowledgeable purohits to perform rituals with reverence and precision.</p>
        </div>
       
        <div className='border rounded-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Darshanam:</b>
          <p>Offering spiritual retreats and experiences designed to rejuvenate and deepen your connection with the divine.</p>
        </div>

        <div className='border rounded-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Community Support:</b>
          <p>Building a supportive network to celebrate, share, and uphold the rich traditions of Sanatan Dharma.</p>
        </div>
      </div>
      {/* yanha se kamm karna hai jii */}

    </div>
  )
}

export default About
