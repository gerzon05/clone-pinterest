import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { PageHome } from "./components/PageHome";
import { Registro } from "./components/Registro";
import { IniciarSesion } from "./components/IniciarSesion";
import { AuthProvider } from "./context/authContext";
import { ProtectRoute } from "./components/ProtectRoute";
import { SavePin } from "./components/SavePin";
import { MyPerfil } from "./components/MyPerfil";
import { Explorar } from "./components/explorar/explorar";
import { Dulces } from "./components/explorar/Dulces";
import { Frases } from "./components/explorar/Frases";
import { Futbol } from "./components/explorar/Futbol";
import { Carros } from "./components/explorar/Carros";
import { EditarPerfil } from "./components/EditarPerfil";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/sesion" element={<IniciarSesion />} />
        <Route
          path="/pagehome"
          element={
            <ProtectRoute>
              <PageHome />
            </ProtectRoute>
          }
        />
        <Route
          path="/savepin"
          element={
            <ProtectRoute>
              <SavePin />
            </ProtectRoute>
          }
        />
        <Route
          path="/mi-perfil"
          element={
            <ProtectRoute>
              <MyPerfil />
            </ProtectRoute>
          }
        />
        <Route
          path="/explorar"
          element={
            <ProtectRoute>
              <Explorar />
            </ProtectRoute>
          }
        />
        <Route
          path="/explorar/dulces"
          element={
            <ProtectRoute>
              <Dulces />
            </ProtectRoute>
          }
        />
        <Route
          path="/explorar/frases"
          element={
            <ProtectRoute>
              <Frases />
            </ProtectRoute>
          }
        />
        <Route
          path="/explorar/futbol"
          element={
            <ProtectRoute>
              <Futbol />
            </ProtectRoute>
          }
        />
        <Route
          path="/explorar/carros"
          element={
            <ProtectRoute>
              <Carros />
            </ProtectRoute>
          }
        />
        <Route
          path="/perfil/editarperfil"
          element={
            <ProtectRoute>
              <EditarPerfil nombre="" />
            </ProtectRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
