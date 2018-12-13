document.querySelector('.submit-btn').addEventListener('click', handleSubmit)
document.querySelector('.card-container').addEventListener('click', removeGift)

function handleSubmit(e) {
  e.preventDefault()
  const title = document.querySelector('.title-input').value
  const recipient = document.querySelector('.recipient').value
  const notes = document.querySelector('.notes-input').value
  const newCard = new CardConstructor(title, recipient, notes)
  cardHTML(newCard)
}

function cardHTML(card) {
  document.querySelector('.card-container').innerHTML += 
    `<article class="card">
      <h3>${card.title}</h3>
      <h5>For ${card.recipient}</h5>
      <p>${card.notes}</p>
      <button class="remove-btn">Remove</button>
    </article>`
}

function CardConstructor(title, recipient, notes) {
  this.id = Date.now()
  this.title = title
  this.notes = notes
  this.recipient = recipient
  this.quality = 'Meh'
}

function removeGift(e) {
  if (e.target.classList.contains('remove-btn')) {
    e.target.closest('.card').remove()
  }
}