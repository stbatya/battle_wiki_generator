import React from 'react';
function BattleTable({battleData}) {

    return (
      <div className ='center-container'>
        <table className="infobox vevent" style={{width: '25.5em', borderSpacing: '2px'}}>
          <tbody>
            <tr>
              <th className="summary" colSpan="2" style={{backgroundColor: '#C3D6EF', textAlign: 'center', verticalAlign: 'middle', fontSize: '110%'}}>{battleData.battleName}</th>
            </tr>
            <tr>
              <td colSpan="2" style={{textAlign: 'center', borderBottom: '1px solid #aaa', lineHeight: '1.5em'}}>
                {battleData.imageUrl && <img src={battleData.imageUrl} alt={battleData.battleName} width="300" height="200" />}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <table style={{width: '100%', margin: '0', padding: '0', border: '0', display: 'inline-table'}}>
                  <tbody>
                    <tr>
                      <th style={{paddingLeft: '1em', textAlign: 'left'}}>Date</th>
                      <td>{battleData.date}</td>
                    </tr>
                    <tr>
                      <th style={{paddingLeft: '1em', textAlign: 'left'}}>Location</th>
                      <td>{battleData.location}</td>
                    </tr>
                    <tr>
                      <th style={{paddingLeft: '1em', textAlign: 'left'}}>Result</th>
                      <td>{battleData.result}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <th colSpan="2" style={{backgroundColor: '#C3D6EF', textAlign: 'center', verticalAlign: 'middle', fontSize: '110%'}}>Belligerents</th>
            </tr>
            <tr>
              <td style={{width: '50%', borderRight: '1px dotted #aaa'}}>
                {battleData.side1FlagUrl && <img src={battleData.side1FlagUrl} width="23" height="15" />}
                {battleData.side1}
              </td>
              <td style={{width: '50%', paddingLeft: '0.25em'}}>
                {battleData.side2FlagUrl && <img src={battleData.side2FlagUrl} width="23" height="15" />}
                {battleData.side2}
              </td>
            </tr>
            <tr>
              <th colSpan="2" style={{backgroundColor: '#C3D6EF', textAlign: 'center', verticalAlign: 'middle', fontSize: '110%'}}>Commanders and leaders</th>
            </tr>
            <tr>
              <td style={{width: '50%', borderRight: '1px dotted #aaa'}}>{battleData.commanders1}</td>
              <td style={{width: '50%', paddingLeft: '0.25em'}}>{battleData.commanders2}</td>
            </tr>
            <tr>
              <th colSpan="2" style={{backgroundColor: '#C3D6EF', textAlign: 'center', verticalAlign: 'middle', fontSize: '110%'}}>Strength</th>
            </tr>
            <tr>
            <td style={{width: '50%', borderRight: '1px dotted #aaa'}}>{battleData.strength}</td>
            <td style={{width: '50%', paddingLeft: '0.25em'}}>{battleData.strength}</td>
            </tr>
            <tr>
              <th colSpan="2" style={{backgroundColor: '#C3D6EF', textAlign: 'center', verticalAlign: 'middle', fontSize: '110%'}}>Casualties and losses</th>
            </tr>
            <tr>
              <td style={{width: '50%', borderRight: '1px dotted #aaa'}}>{battleData.casualties}</td>
              <td style={{width: '50%', paddingLeft: '0.25em'}}>{battleData.casualties}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default BattleTable;