import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import { LayoutContainer } from "./styles";

export function DefaultLayout(){
    return (
        <LayoutContainer>
            <Header/>
            <Outlet/> {/* Define onde vai ser carregado o layout da pagina que não é fixo como o Header */}
        </LayoutContainer>
    )
}