// importing store defining from pinia.js
import { defineStore } from 'pinia'


// exporting our events store
export const useEventsStore = defineStore({
  // events store id (not used in project)
  id: 'events',
  // events store has only one array of events
  state: () => ({
    events: [],
  }),
  // store getters
  getters: {
    // getting an event information by its id
    getEventById: (state) => {
      // returning a function to pass the id argument to it
      return (id) => {
        // creating an empty event
        let e = null;
        // search for event
        state.events.forEach((event) => {
          if (event.id === id) {
            e = event;
          }
        });
        // returning the event
        return e;
      }
    },
    // getting all events
    getAllEvents: (state) => {
      return state.events;
    }
  },
  // store actions
  actions: {
    // this method gets the events from our back-end api
    importEvents() {
      // TODO: API fetch for list of events
      this.events = [
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
    },
  }
})
