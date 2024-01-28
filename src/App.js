import React from 'react'
import Home from './panel/homeScreen/home';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import AccountCriteria from './panel/screen/loginRagister'
import RagisterAccount from './panel/screen/ragister';
import BankTransfer from './panel/homeScreen/component/BankTransfer';
import Epin from './panel/homeScreen/component/Epin';
import TaskScreen from './panel/homeScreen/component/task';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AccountCriteria />} />
      <Route path="/ragister" element={<RagisterAccount />} />
      <Route path="/BankTransfer" element={<BankTransfer />} />
      <Route path="/Epin" element={<Epin />} />
      <Route path="/task" element={<TaskScreen />} />

    </Routes>
  )
}

export default App
