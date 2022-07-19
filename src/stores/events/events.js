import { defineStore } from 'pinia'
import { fetGetEventsApi } from "./request";

export const useEventsStore = defineStore({
  id: 'events',
  state: () => ({
    step: 3,
    total: 0,
    events: [],
  }),
  getters: {
    getEventById: (state) => {
      return (id) => {
        let e = null;
        state.events.forEach((event) => {
          if (event.id === id) {
            e = event;
          }
        });
        return e;
      }
    },
    getAllEvents: (state) => {
      return (index) => {
        return state.events.slice(index, index + state.step);
      }
    },
    getTotalNumberOfEvents: (state) => {
      return state.total
    },
    getStep: (state) => {
      return state.step
    },
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
  actions: {
    importEvents() {
      fetGetEventsApi()
        .then((events) => {
          this.events = events
          this.total = this.events.length
        })
    },
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
