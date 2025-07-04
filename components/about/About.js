import css from "./About.module.css";
import Image from "next/image";

import profileImage from "@/public/images/profile.png";

export default function About() {
  return (
    <div className={css.container}>
      <Image src={profileImage} className={css.image} alt="Test" />
      <div className={css.text}>
        <h3 className="title">About</h3>
        <p className={css.text}>
          Locally owned and operated, we have years of experience and fully
          comply with all Australian firearms laws and regulations. Whether you
          are a seasoned collector or a first time buyer, we’re here to help you
          responsible find the right firearms for your needs.
        </p>
      </div>
    </div>
  );
}
