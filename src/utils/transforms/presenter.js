export default function transformPresenter ({
    name,
    title,
    description,
    image,
}) {
    return {
        name: name,
        title: title,
        description: description,
        image: image
    }
}