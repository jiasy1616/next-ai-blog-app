import React from "react";
import Twitter from "/public/assets/social_twitter.png";
import Facebook from "/public/assets/social_facebook.png";
import Instagram from "/public/assets/social_instagram.png";
import Google from "/public/assets/social_google.png";
import Discord from "/public/assets/social_discord.png";
import Image from "next/image";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className='flex justify-between items-center gap-7'>
      <a href='http://twitter.com' target='_blank' rel='noreferrer'>
        <Image
          className={`${isDark ? "brightness-0" : ""} "hover:opacity-50" `}
          alt='twitter'
          src={Twitter}
          width={20}
          height={20}
        ></Image>
      </a>
      <a href='http://facebook.com' target='_blank' rel='noreferrer'>
        <Image
          className={`${isDark ? "brightness-0" : ""} "hover:opacity-50" `}
          alt='twitter'
          src={Facebook}
          width={20}
          height={20}
        ></Image>
      </a>
      <a href='http://instagram.com' target='_blank' rel='noreferrer'>
        <Image
          className={`${isDark ? "brightness-0" : ""} "hover:opacity-50" `}
          alt='instagram'
          src={Instagram}
          width={20}
          height={20}
        ></Image>
      </a>
      <a href='http://google.com' target='_blank' rel='noreferrer'>
        <Image
          className={`${isDark ? "brightness-0" : ""} "hover:opacity-50" `}
          alt='google'
          src={Google}
          width={20}
          height={20}
        ></Image>
      </a>
      <a href='http://discord.com' target='_blank' rel='noreferrer'>
        <Image
          className={`${isDark ? "brightness-0" : ""} "hover:opacity-50" `}
          alt='discord'
          src={Discord}
          width={20}
          height={20}
        ></Image>
      </a>
    </div>
  );
};

export default SocialLinks;
