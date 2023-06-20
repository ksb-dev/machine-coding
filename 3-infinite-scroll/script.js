let page = 1
let totalPages = 0
let limit = 10

const quotesEl = document.querySelector('.quotes')
const loaderEl = document.querySelector('.loader')

const showLoader = () => {
  loaderEl.classList.remove('hide')
}
const hideLoader = () => {
  loaderEl.classList.add('hide')
}

const getQuotes = async (page = 1, limit = 10) => {
  const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error(`An error occurred: ${response.status}`)
  }
  return await response.json()
}

const showQuotes = quotes => {
  quotes.forEach(quote => {
    const quoteEl = document.createElement('div')
    quoteEl.classList.add('quote')

    quoteEl.innerHTML = `
            <span>${quote.id})</span>
            ${quote.quote}
            <footer>-${quote.author}</footer>
        `

    quotesEl.appendChild(quoteEl)
  })
}

const loadQuotes = async () => {
  showLoader()

  var res

  if (page === 1) {
    res = await getQuotes()
    totalPages = Math.ceil(res.total / limit)
    showQuotes(res.data)
  } else if (page > 1 && page <= totalPages) {
    res = await getQuotes(page, limit)
    showQuotes(res.data)
  }

  hideLoader()

  page++
}

window.addEventListener('scroll', () => {
  if (
    Math.ceil(window.scrollY + window.innerHeight) >=
    document.documentElement.scrollHeight
  ) {
    loadQuotes()
  }
})

loadQuotes()
