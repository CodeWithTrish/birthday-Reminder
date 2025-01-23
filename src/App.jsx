import { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {

  const [people, setPeople] = useState(data);

  const handleClear = () => {
    setPeople([])
  }

  return(
   <main>
    <section className='container'>
      <h3>{people.length} birthdays today!</h3>
      <List people={people}></List>
      <button type='button' className='btn btn-clock' onClick={handleClear}>
      Clear All
    </button>
    </section>
   
  </main>
  )
  // data.map((people)=>{
  //   console.log(item, "people")
  //   const {id, name, age, image} = people
  //   return (
  //     <div key={id}>
  //       <h2>{name}</h2>
  //       <h3>{age}</h3>
  //       <img src={img}>Image</img>
      
      
  //     </div>
  //   )
  // })

};
export default App;
