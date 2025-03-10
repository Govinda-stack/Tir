import React from 'react'
import Main from "./main banner/Main";
import Headers from "./navbar/Headers";
import Excellence from "./excellence/Excellence";
import Services from "./services/Services";
import WhatWeDo from "./whatwedo/WhatWeDo";
import WhyUs from "./whyus/WhyUs";
import Faq from "./faq/Faq";
import Cta from "./cta/Cta";
import Footer from "./footer/Footer";
import "@fontsource/poppins";
import Blogs from './blogs/Blogs'
const s = {
  section: {
    paddingTop: '6em',
    width: '80%',
    maxWidth: '36em',
    margin: '0 auto 1em'
  },
  title: {
    marginBottom: '1em',
    fontSize: '3em',
    fontWeight: 800,
    textAlign: 'center',
    lineHeight: 1
  },
  pretitle: {
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center'
  },
  sep: {
    border: 0,
    margin: '2em auto',
    height: 2,
    width: '3em',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }
}

export default function Content() {
  return (
    <div className="App">
      <Main />
      <Excellence />
      <Services />
      <WhatWeDo />
      <WhyUs/>
    <Faq />
    <Blogs/>
    <Cta/>
    </div>
  )
}
