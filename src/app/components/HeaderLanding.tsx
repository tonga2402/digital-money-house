'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../UI-KIT/LogoLandingPage.png'
import { useRouter } from 'next/navigation'



const HeaderLanding = () => {

  const router = useRouter()
  const [isToken , setIsToken] = useState<boolean>(true)

  const goToLink = (href:string) => {
    router.push(href)
  }

  useEffect(()=>{
    localStorage.getItem('token') && setIsToken(true)
  },[isToken])


  const closeSesion = () => {
    localStorage.removeItem('token');
    setIsToken(false)
    router.refresh()
  }

  return (
    <div className="header_container">
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt={"Logo Home"} priority={true} />
        </Link>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {isToken ? (
          <button onClick={() => closeSesion()} className="button_responsive">Cerrar Sesión</button>
        ) : (
          <>
            <button
              className="button_google"
              onClick={() => goToLink("/login")}
            >
              Ingresar
            </button>
            <button
              className="button_responsive"
              onClick={() => goToLink("/register")}
            >
              Crear cuenta
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default HeaderLanding;
