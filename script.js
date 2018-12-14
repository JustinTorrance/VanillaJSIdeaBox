document.querySelector('.submit-btn').addEventListener('click', handleSubmit)
document.querySelector('.card-container').addEventListener('click', removeGift)
document.querySelector('.card-container').addEventListener('click', handleVote)
displayOnPageLoad()

function handleSubmit(e) {
  e.preventDefault()
  let title = document.querySelector('.title-input').value
  let recipient = document.querySelector('.recipient-input').value
  let price = document.querySelector('.price-input').value
  let notes = document.querySelector('.notes-input').value
  let newCard = new CardConstructor(title, recipient, notes, price)
  generateHTML(newCard)
  storeCard(newCard)
  document.querySelector('form').reset()
}

function storeCard(card) {
  localStorage.setItem(card.id, JSON.stringify(card))
}

function displayOnPageLoad() {
  Object.keys(localStorage).map(card => {
  parsedCard = JSON.parse(localStorage.getItem(card))
  generateHTML(parsedCard)
  })
}

function generateHTML(card) {
  document.querySelector('.card-container').innerHTML += 
    `<article data-index="${card.id}" class="card">
      <h3 class="title" >${card.title}</h3>
      <p class="recipient">for ${card.recipient}</p>
      <p class="price">price: ${card.price}</p>
      <p class="notes">${card.notes}</p>
      <div class="love-it-container">
        <p class="love">Will they love it? </p>
        <p class="quality">${card.qualities[card.qualityIndex]}</p>
      </div>
      <div class="vote-container">
        <button class="upvote-btn card-btn" name="upvote">upvote</button>
        <button class="downvote-btn card-btn" name="downvote">downvote</button>
      </div>
      <button class="remove-btn card-btn" name="remove-btn">Remove</button>
    </article>`
}

function CardConstructor(title, recipient, notes, price) {
  this.id = Date.now()
  this.title = title
  this.recipient = recipient
  this.price = price
  this.notes = notes
  this.qualities = ['Meh', 'Most Likely', 'Absolutely!']
  this.qualityIndex = 0
}

function removeGift(e) {
  if (e.target.name === 'remove-btn') {
    const cardID = e.target.closest('.card').getAttribute("data-index");
    e.target.closest('.card').remove()
    localStorage.removeItem(cardID)
  }
}

function handleVote (e) {
  const cardID = e.target.closest('.card').getAttribute("data-index");
  const card = JSON.parse(localStorage.getItem(cardID))
  if (e.target.name === "upvote" && card.qualityIndex < 2) {
    card.qualityIndex++
  } else if (e.target.name === "downvote" && card.qualityIndex > 0) {
  card.qualityIndex--
  }
  e.target.closest('.card').childNodes[9].childNodes[3].innerText = card.qualities[card.qualityIndex]
  storeCard(card)
}

