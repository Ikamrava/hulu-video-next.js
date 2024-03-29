import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Results from "@/components/Results";
import requests from "../utils/request";
import { useState } from "react";

export default function Home({ results }) {
  const API_KEY = process.env.API_KEY;

  return (
    <>
      <Head>
        <title>Hulu-Movie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Navbar />
        <Results results={results} />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const data = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: data.results,
    },
  };
}
