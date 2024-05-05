import { createSlice } from "@reduxjs/toolkit";
import { assesHealth, clearCache, getAllBookmarks, getMyPlants, getPosts, identifyPlant, plantNewPlant, plantingDetails, postNew, searchQuery, updateBookmark } from "../actions/plantActions";


const initialState = {
    searchResult: null,
    bookmarkUpdate: null,
    allBookMarks: null,
    plantingInfo: null,
    plantIdentifiactionResult: null,
    plantHealthReslut: null,
    plantedResponse: null,
    allPlants: null,
    newPostResponse: null,
    allPosts:null
}

export const plantSlice = createSlice({
    name: 'plant',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(searchQuery.fulfilled, (state, action) => {
            state.searchResult = action.payload
        });
        builder.addCase(updateBookmark.fulfilled, (state, action) => {
            state.bookmarkUpdate = action.payload
        });
        builder.addCase(getAllBookmarks.fulfilled, (state, action) => {
            state.allBookMarks = action.payload
        });
        builder.addCase(plantingDetails.fulfilled, (state, action) => {
            state.plantingInfo = action.payload
        });
        builder.addCase(identifyPlant.fulfilled, (state, action) => {
            state.plantIdentifiactionResult = action.payload
        });
        builder.addCase(assesHealth.fulfilled, (state, action) => {
            state.plantHealthReslut = action.payload
        });
        builder.addCase(plantNewPlant.fulfilled, (state, action) => {
            state.plantedResponse = action.payload
        });
        builder.addCase(getMyPlants.fulfilled, (state, action) => {
            state.allPlants = action.payload
        });
        builder.addCase(postNew.fulfilled, (state, action) => {
            state.newPostResponse = action.payload
        });
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.allPosts = action.payload
        });
        builder.addCase(clearCache, (state, action) => {
            return initialState;
        });
    }
})

export default plantSlice.reducer;
