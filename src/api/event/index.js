// getEvents makes an api call to our back-end
// and receives all the events.
import axios from "axios";

export async function getEvents() {
    const URL = 'localhost:8000/api/events'

    let err = null
    let data = null

    await axios.get(URL)
        .then((response) => {
            data = response.data
        })
        .catch((error) => {
            err = error
        })

    return {
        data: data,
        error: err
    }
}
