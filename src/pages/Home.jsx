import Form from "../components/Form";
import Recipies from "../components/Recipies";
import DrawerMenu from "../components/Drawer";

function Home() {
  return (
    <div>
      <DrawerMenu />
      <Form />
      <Recipies />
    </div>
  );
}

export default Home;
