import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto"></main>

      {/* Banner Section */}
      <Banner />

      {/* Product Feed Section */}
      <ProductFeed products={products} />
      <p></p>
    </div>
  );
}
// Whenever we want to do a server-side render so whenever we want to do
// anything you know in the server render you want to go ahead and do export
// async function this tells next JS that this is no longer static page it needs
// to have that middle server step right so we are going to basically we are
// saying please calculate something on the server first to render out the page
// and then deliver it to the user on the page rather than just sending the entire
// site to the user
export async function getServerSideProps(context) {
  // we want to fetch products from this API
  const products = await fetch(
    "http://localhost:3030/products"
    // "https://api.escuelajs.co/api/v1/products?offset=0&limit=60"
  ).then((res) => res.json());
  // .then((json) => console.log(json));

  return {
    props: {
      products,
    },
  };
}

// https://fakestoreapi.com/products
