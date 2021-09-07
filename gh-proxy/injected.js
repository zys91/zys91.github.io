document.addEventListener("DOMContentLoaded", () => {
	let placeHolder = '/https://'
	if (window.location.pathname.search(/^\/(?:https?:\/\/)?gist\.github\.com/i) === 0) {
		placeHolder += 'gist.github.com'
	} else {
		placeHolder += 'github.com'
	}
	const elements = document.querySelectorAll('[href^="/"]')
	for (const element of elements) {
		const oldURL = element.getAttribute('href')
		const newURL = placeHolder + oldURL
		element.setAttribute('href', newURL)
	}
	const e = document.querySelector('clipboard-copy.btn.btn-sm')
	if (e) {
		const oldValue = e.getAttribute('value')
		const newValue = `${window.location.protocol}//${window.location.host}/${oldValue}`
		e.setAttribute('value', newValue)
	}
})
