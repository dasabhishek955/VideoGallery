import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [link, setLink] = useState([]);
  useEffect(() => {

    const fetchLink = async () => {
      const { data } = await axios.get('http://localhost:5000/home');
      setLink(data.link);
    };
    fetchLink();
  }, []);

  return (
    <>
      <div className="App my-4">
        <center> <h1>Home Page</h1> </center>
        <center>Total number of video links stored: {link.length}</center>
      </div>
      <div className="row g-6 align-items-center my-3 ">
        <div class="col-auto mx-5" style={{ justifyContent: 'space-between' }}>
          {link.map(elink =>
            //  {/*for i(elink) in link(link.map) */}
            <div class="row-auto mx-2" key={elink[0]} style={{ border: "1px solid red" }} >
              {/* <h2>{console.log(elink)}</h2> */}
              <iframe width="420" height="210" src={`https://www.youtube.com/embed/${elink[1].split('/').pop()}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameborder="0"></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
