"use client";

import moment from "moment";
import { footerItems } from "src/assets/static/data/footer";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-20 py-10 flex justify-between	items-center bg-primaryLight">
      <div className="flex flex-col">
        <p className="text-3xl font-bold font-roboto text-secondaryLight">
          Shoply.
        </p>
        <p className="text-secondaryLight font-roboto text-xl">
          © Copyright {moment().year()}. Created by OurTeam
        </p>
      </div>
      <div className="flex gap-5">
        {footerItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <Image src={item.icon} alt={"image"} width={40} height={40} />
          </Link>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
