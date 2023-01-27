import React from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

function info({ results }) {
  console.log(results);
  return (
    <>
      <Header />
      <Navbar />

      <div className=" m-10 sm:flex ">
        <Image
          className=" object-cover"
          src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`}
          width={400}
          height={1920}
          alt="Poster"
        />
        <div className=" ml-5 text-lg ">
          <div className="">
            <h2 className=" mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
              {results.title || results.original_name}
            </h2>
            <label className=" text-bold text-yellow-400">Overview:</label>
            <p className=" max-w-md">{results.overview}</p>
          </div>

          <div>
            <div className=" ">
              <label className=" text-bold text-yellow-400 ">Genres: </label>
              {results.genres.map((genre) => (
                <p key={genre.name} className=" pl-3 ">
                  {" "}
                  {genre.name}
                </p>
              ))}
            </div>
            <a
              className=" text-blue-500"
              href={results.homepage}
              target="_blank"
            >
              <p className=" text-bold text-yellow-400"> Home Page: </p>
              <span className=" pl-3">{results.homepage}</span>
            </a>
            <p>
              <span className=" text-bold text-yellow-400">
                Original Language :
              </span>{" "}
              {results.original_language.toUpperCase()}
            </p>
            <p>
              <span className=" text-bold text-yellow-400">
                Spoken Languages :
              </span>{" "}
              {results.spoken_languages.map((lan) => (
                <span key={lan.english_name}>{lan.english_name} .</span>
              ))}
            </p>
            <div>
              <label className=" text-bold text-yellow-400">
                Production Companies :
              </label>
              {results.production_companies.map((lan) => (
                <p key={lan.name} className=" pl-3">
                  {lan.name}
                </p>
              ))}
            </div>

            <p>
              <span className=" text-bold text-yellow-400">RunTime: </span>
              {results.runtime} min
            </p>
            <p>
              <span className=" text-bold text-yellow-400">Vote Average: </span>
              {results.vote_average}
            </p>
            <p>
              <span className=" text-bold text-yellow-400">Status: </span>
              {results.status}
            </p>
            <p className=" flex items-center  group-hover:opacity-100">
              {results.media_type && `${Upercase(results.media_type)}`}{" "}
              {results.release_date || results.first_air_dat}{" "}
              <HandThumbUpIcon className=" h-5 mx-2 " /> {results.vote_count}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default info;

export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;
  const id = context.query.id;
  const media = context.query.media;

  console.log(context);

  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/${media}/${id}?api_key=be8935fb06e457f12f0a29dd018848c6&language=en-US`
    ).then((res) => res.json());
    return {
      props: {
        results: data,
      },
    };
  } catch (err) {
    console.log(err.success);
  }
}
