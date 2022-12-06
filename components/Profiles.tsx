import { usePersons } from "../hooks"
import { Filter } from "./Filter"
import { ProfileItem } from "./ProfileItem"
import { useState } from "react"
import { useRouter } from 'next/router'


interface StateProfiles {
    sort: string
}
export const Profiles = () => {
    const router= useRouter()
    const [name,setName]=useState('hi')
    const {loading,persons,sortBy} = usePersons()
    const handleChange = async (event) => {
        const name= await event.target.value
        
        sortBy(name)
    }
    
    return(
        <main>
            <Filter 
                onChange={handleChange}
            />
        <ul>
            
            {loading ? 
                <span className=" text-2xl font-bold">Loading...</span>
                :
                persons.map((person => (
                    <ProfileItem 
                        profile={person}
                        key={person.id}
                        handleClick={() => router.push(`profile/${person.id}`)}
                    />
                )))
                 }

        </ul>
        </main>
    )
}