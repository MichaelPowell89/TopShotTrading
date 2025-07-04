import Link from "next/link";
import css from "./catalogue.module.css";
import { getCatalogue } from "@/lib/firearms";
import { Suspense } from "react";
import FirearmsGrid from "@/components/firearms/firearms-grid";

export const metadata = {
  title: "Catalogue",
  description: "Browse delicious meals shared by our vibrant community",
};

async function GetCatalogue() {
  const firearms = await getCatalogue();
  const firearmsArray = firearms ? Object.values(firearms) : [];

  return <FirearmsGrid firearms={firearmsArray} />;
}

export default function Catalogue() {
  return (
    <>
      <header className={css.header}>
        <h1>Catalogue</h1>
      </header>
      <main>
        <Suspense fallback={<p className={css.loading}>Fetching Catalogue</p>}>
          <GetCatalogue />
        </Suspense>
      </main>
    </>
  );
}
