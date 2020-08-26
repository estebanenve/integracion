import React from 'react';
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Data from './components/data'
import Charts from './components/charts'
function App() {
  return (
    <>
     <div id="wrapper">

     <Navbar />
   <Sidebar />

   <div class="content-page">
                <div class="content">

                    <div class="container-fluid">

   <Data/>

   <Charts/>
   </div>
   </div>
   </div>


    </div>
  
  
    </>
  );
}

export default App;
