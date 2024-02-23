// App.js
import React, { useState } from 'react';
import BattleTable from './Battle';
import Form from './Form';

function App() {
  const [battleData, setBattleData] = useState({
    battleName: 'Battle of Lützen',
    imageUrl: '',
    date: '6 November 1632',
    location: 'Near Lützen, southwest of Leipzig',
    result: 'Protestant victory',
    side1: 'Sweden',
    side1Flag: null, // set default value if you have any
    side1FlagUrl: null,
    side2: 'Holy Roman Empire',
    side2Flag: null, // set default value if you have any
    side2FlagUrl: null,
    commanders1: 'Gustavus Adolphus',
    commanders2: 'Albre t von Wallenstein',
    strength1: '12,800 infantry; 6,200 cavalry; 43 guns',
    casualties1: '3,400 dead and 1,600 wounded or missing',
    strength2: '17,800 infantry; 5,200 cavalry; 60 guns',
    casualties2: '6,000 dead and 1,700 wounded or missing'

  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitForm = (formData) => {
    setBattleData(formData);
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
  };

  return (
    <div className="App">
      {formSubmitted ? (
        <>
          <BattleTable battleData={battleData} />
          <div className="button-container">
            <button className="return-button" onClick={resetForm}>Return to form</button>
          </div>
        </>
      ) : (
        <Form onSubmit={submitForm} battleData={battleData} />
      )}
    </div>
  );
}

export default App;
