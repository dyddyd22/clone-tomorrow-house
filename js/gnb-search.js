const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

function openGnbSearchHistory() {
  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory)
  }
  gnbSearchHistory.classList.add('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistory)
  }
}
