Template.registerHelper('calendarDate', function (date) {
  if (!_.isDate(date)) {
    return;
  }
  return moment(date).calendar(null, {
    sameDay: 'LT',
    nextDay: '[Tomorrow]',
    lastDay: '[Yesterday]',
    lastWeek: 'dddd'
  });
});
