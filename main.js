// Lägg till-Knappen hämtas via id.
var addButton = document.getElementById("addButton");

//Knappen får en Eventlistener som lyssnar efter klick.
addButton.addEventListener("click", function () {
	//Det användaren har skrivit i inputfältet hämtats.
	var task = document.getElementById("input").value;
	// Ett nytt list-item skapas och fylls med användarens input.
	var li = document.createElement("li");
	li.innerHTML = "<p>" + task + "</p>";
	// Listan med todos hämtas och vårt nya list-item läggs till med appendChild.
	var todos = document.getElementById("todos");
	todos.appendChild(li);
	//En div där klar- och raderaknappar ska ligga skapas och läggs på vår nya list-item
	var liButtons = document.createElement("div");
	liButtons.className = "liButtons";
	li.appendChild(liButtons);

	//En ny knapp skapas och får attribut
	var doneButton = document.createElement("button");
	doneButton.className = "doneButton btn btn-outline-success btn-sm";
	doneButton.innerHTML = "Klar";
	
	//Den nya knappen får en Eventlistener som lyssnar efter klick
	doneButton.addEventListener("click", function () {
		// Den klickade knappens förälder hämtas och sparas sparas i liButtons. Med hjälp av removeChild kan Klarmarkera-knappen tas bort från liButtons. Den behövs inte längre när uppgiften är avklarad
		var liButtons = this.parentNode;
		liButtons.removeChild(this);
		// liButtons förälder, ett <li> element, hämtas och sparas i listItem. Klar-listan hämtas via id och listItem läggs till där med appendChild.
		var listItem = liButtons.parentNode;
		var done = document.getElementById("done");
		done.appendChild(listItem);
	});
	//Klar-knappen läggs till i diven liButtons i den nya uppgiften i listan.
	liButtons.appendChild(doneButton);

	//Ett empty textNode läggs till för att alla knappar ska ha samma mellanrum.
	var emptyTextNode = document.createTextNode(" ");
	liButtons.appendChild(emptyTextNode);

	var deleteButton = document.createElement("button");
	deleteButton.className = "deleteButton btn btn-outline-danger btn-sm";
	deleteButton.innerHTML = "Radera";
	deleteButton.addEventListener("click", function () {
		var listItem = this.parentNode.parentNode;
		listItem.parentNode.removeChild(listItem);
	});
	liButtons.appendChild(deleteButton);

});

// Klarmarkera-knapp för enskild todo. Denna kod behövs för de todos som är hårdkodade in i index.html. 

// Alla klarmarkera-knappar hämtas via klass och sparas som en NodeList i variabeln doneButtons. NodeListen loopas igenom och varje knapp får en EventListener som lyssnar efter klick.
var doneButtons = document.getElementsByClassName("doneButton");
for (i = 0; i < doneButtons.length; i++) {
	doneButtons[i].addEventListener("click", function () {
		/* Den klickade knappens förälder hämtas och sparas sparas i liButtons. Med hjälp av removeChild kan Klarmarkera-knappen tas bort från liButtons. Den behövs inte längre när uppgiften är avklarad.*/
		var liButtons = this.parentNode;
		liButtons.removeChild(this);

		// liButtons förälder, ett <li> element, hämtas och sparas i listItem. Klar-listan hämtas via id och listItem läggs till där med appendChild.
		var listItem = liButtons.parentNode;
		var done = document.getElementById("done");
		done.appendChild(listItem);
	});
}


//Radera-knapp på enskild todo. Denna kod behövs för de todos som är hårdkodade in i index.html.

// Alla raderaknappar hämtas via klass och sparas som en NodeList i variabeln deleteButtons.
var deleteButtons = document.getElementsByClassName("deleteButton");
// NodeListen loopas igenom och varje knapp får en EventListener som lyssnar efter klick.
for (i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", function () {
		// en klickade knappens förälder och sparas i listItem.
		var listItem = this.parentNode.parentNode;
		// ListItems förälder (elementet <ul>) raderar barnet listItem (den <li> där den klickade knappen finns).
		listItem.parentNode.removeChild(listItem);
	});
}


// Rensa listan-knapp hämtas via id.
var deleteAllButton = document.getElementById("deleteAllButton");
// Knappen får en eventListener som lyssnar efter klick.
deleteAllButton.addEventListener("click", function () {
	// Todo-listan hämtas via id.
	var list = document.getElementById("todos");
	// Innehållet i listan sätts till en tom sträng och allt som fanns där tidigare försvinner.
	list.innerHTML = "";
});