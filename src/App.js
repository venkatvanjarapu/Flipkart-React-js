import './App.css';
import './css/bootstrap.css'
import Header from './components/Header'
import Catog from './components/Catog';
import Form from './components/Form';
import React from 'react';
import Banner from './components/Banner';

function App() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row head'>
       <Header/>
      </div>
      <Catog/>
      <Banner/>
      <Form/>

    </div>
    </>
  )
}

export default App;