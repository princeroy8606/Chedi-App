import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../../api/plantId-api'

import * as api_server from '../../../api/server-api';


export const searchQuery = createAsyncThunk('plant/search', async (query: String) => {
    console.log(query)
    try {
        const { data } = await api.searchPlant(query)
        if (data?.entities[0].access_token) {
            const response = await api.getPlantDetails(data?.entities[0].access_token)
            console.log(response)
            return response?.data
        }
    } catch (err) {
        console.log("error", err)
    }
})

export const plantingDetails = createAsyncThunk('plant/planting', async (plantName: String) => {
    try {
        const info = await api.plantingInfoExist(plantName)
        if (info?.data.data[0]?.id) {
            const { data } = await api.careGuide(info?.data.data[0]?.id)
            // console.log(data)
            return data
        } else {
            return { data: false }
        }
    } catch (err) {
        console.log(err)
    }
})


export const updateBookmark = createAsyncThunk('plant/bookmark', async (updateData: Object) => {
    try {
        const { data } = await api_server.updateBookmark(updateData)
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
})

export const getAllBookmarks = createAsyncThunk('plant/bookmark/all', async (userId: String) => {
    try {
        const { data } = await api_server.Bookmarks(userId)
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
})

export const identifyPlant = createAsyncThunk('plant/identify/image', async (imageObject: Object) => {
    try {
        const { data } = await api.plantIdentification(imageObject)
        return data
    } catch (err) {
        console.log(err)
    }
})

export const assesHealth = createAsyncThunk('plant/health/image', async (imageObject: Object) => {
    try {
        const { data } = await api.plantHealth(imageObject)
        return data
    } catch (err) {
        console.log(err)
    }
})


export const plantNewPlant = createAsyncThunk('plant/new', async (plantData: Object) => {
    console.log(plantData)
    try {
        const { data } = await api_server.newPlant(plantData)
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
})

export const getMyPlants = createAsyncThunk('plant/allData', async (userId: String) => {
    try {
        const { data } = await api_server.allPlants(userId)
        return data
    } catch (err) {
        console.log(err)
    }
})


export const postNew = createAsyncThunk('plant/newpost', async (formData: Object) => {
    console.log("dispatched")
    try {
        const { data } = await api_server.newPost(formData)
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
})

export const getPosts = createAsyncThunk('plant/posts', async () => {
    try {
        const { data } = await api_server.getAllPost()
        return data
    } catch (err) {
        console.log(err)
    }
})

export const clearCache = createAction('CLEAR_CACHE')
