import { Home } from "@/src/routes/home";
import { Route } from "wouter";
import { Perfil } from "./routes/perfil";
import { PageHome } from "./routes/pagehome";

export default function App() {
    return (
        <>
            <Route path="/" component={Home} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/Home" component={PageHome} />
        </>
    )
}