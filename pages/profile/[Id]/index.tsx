import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Back, ProfileItem, ProfileUser, Table } from "../../../components"
import { usePersons, useTasks } from "../../../hooks"
import { TasksFromApi } from "../../../types/service"
import { getTasks } from "../../../services"

interface StateId {
    showTask: boolean
    tasks: TasksFromApi[]
}

 const Id = () => {
    const router = useRouter()
    const id = Number(router.query.Id)
    const {loading,findProfile} = usePersons()
    const {tasks,completed,updateCompleted} = useTasks(id)
    const profile= findProfile(id)
    const [toggleTask,setToggleTask]= useState<StateId['showTask']>(false)
    const goEditTask = (idT: number): void => {
        router.replace(`/tasks/${idT}/edit`)
    }
    return(
        <div className="m-4">
            <Back 
                handleClick={() => router.back()}
            />
            <h1 className="font-bold text-3xl text-gray-500">Profile Picture</h1>
            {loading ? 
                <span className=" text-2xl font-bold">Loading...</span>
                :
                   profile && 
                    <ProfileUser 
                        user={profile}
                        handleEdit={() => router.push(`${profile.id}/edit`)}
                        handleShowTask={() => setToggleTask(!toggleTask)}
                    />
            }
            {
                toggleTask ?
                    <section className="flex flex-col mt-4">
                        <h2 className="font-bold text-2xl text-gray-500 text-center">Table Task</h2>
                        <Table 
                            tasks={tasks}
                            handleCompletedTask={completed}
                            handleEditTask={goEditTask}
                        />
                    </section>
                    : !tasks && <p>You do not have any assigned tasks, would you like to create one?</p>
                }
        </div>
    )
}

export default Id