fetch('./data.json')
    .then((response) => response.json())
    .then((json) => json.forEach(e => {
        let ul = document.getElementsByClassName('summary__list');
        let li = document.createElement('li');
        ul[0].appendChild(li);
        li.className = e.category === "Reaction" ? "red" : e.category === "Memory" ? "orange" : e.category === "Verbal" ? "green" : "blue";
        console.log(li.className);
        li.innerHTML = `<p class="${e.category.toLowerCase()}">${e.category}</p><p class="yourScore">${e.score}</p>`
    }));