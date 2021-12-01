export default {
  filters: {
    // capitalize more than one space seperated words
    showDecimalPoint(val) {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
  },
}
