import { PeopleFromApi } from "../types/service"
import Image from "next/image"

interface PropsProfileUser {
    user: PeopleFromApi
    handleEdit : () => void
    handleShowTask: () => void
}

export const ProfileUser = ({user,handleEdit,handleShowTask}: PropsProfileUser) => {
    return(
        <article className=" w-auto  flex flex-col flex-wrap  p-3 bg-slate-300 rounded mt-2 gap-4" >
            <div className="flex items-center">
                <figure className=" shadow-md mx-3 rounded-2xl">
                    <Image 
                        src={user.picture}
                        alt={`Image user of ${user.fullName}`}
                        width={200}
                        height={200}
                        objectFit="contain"
                        className="rounded-2xl"
                    />
                </figure>
                <div className="ml-4">
                    <h2 className=" font-bold">{user.fullName}</h2>
                    <div className="flex">
                        <span className=" font-medium">NickName:</span>
                        <p className="ml-1">{user.nickname}</p>
                    </div>
                    <div className="flex">
                        <span className=" font-medium">Age:</span>
                        <p className="ml-1">{user.age}</p>
                    </div>
                    <div className="flex">
                        <span className=" font-medium">Occupation:</span>
                        <p className="ml-1">{user.occupation}</p>
                    </div>
                    <div className="flex">
                        <span className=" font-medium">Gender:</span>
                        <p className="ml-1">{user.gender}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="mx-3 bg-pink-700 p-3 rounded-xl text-white font-medium max-w-xs" onClick={handleEdit}>Edit Profile</button>
                <button className="mx-3 bg-pink-700 p-3 rounded-xl text-white font-medium max-w-xs" onClick={handleShowTask}>Show your tasks</button>
            </div>
        </article>
    )
}