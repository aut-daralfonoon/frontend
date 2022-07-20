import transformPresenter from "./presenter";
import transformCompany from "./company";

function transformEvent({
    id,
    title,
    description,
    date,
    enable,
    poster,
    presenter: presenter,
    company: company
}) {
    return {
        id: id,
        title: title,
        description: description,
        date: date,
        enable: enable,
        poster: poster,
        presenter: transformPresenter(presenter),
        company: transformCompany(company)
    }
}

export default function transformEventsResponse({ data: events }) {
    return events.map(transformEvent)
}
