import axios from "axios";

export async function sendRegistration(id, email) {
    const URL = "http://localhost:8080/api/event/" + id + "/register"
    const data = {
        id: id,
        email: email
    }

    let err = null;

    await axios.post(URL, data)
        .then((response) => console.log(response.statusText))
        .catch((error) => err = error)

    return err
}