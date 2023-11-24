function getPaymentTokenFromAPI(success) {
  return success
    ? Promise.resolve({ data: 'Successful response from the API' })
    : Promise.resolve(null);
}

module.exports = getPaymentTokenFromAPI;
