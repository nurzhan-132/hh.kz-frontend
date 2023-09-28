const DateFormattMonthYear = new Intl.DateTimeFormat('ru', { month: 'long', year: 'numeric' });
const dateFormatterMonthYear = (date) => {
    return DateFormattMonthYear.format(date)
}

module.exports = {
    dateFormatterMonthYear
}