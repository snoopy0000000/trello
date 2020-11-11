import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDetailShow: false,
    currentIssue: {},
    lists: [
      {
        id: 0,
        title: 'todo',
      },
      {
        id: 1,
        title: 'doing',
      },
      {
        id: 2,
        title: 'home',
      },
    ],
    issues: [
      {
        id: 1,
        listId: 0,
        title: 'Go to home',
        description: ' make log in page',
        dueDate: '2020-10-29',
        checklist: [
          { id: 0, title: 'layout', complete: true },
          { id: 1, title: 'function', complete: false },
        ],
        activities: [
          {
            id: 0,
            imgSrc:
              'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png',
            name: 'nickname',
            text: 'hi my name is nick',
            createdAt: '2020-10-27T08:09:34.435Z',
          },
          {
            id: 1,
            imgSrc:
              'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg',
            name: '은서',
            text: 'hi my name is you',
            createdAt: '2020-10-27T08:05:34.435Z',
          },
        ],
      },
      {
        id: 2,
        listId: 0,
        title: 'Please',
        description: ' make log in page',
        dueDate: '2020-10-28',
        checklist: [
          { id: 0, title: 'layout', complete: true },
          { id: 1, title: 'function', complete: false },
        ],
        activities: [
          {
            id: 0,
            imgSrc:
              'https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png',
            name: 'nickname',
            text: 'hi my name is nick',
            createdAt: '2020-10-27T08:09:34.435Z',
          },
          {
            id: 1,
            imgSrc:
              'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg',
            name: '은서',
            text: 'hi my name is you',
            createdAt: '2020-10-27T08:05:34.435Z',
          },
        ],
      },
      {
        id: 3,
        listId: 0,
        title: 'WOW',
        description: 'Hungry',
        dueDate: '2020-10-10',
        checklist: [
          { id: 0, title: 'layout', complete: true },
          { id: 1, title: 'function', complete: false },
          { id: 2, title: 'function', complete: false },
        ],
        activities: [
          {
            id: 0,
            imgSrc: 'https://pbs.twimg.com/media/D0AEcLJVYAErhXl.jpg',
            name: 'Iu',
            text: 'Hi my name is IU',
            createdAt: '2020-10-27T08:09:34.435Z',
          },
          {
            id: 1,
            imgSrc:
              'https://jmagazine.joins.com/_data/photo/2019/04/2949993301_QGcF14Px_1.jpg',
            name: 'jimin',
            text: 'hi my name is jimin',
            createdAt: '2020-10-27T08:05:34.435Z',
          },
        ],
      },
    ],
  },
  mutations: {
    toggleIsDetailShow(state) {
      state.isDetailShow = !state.isDetailShow;
    },

    setCurrentIssue(state, payload) {
      state.currentIssue = payload;
    },
    fixDate(state, payload) {
      let target = state.issues.find((el) => el.id === payload.id);
      target.dueDate = payload.dueDate;
    },
    fixDescr(state, payload) {
      let target = state.issues.find((el) => el.id === payload.id);
      target.description = payload.descr;
    },
    editIssue(state, payload) {
      let target = state.issues.find((el) => el.id === payload.id);
      Object.assign(target, payload);
    }, //뮤테이션을 여러개 나누지 않고 한번에 state에 payload 시키기
    addIssue(state, payload) {
      state.issues.push(payload);
    },
    addList(state, payload) {
      state.lists.push(payload);
    },
    deleteIssue(state, payload) {
      let targetIndex = state.issues.findIndex((el) => el.id === payload);
      state.issues.splice(targetIndex, 1);
      state.isDetailShow = false;
    },
  },
  actions: {},
  modules: {},
});
