import { Header } from "../components/Header";
import { NewTaskForm } from "../components/NewTaskForm";

function Home() {
  return (
    <div className="home">
      <Header />
      <NewTaskForm />
    </div>
  );
}

export default Home;
