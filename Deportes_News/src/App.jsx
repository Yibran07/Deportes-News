import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPAGE"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home page</h1>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/task' element={<h1>Pagina de tareas</h1>} />
          <Route path='/add-task' element={<h1>Nueva tarea</h1>} />
          <Route path='/tasks/:id' element={<h1>Actualizar tarea</h1>} />
          <Route path='/profile' element={<h1>Perfil</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App