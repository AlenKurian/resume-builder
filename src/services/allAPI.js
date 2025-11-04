import commonAPI from "./commonAPI";
import baseUrl from "./baseurl";

// add ResumeAPI
export const addResumeAPI = async (resume) => {
    return await commonAPI("POST",`${baseUrl}/resumes`,resume)
}

// edit ResumeAPI
export const editResumeAPI = async (resume) => {
    return await commonAPI("PUT",`${baseUrl}/resumes/${id}`,resume)
}

// add DownloadHistory
export const addDownloadHistoryAPI = async (resume) => {
    return await commonAPI("POST",`${baseUrl}/history/`,resume)
}

// get DownloadHistory
export const getDownloadHistoryAPI = async () => {
    return await commonAPI("GET",`${baseUrl}/history`,{})
}

// delete DownloadHistory
export const deleteDownloadHistoryAPI = async (id) => {
    return await commonAPI("DELETE",`${baseUrl}/history/${id},{}`)
}

// getResumeAPI
export const getResumeAPI = (id) => {
    return commonAPI("GET",`${baseUrl}/resume/${id}`,{})
}