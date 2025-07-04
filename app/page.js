import Link from "next/link";

import css from "./main.module.css";
import Feature from "@/components/feature/Feature";
import About from "@/components/about/About";
import Catalogue from "@/components/catalogue/Catalogue";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <section className={css.feature}>
        <Feature/>
      </section>

        <section className={css.section}>
        <About/>
        </section>

        <section className={css.section}>
          <Catalogue/>
        </section>

        <section className={css.section}>
          <h3 className='title'>
            Contact
          </h3>
          <Contact/>
        </section>
    </>
  );
}
