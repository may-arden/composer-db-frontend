// create action to fetch categories from the api 
const baseURL = 'http://127.0.0.1:3000'

export const fetchCategories = () => {
    return (dispatch) => {
        // console.log("c")
        fetch(`${baseURL}/categories`, {
            // .catch((e => { console.log(e) }))
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(resp => resp.json())
        
        .then(categories => { 
            // .catch((e => { console.log(e) }))
            // console.log(categories)
            dispatch({type: 'FETCH_CATEGORIES', payload: categories})
        }
        )
    }
}
            // passing data we received from fetch will go to reducer and will return 
            // a payload from action 
            // console.log('fetchCategories')
