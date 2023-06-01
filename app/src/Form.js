import React, { useRef, useState } from 'react';

function Form({ onSubmit, battleData }) {
  const battleNameRef = useRef();
  const imageUrlRef = useRef();
  const dateRef = useRef();
  const locationRef = useRef();
  const resultRef = useRef();
  const side1Ref = useRef();
  const side2Ref = useRef();
  const side1FlagUrlRef = useRef();
  const side2FlagUrlRef = useRef();
  const commanders1Ref = useRef();
  const commanders2Ref = useRef();
  const strengthRef = useRef();
  const casualtiesRef = useRef();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      battleName: battleNameRef.current.value,
      imageUrl: imageUrlRef.current.value,
      date: dateRef.current.value,
      location: locationRef.current.value,
      result: resultRef.current.value,
      side1: side1Ref.current.value,
      side1FlagUrl : side1FlagUrlRef? side1FlagUrlRef.current.value: null,
      side2: side2Ref.current.value,
      side2FlagUrl : side2FlagUrlRef? side2FlagUrlRef.current.value: null,
      commanders1: commanders1Ref.current.value,
      commanders2: commanders2Ref.current.value,
      strength: strengthRef.current.value,
      casualties: casualtiesRef.current.value
    };
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="battleName">Name of the Battle:</label>
          <input ref={battleNameRef} id="battleName" defaultValue={battleData.battleName} required />
        </div>

        <div className="form-row">
          <label htmlFor="imageUrl">Image URL:</label>
          <input ref={imageUrlRef} id="imageUrl" />
        </div>

        <div className="form-row">
          <label htmlFor="date">Date:</label>
          <input ref={dateRef} defaultValue={battleData.date} id="date" />
        </div>

        <div className="form-row">
          <label htmlFor="location">Location:</label>
          <input ref={locationRef} id="location" defaultValue={battleData.location} />
        </div>

        <div className="form-row">
          <label htmlFor="result">Result:</label>
          <input ref={resultRef} id="result" defaultValue={battleData.result}/>
        </div>

        <div className="form-row">
          <label htmlFor="side1">Belligerent Side 1:</label>
          <input ref={side1FlagUrlRef} id="side1FlagUrl" placeholder='Flag URL'/>
          <input ref={side1Ref} id="side1" defaultValue={battleData.side1} placeholder='Side 1'/>
        </div>

        <div className="form-row">
          <label htmlFor="side2">Belligerent Side 2:</label>
          <input ref={side2FlagUrlRef} id="side1FlagUrl" placeholder='Flag URL'/>
          <input ref={side2Ref} id="side2" defaultValue={battleData.side2} placeholder='Side 2'/>
        </div>

        <div className="form-row">
          <label htmlFor="commanders1">Commanders and Leaders Side 1:</label>
          <input ref={commanders1Ref} id="commanders1" defaultValue={battleData.commanders1}/>
        </div>

        <div className="form-row">
          <label htmlFor="commanders2">Commanders and Leaders Side 2:</label>
          <input ref={commanders2Ref} id="commanders2" defaultValue={battleData.commanders2} />
        </div>
        <div class="form-row">
          <label for="strength">Strength:</label>
          <input ref={strengthRef} type="text" id="strength" defaultValue={battleData.strength} />
        </div>

        <div class="form-row">
          <label for="casualties">Casualties and Losses:</label>
          <input ref={casualtiesRef} type="text" id="casualties" defaultValue={battleData.casualties}/ >
        </div>
        <button type="submit">Generate</button>
      </form>
    </div>
  );
}

export default Form;

