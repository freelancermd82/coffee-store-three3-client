
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CardCoffee from './components/CardCoffee';

function App() {

  const coffees = useLoaderData();

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-purple-500 text-center my-20'>Hot cold coffees: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CardCoffee
            key={coffee._id}
            coffee={coffee}
          ></CardCoffee>)
        }
      </div>
    </div>
  )
}

export default App
