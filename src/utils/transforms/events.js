import transformPresenter from "./presenter";
import transformSponsor from "./sponsor";

function transformEvent({
    id,
    title,
    description,
    date,
    enable,
    poster,
    presenter: presenter,
    sponsor: company
}) {
    return {
        id: id,
        title: title,
        description: description,
        date: date,
        enable: enable,
        poster: poster,
        presenter: transformPresenter(presenter),
        company: transformSponsor(company)
    }
}

export default function transformEventsResponse({ data: events }) {
    return events.map(transformEvent)
}
