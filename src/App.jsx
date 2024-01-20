import './App.css';
import Navbar from './components/navbar/Navbar';
import Social from './components/social/Social';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className='flex flex-col h-screen bg-white dark:bg-[#1E252B]'>
      <Navbar></Navbar>
      <div className='flex-1 overflow-auto '>
        <div className='h-full mx-8 sm:mx-12 lg:mx-60 flex flex-col gap-3'>
          <AppRouter></AppRouter>
        </div>
      </div>
      <Social></Social>
    </div>
  );
}

export default App;
