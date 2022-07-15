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
    step: 1,
    total: 0,
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
      return (index) => {
        return state.events.slice(index, index + state.step);
      }
    },
    // get total number of events
    getTotalNumberOfEvents: (state) => {
      return state.total
    },
    // get step number
    getStep: (state) => {
      return state.step
    },
    // get all indexes
    getIndexes: (state) => {
      let a = [];
      let counter = 1;
      for (let i = 0; i < state.total; i++) {
        if (i % state.step === 0) {
          let temp = {
            key: i,
            value: counter,
          }
          a.push(temp);
          counter++;
        }
      }
      return a;
    }
  },
  // store actions
  actions: {
    // this method gets the events from our back-end api
    importEvents() {
      this.events = getEvents()
      this.total = this.events.length
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
