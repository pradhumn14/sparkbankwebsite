import React from 'react'
// import Dropdown from './Dropdown';
// import Navbar from './Navbar';
// import Product from './Product';
// import ProductList from './ProductList';
// import Footer from './Footer';
import Sidebar from './Sidebar';
import Assignment from './Assignment';
import Lecture from './Lecture';
import { Routes, Route } from 'react-router-dom';


// function App(props) {
//   const data=[
//     {
//           pic:"https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4-300x300.jpg",
//           category:"Mugs",
//           title:"Black Printed Coffe Mug",
//           rate: 15
//   },
//   {
//     pic:"https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4-300x300.jpg",
//           category:"Mugs",
//           title:"Father's Day Coffe Mug",
//           rate:19
//   },
//   {
//     pic:"https://thumbs.dreamstime.com/b/stack-t-shirts-15362354.jpg",
//           title:"Polo t-shirts",
//           category:"T-shirts",
//           rate:25
//   },
//   {
//     pic:"https://cdn.discordapp.com/attachments/992343608189526056/1002832090527711283/mug-white-4.jpeg",
//      category:"Mugs",
//           title:"Personalised Mug",
//           rate:15
//   },
//   {
//     pic:"https://thumbs.dreamstime.com/b/stack-t-shirts-15362354.jpg",
//           title:"Polo t-shirts",
//           category:"T-shirts",
//           rate:25
//   },
//   {
//     pic:"https://thumbs.dreamstime.com/b/stack-t-shirts-15362354.jpg",
//           title:"Polo t-shirts",
//           category:"T-shirts",
//           rate:25
//   },
//   {
//     pic:"https://cdn.discordapp.com/attachments/992343608189526056/1002832090527711283/mug-white-4.jpeg",
//      category:"Mugs",
//           title:"Personalised Mug",
//           rate:15
//   },
//   {
//     pic:"https://thumbs.dreamstime.com/b/stack-t-shirts-15362354.jpg",
//           title:"Polo t-shirts",
//           category:"T-shirts",
//           rate:25
//   }
// ]
function App() {
const path=window.location.pathname;
  return (
    // <>
    // <Navbar/>
    // <Dropdown/>
    // <ProductList products={data}/>
    // <Footer/>
    // </>
    <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route path='/assignment' element={<Assignment/>}></Route>
        <Route path='/lecture' element={<Lecture/>}></Route>
      </Routes>
    </div>
  )
}


export default App;