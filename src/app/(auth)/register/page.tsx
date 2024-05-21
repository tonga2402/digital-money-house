import Image from 'next/image'
import React from 'react'
import Check from '../../UI-KIT/Check.png'
import RegisterOk from '@/app/components/RegisterOk';
import FormRegister from '@/app/components/auth/FormRegister';
import { UserType } from '@/app/types/user.type';


function RegisterPage() {
  return (
    <section className="section_form">
      <FormRegister />
    </section>
  );
}

export default RegisterPage;