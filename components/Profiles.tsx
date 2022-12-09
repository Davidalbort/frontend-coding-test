import { usePersons } from "../hooks"
import { Filter } from "./Filter"
import { ProfileItem } from "./ProfileItem"
import { useRouter } from 'next/router'



export const Profiles = () => {
    const router= useRouter()
    const {loading,persons,sortBy} = usePersons()
    const handleChange =  (event) => {
        const name= event.target.value
        
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