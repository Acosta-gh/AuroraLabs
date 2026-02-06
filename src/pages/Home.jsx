import React from 'react'
// ===============================================================
// Components
// ===============================================================
import Hero from "@/components/home/Hero";
import WhyYouNeedThis from '@/components/home/WhyYouNeedThis';
import WhatMakesMeDifferent from '@/components/home/WhatMakesMeDifferent';
import HowItWorks from '@/components/home/HowItWorks';
import Projects from '@/components/home/Projects';
import FinalCTA from '@/components/home/FinalCTA';
import FAQ from '@/components/home/FAQ';
import Pricing from '@/components/home/Pricing';

function Home() {
  return (
    <div>
      <Hero />
      <WhyYouNeedThis />
      <WhatMakesMeDifferent />
      <Pricing />
      <HowItWorks />
      <Projects />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

export default Home