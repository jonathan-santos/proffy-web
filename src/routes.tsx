import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/landing'
import TeacherForm from './pages/teacherForm'
import TeacherList from './pages/teacherList'

const Routes = () => (
  <BrowserRouter>
    <Route path='/' component={Landing} exact />
    <Route path='/study' component={TeacherList} exact />
    <Route path='/give-classes' component={TeacherForm} exact />
  </BrowserRouter>
)

export default Routes
