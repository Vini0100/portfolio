import React from "react";
import { SocialList } from "../global/SocialList";

export const ContactForm = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-5 font-soraCost py-5 md:w-[31.25rem]"
    >
      <input type="text" placeholder="Seu nome" className="inputContact" />
      <input type="text" placeholder="Email" className="inputContact" />
      <input type="text" placeholder="Assunto" className="inputContact" />
      <textarea
        placeholder="Como posso ajudar?"
        className="inputContact h-36"
      />
      <div className="flex flex-col gap-5 items-start">
        <button className="py-3 px-4 bg-black rounded text-white font-soraCost font-semibold text-base w-auto">
          Contate-me
        </button>
        <SocialList />
      </div>
    </form>
  );
};
