'use client';

import { useState } from "react";

import css from "./Catalogue.module.css";
import Image from "next/image";
import Product from "./Product";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import Link from "next/link";

const list = [
  {
    image: burgerImg,
    alt: "A delicious, juicy burger",
    name: "Sig Sauer P320",
    calibre: '9mm',
    type: 'Semi-Auto',
    condition: 'New',
    cost: "950",
  },
  {
    image: curryImg,
    alt: "A delicious, spicy curry",
    name: "Sig Sauer P320",
    calibre: '9mm',
    type: 'Semi-Auto',
    condition: 'New',
    cost: "950",
  },
  {
    image: dumplingsImg,
    alt: "Steamed dumplings",
    name: "Sig Sauer P320",
    calibre: '9mm',
    type: 'Semi-Auto',
    condition: 'New',
    cost: "950",
  },
  {
    image: macncheeseImg,
    alt: "Mac and cheese",
    name: "Sig Sauer P320",
    calibre: '9mm',
    type: 'Semi-Auto',
    condition: 'New',
    cost: "950",
  },
  {
    image: pizzaImg,
    alt: "A delicious pizza",
    name: "Sig Sauer P320",
    calibre: '9mm',
    type: 'Semi-Auto',
    condition: 'New',
    cost: "950",
  },
  {
    image: schnitzelImg,
    alt: "A delicious schnitzel",
    name: "Sig Sauer P320",
    calibre: '9mm',
    type: 'Semi-Auto',
    condition: 'New',
    cost: "950",
  },
  {
    image: tomatoSaladImg,
    alt: "A delicious tomato salad",
    name: "Sig Sauer P320",
    calibre: '9mm',
    type: 'Semi-Auto',
    condition: 'New',
    cost: "950",
  },
];

const itemsPerPage = 4;

export default function Catalogue() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(list.length / itemsPerPage);

  const paginatedList = Array.from({ length: itemsPerPage }, (_, i) => {
    const index = (currentPage * itemsPerPage + i) % list.length;
    return list[index];
  });

  return (
    <>
      <div className={css.titlebar}>
        <div className={css.titlebarChild}>
          <h3 className={css.title}>Catalogue</h3>
          <div className={css.paginationButtonContainer}>
            <button className={css.paginationButton} onClick={() =>
              setCurrentPage((prev) =>
                (prev - 1 + totalPages) % totalPages
              )
            }>{'<'}</button>
            <button className={css.paginationButton} onClick={() =>
              setCurrentPage((prev) => (prev + 1) % totalPages)
            }>{'>'}</button>
        </div>
        </div>
        <Link href='/catalogue'>
          <button className={css.shopButton}>Shop All</button>
        </Link>
      </div>
      <div className={css.gallery}>
        {paginatedList.map((list, index) => (
            <Product
              key={index} 
              image={list.image}
              name={list.name}
              calibre={list.calibre}
              type={list.type}
              condition={list.condition}
              cost={list.cost}
            />
        ))}
      </div>
    </>
  );
}
