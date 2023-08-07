"use client";

import { useState, useEffect, use } from "react";
import MeowCard from "./MeowCard";

const MeowCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 feed-container">
      {data.map((meow) => (
        <MeowCard meow={meow} handleTagClick={handleTagClick} key={meow._id} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [meowList, setMeowList] = useState([]);

  useEffect(() => {
    const getMeowList = async () => {
      const res = await fetch("/api/meow");
      const data = await res.json();
      setMeowList(data);
    };
    getMeowList();
  }, []);

  return (
    <div className="w-screen">
      <section className="md:mx-20">
        <MeowCardList data={meowList} handleTagClick={() => {}} />
      </section>
    </div>
  );
};

export default Feed;
