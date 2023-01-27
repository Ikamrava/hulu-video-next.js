import React from "react";

function info({ results }) {
  console.log(results);
  return <div>onfoid</div>;
}

export default info;

export async function getServerSideProps(context) {
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
