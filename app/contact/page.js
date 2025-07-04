import css from './contact.module.css';
import Contact from '@/components/contact/Contact';

export default function contactPage() {
  return (
    <>
      <header className={css.header}>
        <h1>Contact</h1>
      </header>
      <main>
        <Contact/>
      </main>
    </>
  );
}