export const getData = async () => {
    try {
        const response = await fetch('/api');
        const responseBody = await response.json();
        console.log(responseBody.data)
        return responseBody.data;
    } catch (error) {
        console.log('Error Fetching Data ☠️', error)
    }
}