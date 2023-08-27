import React, { useState } from 'react';

const Fetch = () => {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setPosts(data);
    
  };
  

  return (
    <div>
      <button onClick={getData}>Show</button>
      <ul>
      <div>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>

        ))}
      </div>
      </ul>
    </div>
  );
};

export default Fetch;
