import ContactForm from '@/components/contact-page/contact-form'
import React from 'react'
import { adminPath } from '@/utils/constants';


const getData = async () => {
  const res = await fetch(`${adminPath}/contact-us?populate=deep`);
  return res.json();
};
export const metadata = {
  title: "CONTACT US | MARISTAN",
  description: "Maristan by vigorant",
};
export default async function ContactUs() {
  
const data = await getData();
const pageData = data?.data?.attributes;
  return (
    <>
    <ContactForm data={pageData?.ContactForm}/>
    </>
  )
}


