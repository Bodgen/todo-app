import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:9999/'
})

export const tasksAPI = {
    getTasks() {
       return instance.get('tasks').then((response) => {
            return response.data
        })
    },
    deleteTask(taskId){
        return axios.delete(`http://localhost:9999/tasks/${taskId}`)
    }
}

