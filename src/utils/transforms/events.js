import transformPresenter from "./presenter";
import transformCompany from "./company";

export default function transformEvent({
    _id: id,
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
        presenter: presenter.map(transformPresenter),
        company: company.map(transformCompany)
    }
}