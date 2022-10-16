import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalTechProvider from './contexts/ModalContext';
import { RegisterProvider } from './contexts/RegisterContext';
import { RoutesMain } from './routes';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle/>
      <RegisterProvider>
        <ModalTechProvider>
          <RoutesMain/> 
        </ModalTechProvider>
      </RegisterProvider>
    </>
  )
}

export default App
