export default function transformCompany({
    name,
    description,
    logo,
}) {
    return {
        name: name,
        description: description,
        logo: logo
    }
}