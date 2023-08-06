"use client";

import { useState, useEffect, use } from "react";

const MeowCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16">
      {data.map((meow) => (
        <PromptCard 
          meow={meow} 
          handleTagClick={handleTagClick} 
          key={meow._id} />
      ))}
    </div>
  );
};

const Feed = () => {
  return (
    <div>Feed</div>
  )
}

export default Feed