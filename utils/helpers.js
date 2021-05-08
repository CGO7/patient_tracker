module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  roomReady: (status) => {
    roomStatus = status.toLowerCase();
    if (roomStatus === 'ready') {
      return true;
    }
    return false;
  }
};
