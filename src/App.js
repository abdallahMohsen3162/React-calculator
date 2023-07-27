
import { useState } from 'react';
import './App.css';

function App() {
  const [show, setshow] = useState("");
  const [res, setres] = useState("");
  let arr = ['0','1','2','3','4','5','6','7','8','9', '(' , ')', '%', 'AC', 'DEL'];
  let oarr = [' - ',' + ',' / ',' * ', '=']

  let handle_input = (e) => {
      if(e === "AC"){
          setshow("");
          setres("");
          return;
      }


      if(e === "DEL"){
        let x = show.slice(0, show.length - 1);
        
        setshow(x);
        return;
    }


      if(e === '=' && show){
        let x = eval(show);
        
        setres(x);
        
        return;
      }

      if(e !== '='){
        setshow(show + e);
      }

  }

  return (
    <div className='container'>
      <div className='results'> 
      {show}
      <span className='res'>
        {res}
      </span>
      </div>

      <div className='input'>
        <div className='numbers'>
          {
            arr.map((el)=>{
              return(
                <button className='btn' onClick={()=>{handle_input(el)}}>{el}</button>
              )
            })
          }
        </div>

        <div className='operations'>
            {
              oarr.map((el)=>{
                return(
                  <button onClick={()=>{handle_input(el)}}>{el}</button>
                )
              })
            }
        </div>
      </div>

      
    </div>
  );
}

export default App;
