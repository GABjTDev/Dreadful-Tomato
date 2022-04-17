import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../Components/Home";
import Footer from "../Components/Footer";
import Catalog from '../Components/Catalog';
import Error from '../Components/Error';


const RoutePublic = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route exact path="/">
                    <Route index element={<Home />} />
                    <Route exact path="catalog/:type" element={<Catalog />}></Route>
                </Route>
                <Route path="*" element={<Error />}/>
            </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default RoutePublic