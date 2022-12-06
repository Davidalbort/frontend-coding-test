import { PeopleFromApi } from "../types/service"

export const getPeople = async():Promise<PeopleFromApi[]> => {
    const response = await fetch('http://localhost:3001/people')
    const data = await response.json()
    return data
}