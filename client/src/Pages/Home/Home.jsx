import Countries from "../../components/Countries/Countries";
import Finders from "../../components/Finders/Finders/Finders";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar/>
        <Finders />
        <Countries />
      </div>
    </div>
  );
}
