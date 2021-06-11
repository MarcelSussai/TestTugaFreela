
import Head from '../components/head'
import Header from '../components/header/header'
import { useState } from "react";
import AppCtx from '../components/contexts/ctxGlobal';

export default function TugaFreela() {

  const [ testeCtx, setTesteCtx ] = useState('teste')

  return (
    <>
      <Head title="Home" />
      
      <AppCtx.Provider value={{
          testeCtx, setTesteCtx
        }} >
          <Header />
          <p>{testeCtx}</p>
        </AppCtx.Provider>
    </>
)}
