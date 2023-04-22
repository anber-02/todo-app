import { useEffect, useState } from 'react'
import { fetchData } from '../services/todosServices'

export default function useTodos () {
  const [todos, setTodos] = useState([])

  useEffect(function () {
    fetchData()
      .then(res => setTodos(res))
      .catch(err => console.log(err))
  }, [])

  return { todos }
}
