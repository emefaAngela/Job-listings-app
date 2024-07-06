//imports
import './App.css';
import { Button } from './components/Button';
import  Job  from './components/Job';
import { Tag } from './components/Tag';
import { Logo } from './components/Logo';
import { useEffect,useState } from 'react';

//App component
function App() {

//State to store data
const [data,setData]=useState([]);

//Getting json data
const getData=()=>{
  fetch('data.json',
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
  .then(function(response){
    console.log(response)
    return response.json()
  })
  .then(function(myJson) {
    console.log(myJson);
    setData(myJson)
  });
}

//fetching data on each render
useEffect(()=>{
  getData()
},[])

  return (
    <div className="w-full h-100vh bg-[color:hsl(180,31%,95%)]">
      <div className='w-full h-[8em]  bg-[color:hsl(180,29%,50%)]'></div>
      <div className='absolute flex  w-10/12 top-0 flex-col  my-24 mx-8 sm:mx-32  justify-center items-center'>
          <div className=' rounded-sm h-[4em] w-full flex flex-row justify-between items-center px-4 bg-[color:hsl(180,31%,95%)]'>
            <div></div>
            <p className='underline text-[color:hsl(180,29%,50%)] '>Clear</p>
          </div>
          <div>
            {
              data.map((item)=><Job key={item.id} jobItem={item}></Job>)
            }
          </div>
      </div>
    </div>
  );
}

export default App;
