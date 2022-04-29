import { Provider } from 'react-redux'
import store from '../redux/store'
import { ToastContainer } from 'react-toastify'

// STLING
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/scss/global.scss'
import Navigation from '../navigations'

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer
          position="bottom-left"
          theme="dark"
          autoClose={5000}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
        />
        <Navigation />
      </Provider>
    </>
  )
}

export default App
