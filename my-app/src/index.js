import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FetchQuote() {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`https://h7bcs4ozaa.execute-api.us-east-1.amazonaws.com/prod`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
  }, []);

  if(data) {
    return <div>{data.body.quote}</div>;
    
  }

  return null;

}

function App() {
  return (
  <FetchQuote />
  );
}  

ReactDOM.render(
  <App />,
  document.getElementById("root")
);