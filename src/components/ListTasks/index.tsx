import React, { useState } from 'react';
import { ListTask } from '../../utils/HandleTasks';
// import { Container } from './styles';

const ListTasks: React.FC = () => {
  const [task, setTask] = useState([]);

  loadTask();
  async function loadTask() {
    const datas = await ListTask();
    setTask(datas);
  }

  interface d {
    day: string;
    text: string;
    id: string;
  }

  return (
    <>
      {task.length !== 0 ? (
        task.map((d: d) => (
          <div data-testid="list" key={d.id}>
            <p>{d.day}</p>
            <p> {d.text}</p>
            <p> {d.id}</p>
          </div>
        ))
      ) : (
        <h1>Nenhuma dado para mostrar</h1>
      )}
    </>
  );
};

export default ListTasks;
