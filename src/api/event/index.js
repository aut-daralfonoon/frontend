// getEvents makes an api call to our back-end
// and receives all the events.
export function getEvents() {
    // TODO: API fetch for list of events
    return [
        {
            id: 1,
            title: "Event Title",
            description: "Event description",
            date: "17:00 2/2/2022",
            poster: "https://lh3.googleusercontent.com/vtwxXwQJTzxUHeQ6xGxQuSslYd3b3W3yftMPsxcz9L1tzEmdmnPEc3cVwZpPJqGn-Yo",
            presenter: {
                name: "Presenter name",
                title: "Presenter title",
                description: "Presenter description",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS717HKFkqCh4tbnQuw94a7zUWQmFjb3JAvepM1SVOE5WtQJyztvStgFNEOlbtaTk1d660&usqp=CAU",
                company: {
                    name: "Company name",
                    logo: "https://cdn.logo.com/hotlink-ok/logo-social.png",
                },
            },
        },
        {
            id: 2,
            title: "Event Title",
            description: "Event description",
            date: "17:00 2/2/2022",
            poster: "https://lh3.googleusercontent.com/vtwxXwQJTzxUHeQ6xGxQuSslYd3b3W3yftMPsxcz9L1tzEmdmnPEc3cVwZpPJqGn-Yo",
            presenter: {
                name: "Presenter name",
                title: "Presenter title",
                description: "Presenter description",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS717HKFkqCh4tbnQuw94a7zUWQmFjb3JAvepM1SVOE5WtQJyztvStgFNEOlbtaTk1d660&usqp=CAU",
                company: {
                    name: "Company name",
                    logo: "https://cdn.logo.com/hotlink-ok/logo-social.png",
                },
            },
        },
    ]
}
