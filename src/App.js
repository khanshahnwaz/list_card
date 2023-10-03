import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import { useState } from 'react';
import AddItem from './Components/AddItem';
import EditItem from './Components/EditItem';
function App() {
  const items=[
    {
      "description":"This is first list item",
      "photo":"./Assets/user1.jpg"
    },
    {
      "description":"This is second list item",
      "photo":"./Assets/user2.jpg"
    },
    {
      "description":"This is third list item",
      "photo":"./Assets/user3.jpg"
    },
    {
      "description":"This is fourth list item",
      "photo":"./Assets/user4.jpg"
    }
  ]
  const[addItem,setAddItem]=useState(false)
  const [listItem,setListItem]=useState(items)
  return (
    <>
    <AddItem listItem={listItem} setListItem={setListItem} addItem={addItem} setAddItem={setAddItem}/>
    
    <div className=" w-[80%]   mx-auto my-10">
     <div className=''>
      <button className='p-2 bg-white font-bold text-xl text-left rounded-xl ' onClick={()=>setAddItem(true)}>Add Item</button>
     </div>
     <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 w-full p-10'>
      {listItem.map((item,i)=>{
        return <Card key={i} data={item} index={i} list={listItem} setListItem={setListItem}/>
      })}
     </div>
    </div>
    </>
  );
}

export default App;
