import React from 'react'
import Home from './panel/homeScreen/home';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import AccountCriteria from './panel/screen/loginRagister'
import RagisterAccount from './panel/screen/ragister';
import BankTransfer from './panel/homeScreen/component/BankTransfer';
import Epin from './panel/homeScreen/component/Epin';
import TaskScreen from './panel/homeScreen/component/task';
import TeamScreen from './panel/homeScreen/component/team';
import DipositScreen from './panel/homeScreen/component/deposite';
import TransactionScreen from './panel/homeScreen/component/transation';
import TicketScreen from './panel/homeScreen/component/Ticket';
const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/" element={<AccountCriteria />} />
      <Route path="/ragister" element={<RagisterAccount />} />
      <Route path="/BankTransfer" element={<BankTransfer />} />
      <Route path="/Epin" element={<Epin />} />
      <Route path="/task" element={<TaskScreen />} />
      <Route path="/team" element={<TeamScreen />} />
      <Route path="/Deposit" element={<DipositScreen />} />
      <Route path="/transaction" element={<TransactionScreen />} />
      <Route path="/ticket" element={<TicketScreen />} />


    </Routes>
  )
}

export default App
