import './App.css';
import Aside from './components/Aside';
import { Routes, Route } from 'react-router-dom'
import Materials from './pages/Materials';
import Submitted from './pages/Submitted';
import Waiting from './pages/Waiting';
import Late from './pages/Late';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';
import Ratings from './pages/Ratings';
import CoursesPage from './pages/CoursesPage';
import AnouncementsPage from './pages/AnouncementsPage';
import NotificationPage from './pages/NotificationPage';
import SchedulePage from './pages/SchedulePage';
import MaterialDetails from './pages/MaterialDetails';

const materials = [
  {
    id: 1,
    title: "Material 1"
  },
  {
    id: 2,
    title: "Material 2"
  },
  {
    id: 3,
    title: "Material 3"
  },
]


const students = [
  {
    id: 1,
    studentName: 'Student Name 1'
  },
  {
    id: 2,
    studentName: 'Student Name 2'
  },
  {
    id: 3,
    studentName: 'Student Name 3'
  }
]

function App() {
  return (
    <div style={{display: "flex"}}>
        <Aside/>

        <Routes>
          <Route path='/courses/' element={<CoursesPage/>}>

            <Route path='materials/' element={<Materials materials={materials}/>}/>
            <Route path='materials/:id/details/' element={<MaterialDetails  materials={materials}/>}>
              <Route path='submitted' element={<Submitted/>}/>
              <Route path='waiting' element={<Waiting/>}/>
              <Route path='late' element={<Late/>}/>
            </Route>

            <Route path='students/' element={<Students students={students}/>}/>
              <Route path='students/:id/details/' element={<StudentDetails students={students}/>}/>

            <Route path='ratings' element={<Ratings/>}/>
          </Route>


          <Route path='/anouncements' element={<AnouncementsPage/>}/>
          <Route path='/notifications' element={<NotificationPage/>}/>
          <Route path='/schedule' element={<SchedulePage/>}/>
          <Route path='*' element={<h2 style={{color: 'red'}}>ERROR 404 - NOT FOUND</h2>}/>
        </Routes>

        
    </div>
  );
}

export default App;
