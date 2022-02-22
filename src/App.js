import { useDispatch, useSelector } from "react-redux";
import { mainUser } from "./actions";
import Index from "./Admin";

function App() {
  const user = useSelector((state) => state.allotuser);
  const dispatch = useDispatch();
  console.log(user);

  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
