import Link from 'next/link'
import Image from 'next/image'
import Logo from '../UI-KIT/LogoLandingPage.png'
import dynamic from 'next/dynamic'

const DynamicLoggeIn = dynamic (()=> import('./auth/LoggedIn'), {
  ssr: false
})
const HeaderLanding = () => {



  return (
    <div className="header_container">
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt={"Logo Home"} priority={true} />
        </Link>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <DynamicLoggeIn />
        {/* {isLoggedIn ? (
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
        )} */}
      </div>
    </div>
  );
}

export default HeaderLanding;
