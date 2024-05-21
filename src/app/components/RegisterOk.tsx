import Image from 'next/image';
import React from 'react'
import Check from '../UI-KIT/Check.png'
import { useRouter } from 'next/navigation';


const RegisterOk = () => {

  const router = useRouter();

  const goToLink = (href: string) => {
    router.push(href);
  };
  return (
    <div className="register_ok">
      <h1>Registro Exitoso</h1>
      <Image src={Check} alt="Check" />
      <p>
        Hemos enviado un correo de confirmación para validar tu email, por favor
        revisalo para iniciar sesión
      </p>
      <button className="button_responsive" onClick={() => goToLink("/login")}>
        Continuar
      </button>
    </div>
  );
}

export default RegisterOk
