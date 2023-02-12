import './App.css';
import Aside from './components/Aside';
import { Routes, Route } from 'react-router-dom'
import Courses from './layout/Courses';
import Materials from './pages/Materials';
import Submitted from './pages/Submitted';
import Waiting from './pages/Waiting';
import Late from './pages/Late';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';
import Ratings from './pages/Ratings';
import Anouncements from './layout/Anouncements';
import Schedule from './layout/Schedule';
import Notifications from './layout/Notifications';
import CoursesPage from './pages/CoursesPage';

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
          <Route path='/courses' element={<CoursesPage/>}>

            <Route path='materials' element={<Materials materials={materials}/>}>
              <Route path='submitted' element={<Submitted/>}/>
              <Route path='waiting' element={<Waiting/>}/>
              <Route path='late' element={<Late/>}/>
            </Route>

            <Route path='student' element={<Students students={students}/>}>
              <Route path='students/:id/details/' element={<StudentDetails students={students}/>}/>
            </Route>

            <Route path='ratings' element={<Ratings/>}/>
          </Route>


          <Route path='/anouncements' element={<Anouncements/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/schedule' element={<Schedule/>}/>
        </Routes>

        
    </div>
  );
}

export default App;
