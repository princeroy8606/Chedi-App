import axios from 'axios';

const API = axios.create({ baseURL: 'http://192.168.43.165:8000' });

export const signUp = (userdata: Object) => API.post('/auth/signup', userdata);

export const login = (userdata: Object) => API.post('/auth/login', userdata);


export const updateBookmark = (data: Object) => API.post('/plant/bookmark', data)

export const Bookmarks = (userId: String) => API.get(`/plant/bookmark/all/${userId}`)

export const newPlant = (plantData: Object) => API.post('/plant/new', plantData)

export const allPlants = (userId: String) => API.get(`/plant/${userId}`)

export const newPost = (formData: any) => API.post('/community/post', formData, { headers: { 'Content-Type': 'multipart/form-data' } })

export const getAllPost = () => API.get('/community/posts')