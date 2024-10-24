import React from "react";
import { ContactForm } from "../contact/ContactForm";
import { ContactText } from "../contact/ContactText";

export const Contact = () => {
  return (
    <section className="layoutCustom defaultCenter text-base flex flex-col gap-5 md:flex-row md:gap-24 md:justify-center">
      <ContactForm />
      <ContactText />
    </section>
  );
};
