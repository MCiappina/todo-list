import { Header } from "../components/Header";
import { NewTaskForm } from "../components/NewTaskForm";
import { TaskList } from "../components/TaskList";

function Home() {
  return (
    <div className="home">
      <Header />
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default Home;
