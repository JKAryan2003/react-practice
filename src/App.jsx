import Two1 from "./components/AddingInteractivity/Two1";
import Two2 from "./components/AddingInteractivity/Two2";
import Two3 from "./components/AddingInteractivity/Two3";
import Two4 from "./components/AddingInteractivity/Two4";
import Two5 from "./components/AddingInteractivity/Two5";
import { One1 } from "./components/DescribingUI/One1";
import One2 from "./components/DescribingUI/One2";
import One3 from "./components/DescribingUI/One3";
import One4 from "./components/DescribingUI/One4";
import One5 from "./components/DescribingUI/One5";
import Three1 from "./components/ManagingState/Three1";
import Three2 from "./components/ManagingState/Three2";
import Three3 from "./components/ManagingState/Three3";
import Three4 from "./components/ManagingState/Three4";
import "./App.css"
import Four1 from "./components/EscapeHatches/Four1";
import Four2 from "./components/EscapeHatches/Four2";
import Three5 from "./components/ManagingState/Three5";
import Three6 from "./components/ManagingState/Three6";
import Four3 from "./components/EscapeHatches/Four3";
import Four4 from "./components/EscapeHatches/Four4";
import Four5 from "./components/EscapeHatches/Four5";
import One from "./components/Practice/One";
import Two from "./components/Practice/Two";
import Three from "./components/Practice/Three";
import Four from "./components/Practice/Four";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Router/Home";
import NavBar from "./components/Router/NavBar";
import Params from "./components/Router/Params";
import NotFound from "./components/Router/NotFound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
        <NavBar />
        <Home />
      </div>
    },

    {
      path: "/four1",
      element: 
      <div>
        <NavBar />
        <Four1 />
      </div>
    },

    {
      path: "/four2",
      element: 
      <div>
        <NavBar />
        <Four2 />
      </div>
    },

    {
      path: "/four3",
      element: 
      <div>
        <NavBar />
        <Four3 />
      </div>,
      children: [
        {
          path: 'three1',
          element: 
          <div>
            <NavBar />
            <Three1 />
          </div>
        }
      ]
    },

    {
      path: "/student/:id",
      element: 
      <div>
        <NavBar />
        <Params />
      </div>
    }, 

    {
      path: '*',
      element: <NotFound />
    }
  ]
)

export default function App() {

  return (
    <>
      {/* <One1 person={{name: "Maria Skłodowska-Curie",
        imageId: 'szV5sdG',
        profession: "physicist and chemist",
        awards: "4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
        discovered: "polonium (chemical element)"
      }} />
      <One1 person={{name: "Katsuko Saruhashi",
        imageId: 'YfeOqp2',
        profession: "geochemist",
        awards: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
        discovered: "a method for measuring carbon dioxide in seawater"
      }} />  */}
      {/* <One2 /> */}
      {/* <One3 /> */}
      {/* <One4 /> */}
      {/* <One5 /> */}

      {/* <Two1 /> */}
      {/* <Two2 /> */}
      {/* <Two3 /> */}
      {/* <Two4 /> */}
      {/* <Two5 /> */}

      {/* <Three1 /> */}
      {/* <Three2 /> */}
      {/* <Three3 /> */}
      {/* <Three4 /> */}
      {/* <Three5 /> */}
      {/* <Three6 /> */}

      {/* <Four1 /> */}
      {/* <Four2 /> */}
      {/* <Four3 /> */}
      {/* <Four4 /> */}
      {/* <Four5 /> */}

      {/* <One />
      <One />
      <One /> */}
      {/* <Two /> */}
      {/* <Three /> */}
      {/* <Four /> */}
      
      <RouterProvider router={router}></RouterProvider>
    </>
  )
 
}