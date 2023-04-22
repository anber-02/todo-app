import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import Constants from 'expo-constants'
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import 'react-native-gesture-handler'
import 'react-native-reanimated'

import Task from './src/components/Task'
import { fetchData } from './src/services/todosServices'

export default function App () {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchData().then(res => {
      setTodos(res)
      console.log(res)
    })
  }, [])

  function clearTodo (id) {
    setTodos(todos.filter((todo) => {
      return todo.id !== id
    }))
  }
  function toggleTodo (id) {
    setTodos(
      todos.map(todo => todo.id === id
        ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
        : todo)
    )
  }
  return (

    <BottomSheetModalProvider>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={todos}
          keyExtractor={(todo) => todo.id}
          renderItem={({ item }) => <Task {...item} toggleTodo={toggleTodo} clearTodo={clearTodo} />}
          ListHeaderComponent={() => <Text style={styles.title}>Today</Text>}
          contentContainerStyle={styles.contentContainerStyle}
        />
        {/* <Text>{JSON.stringify(todos, null, 2)}</Text> */}
      </SafeAreaView>
    </BottomSheetModalProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff'
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 15
  },
  contentContainerStyle: {
    padding: 15
  }
})
