import React, { useState } from 'react';

const NounIdInput = ({ seed, setSeed }) => {
  const [nounID, setNounId] = useState(null);
  return (
    <div>
      <p className="text-green-500">heyz</p>
      <input value={nounID} onChange={(e) => setNounId(e.target.value)} className="rounded-xl" placeholder="Noun ID" />
      <button onClick={() => setSeed(nounID)}>Search</button>
    </div>
  );
};

export default NounIdInput;
