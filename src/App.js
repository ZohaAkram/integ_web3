import React, { useEffect, useState } from 'react';
import { init, itembyS, set_price } from './Web3Client';
function App() {
  const [minted, setMinted] = useState(false);
  const item_bySupplier = () => {
    itembyS()
      .then((tx) => {
        console.log(tx);
        setMinted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const setPrice = () => {
    set_price()
      .then((tx) => {
        console.log(tx);
        setMinted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      (<button onClick={() => item_bySupplier()}>item by supplier</button>(
      {/* <button onClick={() => enternum()}>Num</button>) : ( */}
      <p>number show successfully</p>)
      <button onClick={() => setPrice()}>set price</button>
    </div>
  );
}

export default App;
