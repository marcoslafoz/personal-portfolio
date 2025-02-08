import { RouterProvider } from 'react-router'
import { router } from '../common/router'

export const App: React.FC = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}
