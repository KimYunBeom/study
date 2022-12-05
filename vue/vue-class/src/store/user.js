import { defineStore } from 'pinia';

export const userStoreRaw = defineStore({
  id: 'userStoreRaw',
  state: () => ({
    seq: 0,
    id: '',
  }),
  getters: {
    getSeq: (state) => {
      return state.seq;
    },
    getId: (state) => {
      return state.id;
    },
  },
  actions: {
    setSeq(value) {
      this.seq = value;
    },
    setId(value) {
      this.id = value;
    },
  },
});
