import { TasksFromApi } from "../types/service";

export const putTasks = async (id:number,datas:TasksFromApi) => {
    const endPoint = `http://localhost:3001/tasks/${id}`
    const response = await fetch(endPoint,{
        method: 'PUT',
        headers:{
            "content-Type": "application/json"
        },
        body: JSON.stringify(datas)
    })
    const data = await response.json()
    return data
}