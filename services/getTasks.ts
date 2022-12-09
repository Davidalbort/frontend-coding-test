import { TasksFromApi } from "../types/service"


export const getTasks = async (): Promise<TasksFromApi[]> => {
    const response = await fetch('http://localhost:3001/tasks')
    const data = await response.json()
    return data
}