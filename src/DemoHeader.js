import React from 'react'
import Headers from './navbar/Headers'

const s = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#2f2c2c'
  },
  header__grid: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '4em',
    maxWidth: '95%',
    margin: '0 auto'
  },
  nav: {
    marginLeft: 'auto'
  },
  nav__link: {
    marginLeft: '1em',
    fontSize: '0.8em',
    fontWeight: '400'
  },
  brand: {
    display: 'flex',
    alignItems: 'center'
  },
  brand__icon_inner: {
    position: 'relative',
    right: '-5px',
    display: 'block',
    height: '10px',
    width: '10px',
    borderRadius: '100%',
    backgroundColor: '#fff'
  },
  brand__icon_outer: {
    position: 'relative',
    left: '-10px',
    top: '-8px',
    display: 'block',
    height: '6px',
    width: '6px',
    borderRadius: '100%',
    backgroundColor: 'rgba(255,255,255,0.4)'
  }
}

export default function DemoHeader() {
  return (
<Headers />
  )
}
