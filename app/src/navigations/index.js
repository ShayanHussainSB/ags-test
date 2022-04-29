import { Route, Routes } from 'react-router-dom'
import WalletConnection from '../pages/authentication/wallet'

// PAGES
import Home from '../pages/home'
import ProtectedRoute from './protectedRoute'

export default function Navigation() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute redirectTo={'/wallet'}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/wallet" element={<Home />} />
    </Routes>
  )
}
