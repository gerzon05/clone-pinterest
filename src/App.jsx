import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { PageHome } from "./components/PageHome";
import { Registro } from "./components/Registro";
import { IniciarSesion } from "./components/IniciarSesion";
import { AuthProvider } from "./context/authContext";
import { ProtectRoute } from "./components/ProtectRoute";
import { SavePin } from "./components/SavePin";

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
      </Routes>
    </AuthProvider>
  );
}

export default App;