fetch('./data.json')
    .then((response) => response.json())
    .then((json) => json.forEach(e => {
        let ul = document.getElementsByClassName('summary__list');
        let li = document.createElement('li');
        ul[0].appendChild(li);
        li.className = e.category === "Reaction" ? "red" : e.category === "Memory" ? "orange" : e.category === "Verbal" ? "green" : "blue";
        li.innerHTML = `<div class="iconAndDetail">
                            <img  src="images/icon-${e.category.toLowerCase()}.svg" alt=""></img>
                            <p class="${e.category.toLowerCase()}">${e.category}</p>
                        </div>
                        <p class="yourScore">${e.score}</p>`
    }));