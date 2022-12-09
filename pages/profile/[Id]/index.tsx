import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { ProfileItem, ProfileUser, Table } from "../../../components"
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
    const {tasks,completed} = useTasks(id)
    const profile= findProfile(id)
    const [toggleTask,setToggleTask]= useState<StateId['showTask']>(false)

    const goEditTask = (idT: number): void => {
        router.replace(`/tasks/${idT}/edit`)
    }
    return(
        <div>
            <h1>Profile Picture</h1>
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
                    <section >

                        <Table 
                            tasks={tasks}
                            handleCompletedTask={completed}
                            handleEditTask={goEditTask}
                        />
                    </section>
                    : toggleTask && <p>You do not have any assigned tasks, would you like to create one?</p>
                }
        </div>
    )
}

export default Id