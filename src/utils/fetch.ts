const apiKey = 'AutUfCq5LXvthXaRBfTW2yx9LnAtafoMnXhkLAQI'
const apiUrl = 'https://api.nasa.gov/planetary/apod'
export default async(parant:string = '') => {
    try {
        const response = await fetch(`${apiUrl}?api_key=${apiKey}${parant}`)
        const data = await response.json()

        return Promise.resolve(data)
    } catch (error) {
        Promise.reject(error)
    }   
}