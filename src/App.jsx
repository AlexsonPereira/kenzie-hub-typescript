import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterProvider } from './contexts/RegisterContext';
import { RoutesMain } from './routes';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle/>
      <RegisterProvider>
        <RoutesMain/> 
      </RegisterProvider>
    </>
  )
}

export default App
