import React from 'react'
import Home from './panel/homeScreen/home';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import AccountCriteria from './panel/screen/loginRagister'
import RagisterAccount from './panel/screen/ragister';
import DashBoard from './panel/homeScreen/main'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AccountCriteria />} />
      <Route path="/ragister" element={<RagisterAccount />} />
      <Route path="/DashBoard" element={<DashBoard />} />

    </Routes>
  )
}

export default App
