import css from "./Footer.module.css";
import Image from "next/image";

function getDate() {
  const year = new Date().getFullYear().toString();
  const month = new Date().getMonth().toString().padStart('2', '0');
  const day = new Date().getDay().toString().padStart('2', '0');

  return `${year}-${month}-${day}`
}

export default function Footer() {
  return (
    <footer>
        <ul className={css.list}>
          <li>{getDate()}</li>-
          <li>Example</li>-
          <li>Example</li>-
          <li>Example</li>-
          <li>Example</li>-
          <li>Example</li>
        </ul>
    </footer>
  );
}
