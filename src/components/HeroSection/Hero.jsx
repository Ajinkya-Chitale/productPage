import React from 'react'
import styles from '../HeroSection/Hero.module.css'
import Button from '../Button'

const Hero = () => {
  return (
    <section className={`${styles.heroSection} mb-2`}>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row px-6 gap-0 lg:gap-6 justify-center items-center mt-0 lg:mt-4">
        <div className='flex-1 order-last lg:order-first'>
          <h1 className='font-extrabold text-6xl lg:text-8xl mb-4'>YOUR FEET DESERVE THE BEST</h1>
          <p className='font-semibold text-base text-gray-500 mb-4'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="btnContainer flex gap-5">
              <Button name="Shop Now" primary />
              <Button name="Category" />
          </div>
        </div>
        <div className={`${styles.heroImage} flex-1`}>
          <img src='images/shoe_image.svg' alt='shoe image' />
        </div>
      </div>
      <div className='px-6 mt-5'>
        <p className='text-gray-500 mt-6 md:mt-4 lg:mt-4 xl:mt-0'>Also Available On</p>
        <div className='flex gap-4 items-center mt-1'>
          <img src="/images/flipkart.svg" alt="flipkart image" />
          <img src="/images/amazon.svg" alt="amazon image" />
        </div>
      </div>
    </section>
  )
}

export default Hero
