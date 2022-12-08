import { TasksFromApi } from "../types/service"
import { FaCheck } from 'react-icons/fa'
import { MdModeEdit } from 'react-icons/md'

interface PropsTable {
    tasks:TasksFromApi[]
    handleCompletedTask: (Id: number) => void
    handleEditTask: (Id: number) => void
}
export const Table = ({tasks,handleCompletedTask,handleEditTask}: PropsTable) => {
    return(
        <div className="mx-4 overflow-auto ">
            <table className=" w-auto border-separate text-center table-auto m-auto">
                <thead>
                    <tr className=" border border-gray-900 bg-pink-700 text-white">
                        <th className="p-1">Task</th>
                        <th className="p-1">Description</th>
                        <th className="p-1">StartDate</th>
                        <th className="p-1">EndDate</th>
                        <th className="p-1">Status</th>
                        <th className="p-1">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task,index) => (
                            <tr key={`${task.id} ${task.title}`} className="text-xs text-gray-500 font-bold">
                                <td className="border-separate border border-gray-700 p-3">{task.title}</td>
                                <td className="border-separate border border-gray-700 p-3">{task.description}</td>
                                <td className="border-separate border border-gray-700 p-3">{String(task.startDate)}</td>
                                <td className="border-separate border border-gray-700 p-3">{String(task.endDate)}</td>
                                <td className={task.completed? "border-separate border border-gray-700 p-3 bg-lime-500":"border-separate border border-gray-700 p-3"}>{task.completed ? 'Completed' : 'Not completed'}</td>
                                <td className="border-separate border border-gray-700 p-3 " data-task={task}>
                                    <div className="flex justify-between">
                                        <FaCheck className={task.completed? 'text-lime-500 cursor-pointer hover:scale-125': 'hover:scale-125 cursor-pointer'} size='15' onClick={() => handleCompletedTask(task.id)}/>
                                        <MdModeEdit className="cursor-pointer hover:scale-125" size='15' onClick={() => handleEditTask(task.id)}/>
                                    </div>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}