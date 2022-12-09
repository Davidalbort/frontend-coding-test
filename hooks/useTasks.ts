import { useEffect, useState } from "react"
import { getTasks, putTasks } from "../services"
import { TasksFromApi } from "../types/service"

export const useTasks = (id?:number) => {
    const [loadingTasks,setLoadingTasks] = useState<boolean>(false)
    const [tasks,setTasks]= useState<TasksFromApi[]>([])
    useEffect(() =>{
        setLoadingTasks(true)
        getTasks()
            .then(response => {
                if(id){
                    const task =response.filter(task => task.personId === id)
                    const newTask = updateCompleted(task)
                    setTasks(newTask)
                    setLoadingTasks(false)
                }else{
                    setTasks(response)
                    setLoadingTasks(false)

                }
            })
    },[id])
    const completed = (id: number): void => {
        const newTask = [...tasks]
        const findIndex = newTask.findIndex(task => task.id === id)
        newTask[findIndex].completed = newTask[findIndex].completed ? false : true
        setTasks ( newTask)
    }
    const findTask = (id: number): TasksFromApi => {
        const newTasks = [...tasks]
        const task = newTasks.find(task => task.id === id)
        return task
    }
    const updateTask= (id:number,datas: TasksFromApi): void => {
        putTasks(id,datas)
    }
    const updateCompleted = (datas: TasksFromApi[]):TasksFromApi[] => {
        const currentDate = new Date();
        const currentAge = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth()+1;
        const currentDay = currentDate.getDate();
        console.log(currentDay,currentMonth,currentAge)
        const newDatas= datas.map((task,index) => {
            if(task.endDate){
    
                const taskYear = parseInt(String(task.endDate).substring(0,4));
                const taskMonth = parseInt(String(task.endDate).substring(5,7));
                const taskDay = parseInt(String(task.endDate).substring(8,10));
                let presentAge = currentAge-taskYear;
                if (currentMonth<taskMonth){
                  presentAge--;
                }else if (currentMonth === taskMonth){
                  if(currentDay>taskDay){
                    presentAge--;
                  }
                }
                
                const taskCompleted = presentAge< 0 ? true : false
                return {...task,completed: taskCompleted}
            }else{
                return task
            }
        })
        return newDatas
    
    
    
      }
    return {tasks,completed,loadingTasks,findTask,updateTask, updateCompleted,updateTask}
}
