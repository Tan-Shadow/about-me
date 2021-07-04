const btns = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')
const about = document.querySelector('.about')
const toggleBtn = document.querySelector('.switch-btn')
const aboutContent = document.querySelector('.about-content')


// switching to dark mode

toggleBtn.addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("slide")) {
    e.currentTarget.classList.remove("slide");
    aboutContent.classList.remove('darkmode')
  } else {
    e.currentTarget.classList.add("slide");
    aboutContent.classList.add('darkmode')
  }
});


//

about.addEventListener('click', function (e) {
	const id = e.target.dataset.id
	if (id) {
		// remove active from btns
		btns.forEach(function (btn){
			btn.classList.remove('active')
			e.target.classList.add('active')
		})

		// remove the content
		articles.forEach(function (article) {
			const articleIdList = article.id
				article.classList.remove('active')		
		})

		const element = document.getElementById(id)
		element.classList.add('active')
	}
})