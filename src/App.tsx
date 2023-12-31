import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './pages/home/home';
// import Home from './pages/home/home';
// import Home from './pages/home/home';
import Login from './components/sidebar/auth/login';
import SignUp from './components/sidebar/auth/signup';
import Layout from './layout';
import Expenses from './pages/expense/expense';
import Income from './pages/income/income';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/expense' element={<Expenses/>}/>
          <Route path='/income' element={<Income/>}/>

        </Routes>
        </Layout>
        <Routes>
        <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<SignUp/>}/>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
