// Declarate Function
const DateFormat = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
  }


  // Export Function
  export default DateFormat;