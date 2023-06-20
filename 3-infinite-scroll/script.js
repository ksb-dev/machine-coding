let page = 1
const limit = 10
let totalPages = 0

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

function hasMoreQuotes (page, totalPages) {
  console.log(page, totalPages)
  return page < totalPages
}

const loadQuotes = async () => {
  showLoader()

  setTimeout(async () => {
    try {
      const response = await getQuotes(page, limit)

      showQuotes(response.data)

      totalPages = Math.ceil(response.total / limit)
    } catch (error) {
      console.log(error.message)
    } finally {
      hideLoader()
    }
  }, 500)
}

window.addEventListener('scroll', () => {
  if (
    Math.ceil(window.scrollY + window.innerHeight) >=
    document.documentElement.scrollHeight
  ) {
    if (hasMoreQuotes(page, totalPages)) {
      page++
      loadQuotes()
    }
  }
})

loadQuotes()
