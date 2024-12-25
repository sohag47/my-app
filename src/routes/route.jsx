/** @format */

import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../app/home";
import About from "../app/about";

export default function Routers() {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        {/* <Route path='/' element={<RootLayout />}>
          <Route index={true} element={<Dashboard />} />
        </Route> */}
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />

        <Route path='*' element={<> 404 Not Found Page!</>} />
      </Routes>
    </Suspense>
  );
}
