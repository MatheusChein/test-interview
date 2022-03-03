import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Photos } from '../pages/Photos';

export function RoutesComponent() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/album/:id' element={<Photos />}/>
    </Routes>
  )
}