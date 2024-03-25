import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "About Page",
  description: "Generated with all the best technologies for About!",
  keywords: ["About", "Page", "Next.js"],
};

const AboutPage = () => {
  return (
    <main className='flex flex-col items-'>
      <div className='text-7xl'>AboutPage</div>
    </main>
  )
}

export default AboutPage