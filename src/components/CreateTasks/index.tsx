import React from 'react';

import { CreateTask } from '../../utils/HandleTasks';

const CreateTasks: React.FC = () => {
  function changeName() {}

  function changeActivity() {}

  function HandleTasks() {}

  return (
    <>
      <form onSubmit={HandleTasks}>
        <label htmlFor="activity">Atividade</label>
        <input type="text" name="activity" value={} />
        <label htmlFor="day">Dia</label>
        <input type="text" name="day" value={} />
        <button type="button">Cadastrar</button>
      </form>
    </>
  );
};

export default CreateTasks;
