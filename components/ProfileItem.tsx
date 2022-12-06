import Image from "next/image"
import { PeopleFromApi } from "../types/service"

interface PropsProfileItem {
    profile: PeopleFromApi
    handleClick: () => void
}
export const ProfileItem = ({profile,handleClick}: PropsProfileItem) => {
    return (
        <article className="w-auto flex items-center p-3 bg-slate-300 rounded mt-2" onClick={handleClick}>
                <figure className=" shadow-md mx-3 ">
                    <Image 
                        src={profile.picture}
                        alt={`Image profile of ${profile.fullName}`}
                        width={100}
                        height={100}
                        objectFit="contain"
                    />
                </figure>
                <div>
                    <h2 className=" font-bold">{profile.fullName}</h2>
                    <div className="flex">
                        <span className=" font-medium">Age:</span>
                        <p className="ml-1">{profile.age}</p>
                    </div>
                    <div className="flex">
                        <span className=" font-medium">Occupation:</span>
                        <p className="ml-1">{profile.occupation}</p>
                    </div>

                </div>
            </article>
    )
}