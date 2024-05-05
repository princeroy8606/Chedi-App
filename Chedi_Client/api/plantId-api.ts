import axios from "axios";

const BaseUrl1: string = 'https://plant.id/api/v3'
const BaseUrl2: string = 'https://perenual.com/api'

const headers_1: Object = {
    'APi-Key': 'tKnA5KxfgGX9W9GXgbfCdZtSq3RBYi67XesWriOeGcHnTfnirE',
    'Content-Type': ' application/json'
}

const APi_Key_2 = 'sk-nhkg65fea3d9de5a34836'

const Details: String = 'common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods'
const HealthDetails: String = 'local_name,description,url,treatment,classification,common_names,cause'


const API_1 = axios.create({ baseURL: BaseUrl1, headers: headers_1 })

const API_2 = axios.create({ baseURL: BaseUrl2 })

export const searchPlant = (searchText: String) => API_1.get('/kb/plants/name_search', { params: { q: searchText, limit: 1, lang: 'en,ml,hi' } })

export const getPlantDetails = (token: String) => API_1.get(`/kb/plants/${token}`, { params: { details: Details } })

export const plantingInfoExist = (scientificName: String) => API_2.get('/species-list', { params: { key: APi_Key_2, q: scientificName } })

export const plantingInfo = (id: Number) => API_2.get(`/species/details/${id}`, { params: { key: APi_Key_2 } })

export const careGuide = (id: Number) => API_2.get('/species-care-guide-list', { params: { key: APi_Key_2, species_id: id } })

export const plantIdentification = (imageData: Object) => API_1.post('/identification', imageData, { params: { key: APi_Key_2 } })

export const plantHealth = (imageData: Object) => API_1.post('/health_assessment', imageData, { params: { key: APi_Key_2, details: HealthDetails } })