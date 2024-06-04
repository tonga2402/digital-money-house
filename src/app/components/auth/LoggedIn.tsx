'use client'
import { useAuthContext } from '@/app/contexts/authContext'
import { useRouter } from 'next/navigation'
import React from 'react'


const LoggedIn = () => {

    const router = useRouter()
    const { isLoggedIn, logout } = useAuthContext()
  
    const goToLink = (href:string) => {
      router.push(href)
    }
  return (
   <>
    {isLoggedIn ? (
          <button
           onClick={()=>logout()} 
           className="button_responsive">Cerrar Sesión</button>
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
   </>
  )
}

export default LoggedIn
