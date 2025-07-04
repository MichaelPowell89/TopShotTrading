import Link from "next/link";

import css from "./Feature.module.css";

export default function Feature() {
  return (
    <>
      <h1 className="title">Your Trusted Local Firearms Dealer</h1>
      <h3>Explore Our Range. Licensed. Local. Responsible.</h3>
      <br/>
        <Link href="/catalogue">
          <button>View Catalogue</button>
        </Link>
    </>
  );
}
