import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/Store'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Homepage from './Pages/Homepage'
import Loginpage from './Pages/Loginpage'
import Signuppage from './Pages/Signuppage'
import NoteFound from './Pages/NoteFound'
import VerifyEmail from './Pages/VerifyEmail'
import Profilepage from './Pages/Profilepage'
import Aboutuspage from './Pages/Aboutuspage'
import Storepage from './Pages/Storepage'
import Reviewspage from './Pages/Reviewspage'
import Enquiriespage from './Pages/Enquiriespage'
import Connectuspage from './Pages/Connectuspage'
import ProductDetail from './Pages/ProductDetail'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster
          position='top-center'
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#ffffff',
              color: '#1f2937',
              padding: '16px 24px',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: '500',
              borderRadius: '8px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
              animation: 'slideIn 0.3s ease-out',
              border: '1px solid #e5e7eb',
              letterSpacing: '0.3px',
            },
            success: {
              style: {
                background: '#ffffff',
                color: '#065f46',
                borderLeft: '4px solid #10b981',
              },
              iconTheme: {
                primary: '#10b981',
                secondary: '#ecfdf5',
              },
            },
            error: {
              style: {
                background: '#ffffff',
                color: '#7c2d12',
                borderLeft: '4px solid #dc2626',
              },
              iconTheme: {
                primary: '#dc2626',
                secondary: '#fef2f2',
              },
            },
            loading: {
              style: {
                background: '#ffffff',
                color: '#1f2937',
                borderLeft: '4px solid #3b82f6',
              },
            },
          }}
        />
        <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(-12px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/login' element={<Loginpage />} />
              <Route path='/signup' element={<Signuppage />} />
              <Route path='/profile' element={<Profilepage />} />
              <Route path='/verify-email/:token' element={<VerifyEmail />} />
              <Route path='/aboutus' element={<Aboutuspage />} />
              <Route path='/store' element={<Storepage />} />
              <Route path='/reviews' element={<Reviewspage />} />
              <Route path='/enquiries' element={<Enquiriespage />} />
              <Route path='/connectus' element={<Connectuspage />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='*' element={<NoteFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App