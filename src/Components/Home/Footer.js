import React from 'react'
import logoUca from '../../assets/images/Home/LogoUCA.png'
import logoUnicef from '../../assets/images/Home/LogoUNICEF.jpg'

const Footer = () => (
  <footer className="h-13/100w flex flex-wrap items-end justify-end overflow-y-auto pb-2.5 z-10">
    <a target="_blank" rel="noreferrer"
      href="https://www.unicef.org/es" className="w-28 mx-4 md:min-w-10/100">
      <img src={logoUnicef} alt="logo UNICEF" />
    </a>
    <a
      target="_blank" rel="noreferrer"
      href="https://uca.edu.sv/"
      className="w-40 mx-4 md:min-w-15/100 self-auto">
      <img src={logoUca} alt="logo UCA" />
    </a>
  </footer>
)

export default Footer

