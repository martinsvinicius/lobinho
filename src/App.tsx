import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/index.routes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
