import {
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckIcon from '@mui/icons-material/Check';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    if (!newTaskTitle) return;
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
    setNewTaskTitle('');
  }

  function handleToggleTaskCompletion(id: number) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    // let taskToChange = tasks.find((task) => task.id === id)
    // if (!taskToChange) return
    // const taskFiltered = tasks.filter((task) => task.id !== id)
    // taskToChange.isComplete = !taskToChange?.isComplete
    // setTasks([...taskFiltered, taskToChange])

    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );
    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <Box alignItems='center' width='100%'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        pb={2}
      >
        <FormControl variant='standard' style={{ width: '100%' }}>
          <Input
            placeholder='New task'
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={handleCreateNewTask}>
                  <CheckIcon color='primary' />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <Grid container>
        <Grid item xs={12}>
          {tasks.map((task) => (
            <Box
              key={task.id}
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              py={1}
            >
              <FormControl variant='standard' style={{ width: '100%' }}>
                <Input
                  defaultValue={task.title}
                  startAdornment={
                    <InputAdornment position='start'>
                      <Checkbox
                        color='primary'
                        onClick={() => handleToggleTaskCompletion(task.id)}
                      />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={() => handleRemoveTask(task.id)}
                        onMouseDown={() => handleRemoveTask(task.id)}
                      >
                        <DeleteOutlineIcon color='primary' />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
