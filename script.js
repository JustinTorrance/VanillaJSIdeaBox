document.querySelector('.submit-btn').addEventListener('click', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  const title = document.querySelector('.title-input').value
  const description = document.querySelector('.description-input').value
  const newCard = new CardConstructor(title, description)
  cardHTML(newCard)
}

function cardHTML(card) {
  document.querySelector('.card-container').innerHTML += 
    `<article data="Date.now()">
      <h3>${card.title}</h3>
      <p>${card.description} </p>
      <button class="remove-btn">Remove</button>
    </article>`
}

function CardConstructor(title, description) {
  this.id = Date.now()
  this.title = title
  this.description = description
  this.quality = 'Meh'
}