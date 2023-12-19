

import axios from "axios"
import { All_MOVIES, MOVIE_API } from "../Constants/Constants"


// ===== GIT ALL MOVIES ======= ///

export const getAllMovies = (data) => {
    return {
        type: All_MOVIES,
        data: data.results,
        pages: data.total_pages,
    }
}



// Get All Movies //
export const axiosGetMovies = () => {
    return async (dispatch) => {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=23c85d4f8c37108d2f5c4537788624db&language=ar")
        console.log(res.data)
        dispatch(getAllMovies(res.data))
    }
}

// Get API Search For Search  //

export const axiosGetSearch = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=23c85d4f8c37108d2f5c4537788624db&query=${word}&language=ar`)
        console.log(res.data)
        dispatch(getAllMovies(res.data))
    }
}


// Get API All Pages For Pagination  //

export const axiosGetPages = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=23c85d4f8c37108d2f5c4537788624db&language=ar&page=${page}`)
        console.log(res.data)
        dispatch(getAllMovies(res.data))
    }
}



// Get API Movie Details  //

export const axiosGetMovieDetails = (prams) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${prams}?api_key=23c85d4f8c37108d2f5c4537788624db&language=ar`)
        console.log(res.data)
        dispatch({type: All_MOVIES, data: res.data.results, pages: res.data.total_pages})
    }
}



