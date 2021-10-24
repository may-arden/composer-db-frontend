// create action to fetch categories from the api 
const baseURL = 'http://127.0.0.1:3000'

export const fetchCategories = () => {
    return (dispatch) => {
        fetch(`${baseURL}/categories`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': ','
            }
        })
        .then(resp => resp.json())
        console.log('fetchCategories')
        .then(categories => { 
            dispatch({type: 'FETCH_CATEGORIES', payload: categories})
        }
        )
    }
}
            // passing data we received from fetch will go to reducer and will return 
            // a payload from action 
            // console.log('fetchCategories')
