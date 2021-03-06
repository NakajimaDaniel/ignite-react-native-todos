import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    setTasks([...tasks, {id: new Date().getTime(), title: newTaskTitle, done: false}]);
  }

  function handleToggleTaskDone(id: number) {

    const newTasks = tasks.map(item => {
      if(item.id === id) {
        return {...item, done: !item.done}
      }

      return item
    })

    setTasks(newTasks)

  }
  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const newTasks = tasks.filter(item => {
      if (item.id != id) {
        return item
      }
    })
    setTasks(newTasks)

  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})