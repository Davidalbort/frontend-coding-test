import { useState } from "react"
import { PeopleFromApi } from "../types/service"
import { useRouter } from "next/router"
import { usePersons } from "../hooks"

interface StateFormProfile {
    editValues: PeopleFromApi
}
export const FormProfile =  () => {
    const router = useRouter()
    const {Id} = router.query
    const {loading,findProfile, updateProfile} = usePersons()
    const profile = findProfile(Number(Id))
    const [inputValues,setInputValues] = useState<StateFormProfile['editValues']>(profile)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target
        const currentValues = inputValues?{...inputValues}:{...profile}
        let editValues = {...currentValues,[name]:value}
        setInputValues(editValues)
    }
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        inputValues === undefined ? setInputValues(profile) : null
        alert('Edited')
        updateProfile(Number(Id),inputValues)
        router.replace(`/profile/${Id}`)
    }
    return(
        <main className="flex flex-col items-center">
            <h1 className="font-bold text-3xl text-gray-500">Edit Profile</h1>
            {
                loading ? 
                    <span className=" text-2xl font-bold">Loading...</span>
                    :
                    profile &&

                        <form className="bg-gray-200 sm: w-80 px-4 md:w-1/2 rounded-xl" onSubmit={(event) => handleSubmit(event)}>
                            <fieldset className="flex flex-col my-2">
                                <label htmlFor="fullName" className="text-gray-700 font-medium mb-1">FullName</label>
                                <input className="bg-gray-400 px-2 py-1 rounded-md w-auto" type="text" id="fullName" name="fullName" onChange={handleChange} value={inputValues? inputValues.fullName: profile.fullName} required/>
                            </fieldset>
                            <fieldset className="flex flex-col my-2">
                                <label htmlFor="age" className="text-gray-700 font-medium mb-1">Age</label>
                                <input className="bg-gray-400 px-2 py-1 rounded-md w-auto" type="number" id="age" name="age" onChange={handleChange} value={inputValues? inputValues.age: profile.age} required/>
                            </fieldset>
                            <fieldset className="flex flex-col my-2">
                                <label htmlFor="occupation" className="text-gray-700 font-medium mb-1">Occupation</label>
                                <input className="bg-gray-400 px-2 py-1 rounded-md w-auto" type="string" id="occupation" name="occupation" onChange={handleChange} value={inputValues? inputValues.occupation: profile.occupation} required/>
                            </fieldset>
                            <fieldset className="flex flex-col my-2">
                                <label htmlFor="picture" className="text-gray-700 font-medium mb-1">Picture</label>
                                <input className="bg-gray-400 px-2 py-1 rounded-md w-auto" type="url" id="picture" name="picture" onChange={handleChange} value={inputValues? inputValues.picture: profile.picture} required/>
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

