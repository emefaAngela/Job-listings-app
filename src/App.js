// App Component
import './App.css';
import Job from './components/Job';
import { useEffect, useState } from 'react';
import { tw } from './utils/tailwind';
import ActiveFilter from './components/ActiveTag';


//App component
function App() {
  // States
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  // Getting filters
  const roleFilters = [...new Set(originalData.map((value) => value.role))];
  const languageFilters = [...new Set(originalData.flatMap((value) => value.languages ? value.languages : []))];
  const levelFilters = [...new Set(originalData.map((value) => value.level))];
  const filters = [...roleFilters, ...languageFilters, ...levelFilters];
  console.log(filters);

  // Handling filter clicks
  const handleFilterClick = (filter) => {
    setActiveFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  // Filtering data based on active filters
  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredData(originalData);
    } else {
      const filteredData = originalData.filter((value) => {
        return activeFilters.every((filter) =>
          value.role === filter ||
          value.languages.includes(filter) ||
          value.level === filter
        );
      });
      setFilteredData(filteredData);
    }
  }, [activeFilters, originalData]);

  // Getting json data
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setOriginalData(myJson);
        setFilteredData(myJson);
      });
  };

  // Fetching data on initial render
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={tw(
      'w-full h-full overflow-y-auto',
      ' absolute overflow-x-hidden ' ,
      'bg-[hsl(180,52%,96%)]'
      )}>
      <div className={tw(
        'w-full    h-[8em]',
        'bg-[color:hsl(180,29%,40%)]',
        'flex flex-row space-x-8'
        )}>
          <div className={tw(
            'w-48 h-96 rounded-full',
            'bg-[color:hsl(180,29%,50%)]',
            'absolute rotate-45 -top-[228px] -left-8'
          )}>
          </div>
          <div className={tw(
            'w-48 h-96 rounded-full',
            'bg-[color:hsl(180,29%,50%)]',
            'relative rotate-45 -top-[305px] left-64'
          )}>
          </div>
          <div className={tw(
            'sm:w-48 sm:h-96 sm:rounded-full',
            'sm:bg-[color:hsl(180,29%,50%)]',
            'sm:absolute sm:rotate-45 sm:-top-[220px]  sm:left-[980px]'
          )}>
          </div>
          <div className={tw(
            'sm:w-48 sm:h-96 sm:rounded-full',
            'sm:bg-[color:hsl(180,29%,50%)]',
            'sm:absolute sm:rotate-45  sm:-top-[196px]  sm:left-[1254px]'
          )}>
          </div>

      </div>
      <div className={tw(
        'absolute flex top-0 flex-col',
        'w-10/12  my-24 mx-8 sm:mx-32',
        'justify-center items-center',
        ''
        )}>
        <div className={tw(
          'rounded-md h-[4em] w-full',
          'flex flex-row justify-between items-center',
          'px-4',
          'bg-[white]'
          )}>
          <div className='flex flex-row w-10/12 overflow-ellipsis space-x-4'>
            {activeFilters.map((filter)=>
            <ActiveFilter 
            filter={filter}
            handleFilterClick={handleFilterClick}
            />
            )}
          </div>
          <p className={tw(
            'underline text-[color:hsl(180,29%,50%)]',
            'cursor-pointer'
            )} 
            onClick={()=>{setActiveFilters([])}}
            >
              Clear
          </p>
        </div>
        <div className={tw(
          'w-full my-8 '
          )}>
          {filteredData.map((item) =>
             <Job 
             key={item.id} 
             handleFilterClick={handleFilterClick} 
             jobItem={item}
              />
            )}
        </div>
      </div>
    </div>
  );
}

export default App;