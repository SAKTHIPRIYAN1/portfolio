import MainEl from "./home";
import SideBar from "./sidebar";

const App=()=>{
  return (
   
    <div className="h-full min-h-full  w-full min-w-full">
      <SideBar />
      <MainEl />
    </div>

  )
}

export default App;