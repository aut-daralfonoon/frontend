export default function transformSponsor({
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