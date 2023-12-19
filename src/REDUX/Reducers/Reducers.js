import { All_MOVIES } from "../Constants/Constants";





const MovValue = { movies: [], pageCount: 0 };

export const moviesReducer = (state = MovValue, action) => {
    switch (action.type) {
        case All_MOVIES:
            return { movies: action.data, pageCount: action.pages}
        default:
            return state;
    }
}



export const movieDetailsReducer = (state = MovValue, action) => {
    switch (action.type) {
        case All_MOVIES:
            return { movies: action.data, pageCount: action.pages}
        default:
            return state;
    }
}