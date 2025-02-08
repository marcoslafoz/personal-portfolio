import { createBrowserRouter } from 'react-router-dom'
import { MainView } from '../../modules/views'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainView />,
    errorElement: <></>,
  },
])
