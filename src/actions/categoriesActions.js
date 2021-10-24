// create action to fetch categories from the api 

export const fetchCategories = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/categories')
        .then(resp => resp.json())
        .then(categories => dispatch(
            {type: 'FETCH_CATEGORIES', 
            payload: categories}))
            // passing data we received from fetch will go to reducer and will return 
            // a payload from action 
            console.log('fetchCategories')
    }
}

