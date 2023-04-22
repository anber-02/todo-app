import { HOST } from '../ipConfig'

export async function fetchData () {
  const response = await fetch(`${HOST}/todos/1`)
  const data = await response.json()
  return data
}
