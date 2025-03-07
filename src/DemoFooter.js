import React from 'react'
import Footer from './footer/Footer'
import Headers from './navbar/Headers'

const s = {
  footer: {
    position: 'relative',
    width: '100%',
    padding: '6em 0 3em',
    backgroundColor: '#2f2c2c',
    textAlign: 'center'
  },
  footer__grid: {
    position: 'relative',
    maxWidth: '95%',
    margin: '0 auto'
  },
  footer__border: {
    height: '1px',
    width: '100%',
    marginBottom: '4em',
    border: '0',
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  footer__copy: {
    fontSize: '0.8em'
  },
  footer__icon: {
    width: '2em',
    margin: '0 auto',
    textAlign: 'center'
  },
  footer__icon_vector: {
    fill: '#fff'
  }
}

export default function DemoHeader() {
  return (
    <Footer />
  )
}
