import { useState } from "react"
import {TasksFromApi } from "../types/service"
import { useRouter } from "next/router"
import {  useTasks } from "../hooks"

interface StateFormTasks {
    editValues: TasksFromApi
}
export const FormTask =  () => {
    const router = useRouter()
    const {IdT} = router.query
    const {loadingTasks,findTask,updateTask} = useTasks()
    const task = findTask(Number(IdT))
    const [inputValues,setInputValues] = useState<StateFormTasks['editValues']>(task)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target
        const currentValues = inputValues?{...inputValues}:{...task}
        if(name === 'completed'){
            let editValues = {...currentValues,[name]:value === 'completed' ? true : false}
            setInputValues(editValues)

        }else{
            let editValues = {...currentValues,[name]:value}
            setInputValues(editValues)
        }
    }
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        inputValues === undefined ? setInputValues(task) : null
        alert('Edited')
        updateTask(Number(IdT),inputValues)
        router.back()
    }
    console.log(inputValues)
    return(
        <main className="flex flex-col items-center">
            <h1 className="font-bold text-3xl text-gray-500">Edit Task</h1>
            {
                loadingTasks ? 
                    <span className=" text-2xl font-bold">Loading...</span>
                    :
                    task &&

                        <form className="bg-gray-200 sm: w-80 px-4 md:w-1/2 rounded-xl" onSubmit={(event) => handleSubmit(event)}>
                            <fieldset className="flex flex-col my-2">
                                <label htmlFor="title" className="text-gray-700 font-medium mb-1">Title</label>
                                <input className="bg-gray-400 px-2 py-1 rounded-md w-auto" type="text" id="title" name="title" onChange={handleChange} value={inputValues? inputValues.title: task.title} required/>
                            </fieldset>
                            <fieldset className="flex flex-col my-2">
                                <label htmlFor="description" className="text-gray-700 font-medium mb-1">Description</label>
                                <input className="bg-gray-400 px-2 py-1 rounded-md w-auto" type="text" id="description" name="description" onChange={handleChange} value={inputValues? inputValues.description: task.description} required/>
                            </fieldset>
                            <fieldset className="flex flex-col my-2">
                                <span className="text-gray-700 font-medium mb-1">Do you task is completed?</span>
                                <div>
                                    <label htmlFor="completed" className="text-gray-700 font-medium mb-1 ">
                                        <input className="mr-1" type="radio"  id="completed" name="completed" onChange={handleChange} value={'completed'} />
                                        Completed
                                    </label>
                                    <label htmlFor="notCompleted" className="text-gray-700 font-medium mb-1">
                                        <input className="mx-1" type="radio"  id="notCompleted" name="completed" onChange={handleChange} value={'notCompleted'} />
                                        Not completed
                                    </label>

                                </div>
                                
                            </fieldset>
                            <div className="flex justify-between my-4" >
                                <button type="button" className="mx-3 bg-pink-700 p-3 rounded-xl text-white font-medium w-32 sm:w-1/2 md:w-1/3" onClick={() => router.back()}>Cancel</button>
                                <input type="submit" className="mx-3 bg-pink-700 p-3 rounded-xl text-white font-medium w-32 sm:w-1/2 md:w-1/3" value={'Edit'}/>
                            </div>
                        </form>
            }

        </main>
    )
}

