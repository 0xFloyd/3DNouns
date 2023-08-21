import React, { useState } from "react";

const NounIdInput = ({
  seed,
  setSeed,
  setTriggeredOnce,
  graphqlError,
  setGraphqlError,
}) => {
  const [nounID, setNounId] = useState("");

  const handleEnter = (e) => {
    if (e?.keyCode == 13) {
      setGraphqlError("");
      setTriggeredOnce(true);
      setNounId(e.target.value);
      setSeed(e.target.value);
    }
  };

  return (
    <>
      <br></br>
      <div className=" tw-flex tw-flex-row tw-justify-between">
        <input
          value={nounID}
          style={{ border: "2px solid black" }}
          onChange={(e) => setNounId(e.target.value)}
          className="tw-flex-grow tw-mr-2 tw-border tw-border-[#999999] tw-px-2 tw-py-1 tw-rounded-[5px]"
          placeholder="Noun Token ID..."
          onKeyDown={(e) => handleEnter(e)}
        />
        <button
          className="tw-bg-white tw-rounded-[5px] tw-border tw-border-[#999999] tw-px-2 hover:tw-cursor-pointer hover:tw-bg-[#E1E1E1]"
          style={{ border: "2px solid black" }}
          onClick={() => {
            setGraphqlError("");
            setTriggeredOnce(true);
            setSeed(nounID);
          }}
        >
          <p className="special-font-style special-font-menu"> SEARCH </p>
        </button>
      </div>
      <p className="tw-text-black-600 italic tw-mb-2">
        {graphqlError ? `${graphqlError}` : ``}
      </p>
    </>
  );
};

export default NounIdInput;
