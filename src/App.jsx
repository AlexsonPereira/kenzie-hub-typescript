import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginProvider } from './contexts/LoginContext';
import ModalTechProvider from './contexts/ModalContext';
import { RegisterProvider } from './contexts/RegisterContext';
import { TechProvider } from './contexts/TechContext';
import { RoutesMain } from './routes';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
  return (
    <>
      <ToastContainer/>
      <GlobalStyle/>
      <RegisterProvider>
        <LoginProvider>
          <TechProvider>
            <ModalTechProvider>
              <RoutesMain/> 
            </ModalTechProvider>
          </TechProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  )
}

export default App
