import { PeopleFromApi } from "../types/service";

export const putPeople = async (id:number,datas:PeopleFromApi) => {
    const endPoint = `http://localhost:3001/people/${id}`
    const response = await fetch(endPoint,{
        method: 'PUT',
        headers:{
            "content-Type": "application/json"
        },
        body: JSON.stringify(datas)
    })
    const data = await response.json()
    return data
}