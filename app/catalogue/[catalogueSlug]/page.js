import Image from 'next/image';
import css from './WeaponDetail.module.css'
import { notFound } from 'next/navigation';
import { getFirearm } from '@/lib/firearms';
import Contact from '@/components/contact/Contact';
import tempImage from "@/assets/no-image.jpg";

export async function generateMetadata({ params }) {
  console.log(params)
  const firearm = await getFirearm(params.catalogueSlug);

  if (!firearm) {
    notFound();
  }
  
  return {
    title: firearm.title,
    description: firearm.summary,
  }
};

export default async function FirearmPage({ params }) {
  console.log("params FirearmSlug: ", params);
  const firearm = await getFirearm(params.catalogueSlug);

  if (!firearm) {
    notFound();
  }

  // firearm.instructions = firearm.instructions? firearm.instructions.replace(/\n/g, '<br/>') : '';

    return (
      <>
      <div className='feature'>
        <header className={css.header}>
          <div className={css.image}>
            <Image src={ firearm.image ? firearm.image : tempImage } alt={firearm.model} fill/>
          </div>
          <div className={css.headerText}>
            <h1>{firearm.make}</h1>
            {/* <p className={css.creator}>
              by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a> */}
            {/* </p> */}
            <p className={css.summary}>Summary</p>
          </div>
        </header>
      </div>
      <section className="section">
        <h3 className='title'>
          Contact
        </h3>
        <Contact
          subject={firearm}
        />
      </section>
      {/* <main> */}
        {/* <p className={css.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions
        }}></p> */}
      {/* </main> */}
      </>
    );
  }
  