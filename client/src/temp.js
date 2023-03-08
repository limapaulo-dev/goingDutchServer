//console.log('ENV: ', process.env.NODE_ENV)

const budget = {
  title: 'test budget',
  participantsTitle: 'participants',
  participantsNames: ['jimmy', 'joe'],
  status: ['loggedIn', 'ok'],
};

const budget = {
  participantsNames: ['jimmy', 'joe'],
  status: ['loggedIn', 'ok'],
  budgetPages: [
    {
      pageName: 'nametest'
      // RecurringCard: {},
      // TimedCard: {}
    },
    {
      pageName: 'nametest3'
      // RecurringCard: {},
      // TimedCard: {}
    },
    {
      pageName: 'nametest4'
      // RecurringCard: {},
      // TimedCard: {}
    },
  ],
};

axios.post('/api/budget', budget);
