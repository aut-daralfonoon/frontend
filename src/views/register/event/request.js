import httpService from "../../../services/http";
import { API } from "../../../configs/urls";

function transformAuthResponse({
    message,
}) {
    return {
        message
    }
}

export function fetchEventRegisterApi(id, email) {
    const url = `${API}/event/${id}/register`
    const data = {
        email: email
    }
    return httpService.post(url, data).then(transformAuthResponse)
}