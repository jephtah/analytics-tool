export const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InZpY3NvZnQifSwiaWF0IjoxNjE4ODc3ODUxLCJleHAiOjE2MzQ0Mjk4NTF9.hHj_DIgR3MANgQCb63d2XcCItr1YuDGbowGrTjt1L8I"

export const fetchData = (method, url, token, reducer) => 
{
    return async dispatch => {
        try {
            let header = new Headers()
            header.append('Authorization', `Bearer ${token}`)
            const object = {
                method : method,
                mode: 'cors',
                headers: header
            }
            const response = await fetch(`${url}`, object)
            const data = await response.json()
            dispatch(reducer(data.data))
        }
        catch (error) {
            console.log(error)
        }
    }
}
