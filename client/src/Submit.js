import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Submit() {
  const [link, setLink] = useState('');
  let navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:5000/submit', { link });
    setLink('');
    navigate("/");
  };

  return (
    <>
      <div className="row g-6 align-items-center my-3 ">
        <div className="col-auto">
          <h3><label for="text" className="col-form-label">Paste your video link here :</label></h3>
        </div>
        <div className="col-auto mx-2">
          <input type="text" value={link} onChange={e => setLink(e.target.value)} required />
        </div>
        <div className="col-auto mx-2">
        <center><button class="button-15" role="button" onClick={handleClick}>Submit</button></center>
      </div>
      </div>
      
    </>
  );
}

export default Submit;
