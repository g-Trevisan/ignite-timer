import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout(){
    return (
        <div>
            <Header/>
            <Outlet/> {/* Define onde vai ser carregado o layout da pagina que não é fixo como o Header */}
        </div>
    )
}