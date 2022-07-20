import { useEventsStore } from "../../stores/events";

export function validateEventId(id) {
    return useEventsStore().isEventValid(id)
}
