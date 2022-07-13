// importing store defining from pinia.js
import { defineStore } from 'pinia'

// import api
import { getEvents } from '../api/event'

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
      this.events = getEvents()
    },
    // this method checks the event existence
    isEventValid(id) {
      let flag = false;
      this.events.forEach((event) => {
        if (event.id === id) {
          flag = true;
        }
      });
      return flag;
    }
  }
})
