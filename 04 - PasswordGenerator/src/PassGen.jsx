import React, { useCallback, useRef, useState } from "react";

// useCallback use for an optimization the code due to store in cache memory;
// useRef takes only reference


export default function PassGen() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);

 const passRef = useRef(null);


  const randomPassGen = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (specialChar) str += "!@#$%&?";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      // console.log(pass)
    }
    setPassword(pass);
  },[length,number,specialChar,password]) 

  const copyButton =useCallback(()=>{
    // use for select those words to want copy
    passRef.current?.select()

    // provide range how much character you want to select
    passRef.current?.setSelectionRange(0,32)

    // copy method
    window.navigator.clipboard.writeText(password)
  },[password])
  

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-white py-5 text-4xl underline">Password Generator</h1>

      <div className="flex items-center">
        <button
          className="text-white rounded-lg bg-blue-700 w-36 h-10"
          onClick={randomPassGen}
        >
          Get New Password
        </button>
        <input
          className="rounded-lg py-2 px-8 my-10 outline-none"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => e.target.value}
          ref={passRef}
        />
        <button className="text-white rounded-lg bg-blue-700 w-16 h-10" onClick={copyButton}>
          Copy
        </button>
      </div>

      <div className="flex items-center">
        <input type="range" id="length" min={8} max={32} onChange={(e)=>{setLength(e.target.value)}}/>
        &nbsp;
        <label htmlFor="length" className="text-white text-xl">
          Length: {length}
        </label>
        &nbsp;&nbsp;&nbsp;
        <input type="checkbox" id="number" onChange={()=>setNumber((prev)=>!prev)} />
        &nbsp;
        <label htmlFor="number" className="text-white text-xl">
          Number
        </label>
        &nbsp;&nbsp;&nbsp;
        <input type="checkbox" id="character" onChange={()=>setSpecialChar((prev)=>!prev)}/>
        &nbsp;
        <label htmlFor="character" className="text-white text-xl">
          Character
        </label>
      </div>
    </div>
  );
}
