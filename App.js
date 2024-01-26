import { PaperProvider } from "react-native-paper";
import Login from "./Login";


export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}


