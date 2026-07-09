import { Semaforo } from "./semaforo";
import { SemaforoColgante } from "./SemaforoColgante";

export const Home = () => {
  return (
    <div className="semaforos-container">
      <Semaforo />
      <SemaforoColgante />
    </div>
  );
};