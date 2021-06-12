
import Head from '../components/head'
import Header from '../components/header/header'
import { useState } from "react";
import AppCtx from '../components/contexts/ctxGlobal';

export default function TugaFreela() {

  const [ isOpenMenu, setIsOpenMenu ] = useState(false)

  return (
    <>
      <Head title="Home" />
      
      <AppCtx.Provider value={{
          isOpenMenu, setIsOpenMenu
        }} >
          
          <Header />

        </AppCtx.Provider>
    </>
)}
