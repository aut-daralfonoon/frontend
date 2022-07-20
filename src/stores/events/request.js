// Make an api call to our back-end and receives all the events.
import httpService from "../../services/http";
import { API } from "../../configs/urls";
import { transformEventsResponse } from "../../utils/transforms";

export function fetGetEventsApi() {
    const url = `${API}/events/`
    return httpService.get(url).then(transformEventsResponse)
}
