import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchText,setSearchText] = useState("");
  const [playerData, setPlayerData] = useState([]);
  console.log(searchText);

  function searchForPlayer(event) {
   const URL = `https://lostarkapi.ga/userinfo/${searchText}?sasa=false&collect=false&dtri=false`;
   axios.get(URL).then(function (response) {
    //성공했을때 가져오기
    setPlayerData(response.data);
    console.log(response.data.Basic.Class.Name);
   }).catch(function (error){
    //실패했을때 문구출력
    console.log(error);
   })
  }

  return (
    <div className='App'>
      <div className='container'>
        <h5> Player Searcher</h5>
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchForPlayer(e)}>Search for player</button>
      </div>
      {JSON.stringify(playerData) !== '[]' ?
      <>
      <p>&nbsp;&nbsp;&nbsp;{playerData.Basic.Title} {playerData.Basic.Name}</p>
      <p>직업 :{playerData.Basic.Class.Name}</p>
      <img src={playerData.Avatar_img} alt="img"/>
      <p>각인 :{playerData.Basic.Engrave}</p>
      <p>서버 : {playerData.Basic.Server}</p>
      
      </>
      :
      <><p>해당 플레이어가 존재하지 않습니다.</p></>
      }
    </div>
  )
}

export default App