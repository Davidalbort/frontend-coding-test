import { useState, useEffect } from "react"
import { getPeople, putPeople } from "../services"
import { PeopleFromApi } from "../types/service"

const INITIAL_STATE = [{
    age: 32,
    fullName:   "",
    gender: "",
    id: 1,
    nickname: "",
    occupation: "",
    picture:"",
}]

export const usePersons = ( ) => {
    const [loading,setLoading]=useState<boolean>(false)
    const [persons,setPersons]=useState<PeopleFromApi[]>([])
    useEffect(() => {
        setLoading(true)
        getPeople()
            .then(response => {
                response.sort((a,b) => {
                    if(a.age > b.age){
                        return 1
                    }
                    if(a.age < b.age){
                        return -1
                    }
                    return 0
                })
                setPersons(response)
                setLoading(false)
                
            })
        
        
        },[])
    const sortBy = (sort) => {
        const newSort = [...persons]
        if(sort ==='age'){
            newSort.sort((a,b) => {
                if(a.age > b.age){
                    return 1
                }
                if(a.age < b.age){
                    return -1
                }
                return 0
            })
        }else{
            newSort.sort((a,b) => {
                if(a.fullName < b.fullName){
                    return -1
                }
                if(a.fullName > b.fullName){
                    return 1
                }
                return 0
            })
        }
        setPersons(newSort)
    }
    const findProfile = (id:number):PeopleFromApi => {
        const newPersons = [...persons]
        const profile = newPersons.find(person => person.id === id)
        return profile
    }
    const updateProfile =(id:number,datas:PeopleFromApi):void => {
        putPeople(id,datas)
    }
    return { loading,persons, sortBy, findProfile,updateProfile}
}


