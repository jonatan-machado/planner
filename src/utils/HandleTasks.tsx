import { useState, useEffect } from 'react';
import { api } from '../services/api';

export function ListTask() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    api.get('planner-turma-jonatan-machado').then((response) => {
      setTask(response.data);
    });
  }, []);

  return task;
  m;
}

export function CreateTask(text: string, day: string) {
  const [task, setTask] = useState([]);

  interface body {
    text: string;
    day: string;
  }

  const body: body = {
    text: text,
    day: day,
  };

  useEffect(() => {
    api
      .post('planner-turma-jonatan-machado', body)
      .then((response) => {
        setTask(response.data);
      })
      .catch((e) => {
        console.log('erro');
      });
  }, []);

  return task;
}

export function DeleteTask(id: string) {
  useEffect(() => {
    api
      .delete(`planner-turma-jonatan-machado/${id}`)
      .then((response) => {
        return console.log('ok');
      })
      .catch((e) => {
        return console.log('deu ruim');
      });
  }, []);
}

export function EditTask(id: string, text: string, day: string) {
  const [task, setTask] = useState([]);

  interface body {
    text: string;
    day: string;
  }

  const body: body = {
    text: text,
    day: day,
  };

  useEffect(() => {
    api
      .put(`planner-turma-jonatan-machado/${id}`, body)
      .then((response) => {
        setTask(response.data);
      })
      .catch((e) => {
        console.log('deu ruim!');
      });
  }, []);
  return task;
}
