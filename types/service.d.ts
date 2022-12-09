export interface PeopleFromApi {
    id: number
    fullName: string
    age: number
    occupation: string
    nickname: string
    gender: string
    picture: string
}

export interface TasksFromApi {
    id: number
    title: string
    description: string
    completed: boolean
    startDate: Date | null
    endDate: Date | null
    personId: number

}