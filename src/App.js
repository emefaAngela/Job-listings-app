//imports
import './App.css';
import { Button } from './components/Button';
import { Job } from './components/Job';
import { Tag } from './components/Tag';
import { Logo } from './components/Logo';

//App component
function App() {
  return (
    <div className="w-full h-100vh bg-[color:hsl(180,31%,95%)]">
      <div className='w-full h-[8em]  bg-[color:hsl(180,29%,50%)]'></div>
      <Logo >New</Logo>
    </div>
  );
}

export default App;
