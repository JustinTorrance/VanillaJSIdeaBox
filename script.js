document.querySelector('.submit-btn').addEventListener('click', handleSubmit)
document.querySelector('.card-container').addEventListener('click', removeGift)

function handleSubmit(e) {
  e.preventDefault()
  const title = document.querySelector('.title-input').value
  const recipient = document.querySelector('.recipient-input').value
  const price = document.querySelector('.price-input').value
  const notes = document.querySelector('.notes-input').value
  const newCard = new CardConstructor(title, recipient, notes, price)
  generateHTML(newCard)
}

function generateHTML(card) {
  document.querySelector('.card-container').innerHTML += 
    `<article class="card">
      <h3 class="title" >${card.title}</h3>
      <h5 class="recipient">for ${card.recipient}</h5>
      <h5 class="price">price: ${card.price}</h5>
      <p class="notes">${card.notes}</p>
      <p class="quality">Will they love it? ${card.quality}</p>
      <button class="remove-btn">Remove</button>
    </article>`
}

function CardConstructor(title, recipient, notes, price) {
  this.id = Date.now()
  this.title = title
  this.recipient = recipient
  this.price = price
  this.notes = notes
  this.quality = 'Meh'
}

function removeGift(e) {
  if (e.target.classList.contains('remove-btn')) {
    e.target.closest('.card').remove()
  }
}