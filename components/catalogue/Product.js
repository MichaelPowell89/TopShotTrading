import css from "./Catalogue.module.css";
import Image from "next/image";
import tempImage from "@/assets/no-image.jpg";
import Link from "next/link";

export default function Product(list) {
  return (
    <div className={css.productContainer}>
      <Image src={list.image ? list.image : tempImage} className={css.image} alt="Test" />
      <h4>{list.make} - {list.type}</h4>
      <p>{list.calibre}, {list.condition}</p>
      <p>${list.cost}</p>
      <button>
        <Link href={`/catalogue/${list.itemId}`}>Enquire</Link>
      </button>
    </div>
  );
}
