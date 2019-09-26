function deliverPresents(houses) {
  if (houses.length === 0) return

  console.log("Delivering presents to " + houses[0])
  var remainingHouses = houses.slice(1, houses.length)
  
  return deliverPresents(remainingHouses)
}

module.exports = deliverPresents
