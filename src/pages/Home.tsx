import { Header } from "../components/Header";
import { NewTaskForm } from "../components/NewTaskForm";
import { TaskList } from "../components/TaskList";
import * as S from "../styles/global";

function Home() {
  return (
    <>
      <Header />
      <S.Container>
        <S.Row>
          <S.Column mobile={6} tablet={12} desktop={6}>
            <NewTaskForm />
          </S.Column>
          <S.Column mobile={6} tablet={12} desktop={6}>
            <TaskList />
          </S.Column>
        </S.Row>
      </S.Container>
    </>
  );
}

export default Home;
