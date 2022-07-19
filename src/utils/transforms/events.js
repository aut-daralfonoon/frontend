import transformPresenter from "./presenter";
import transformCompany from "./company";

export default function transformEvent({
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