import { useEffect, useState } from 'react';
import './app.css';
import Detail from './component/detail/detail';
import List from './component/list/list';
import Search from './component/search/search';

function App() {
  document.title = "유기동물 조회서비스";

  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState();

  const convertFmt = (datestring) =>{
    return [datestring.slice(0,4), datestring.slice(4,6), datestring.slice(6,8)].join("-");
  }
  useEffect(() => {
    const key = "ZCU3%2FjB%2FlrpbQX9ou37B1eCj93xvvkjd5%2F609G4%2FxzVrGVTfFcfhBPhexAu%2Fw0APi53876d4eojm%2Bq8Eiq7ZaA%3D%3D";
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30`)
      .then(response => response.json())
      .then(json => {
        // console.log(json.response.body.items.item);
        setPets(json.response.body.items.item.map((one)=>{

          return {...one, happenDt : convertFmt(one.happenDt)}
        }));
      })
      .catch(e => {
        console.log(e);
      }); 
   }, []);

  const handleSearch = (bgnde, endde, upr_cd="6290000") =>{
    const key = "ZCU3%2FjB%2FlrpbQX9ou37B1eCj93xvvkjd5%2F609G4%2FxzVrGVTfFcfhBPhexAu%2Fw0APi53876d4eojm%2Bq8Eiq7ZaA%3D%3D";
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30&bgnde=${bgnde}&endde=${endde}&upr_cd=${upr_cd}`)
      .then(response => response.json())
      .then(json => {
        // console.log(json.response.body.items.item);
        setPets(json.response.body.items.item);
        setSelected(null);
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  
  
  const handleSelected = (data) =>{
    setSelected(data);
  }


  return (
    <div className="container">
      <Search onSearch={handleSearch}/>
        <div className="app">
        { selected ? <Detail target={selected} /> : <></> }
        <List pets={pets} onSelected={handleSelected}/>
      </div>
    </div>
  );
}

export default App;



