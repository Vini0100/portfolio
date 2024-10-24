import React from "react";
import { SocialItem } from "./SocialItem";
import { FaLinkedin } from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

export const SocialList = () => {
  return (
    <ul className="flex gap-6">
      <SocialItem>
        <FaLinkedin size={20} />
      </SocialItem>
      <SocialItem>
        <SiCredly size={20} />
      </SocialItem>
      <SocialItem>
        <RiInstagramFill size={20} />
      </SocialItem>
    </ul>
  );
};
