/*
Lägg till-knappen:
1. Knappen hämtas via id.
2. Knappen får en Eventlistener som lyssnar efter klick.
3. När användaren klickar på knappen skapas en prompt där användaren skriver uppgiften som hen vill lägga till.
4. Ett nytt list-item skapas och fylls med användarens input.
5. Listan med todos hämtas och den nya uppgiften läggs till med appendChild.
6. Klar- och raderaknappar skapas, får egna eventListeners, och läggs till på användarens nya list-item.
*/

var addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {
	var task = document.getElementById("input").value;
	
	var li = document.createElement("li");
	li.innerHTML = "<p>" + task + "</p>";
	
	var todos = document.getElementById("todos");
	todos.appendChild(li);
	var liButtons = document.createElement("div");
	liButtons.className = "liButtons";
	li.appendChild(liButtons);
	
	var doneButton = document.createElement("button");
	doneButton.className = "doneButton btn btn-outline-success btn-sm";
	doneButton.innerHTML = "Klar";
	doneButton.addEventListener("click", function(){
		var liButtons = this.parentNode;
		liButtons.removeChild(this);
		var listItem = liButtons.parentNode;
		var done = document.getElementById("done");
		done.appendChild(listItem);
	});
	liButtons.appendChild(doneButton);
	
	var deleteButton = document.createElement("button");
	deleteButton.className = "deleteButton btn btn-outline-danger btn-sm";
	deleteButton.innerHTML = "Radera";
	deleteButton.addEventListener("click", function(){
	var listItem = this.parentNode.parentNode;
	listItem.parentNode.removeChild(listItem);
});
	liButtons.appendChild(deleteButton);

});

// Klarmarkera-knapp för enskild todo. Denna kod behövs för de todos som är hårdkodade in i index.html. 

// Alla klarmarkera-knappar hämtas via klass och sparas som en NodeList i variabeln doneButtons. NodeListen loopas igenom och varje knapp får en EventListener som lyssnar efter klick.
var doneButtons = document.getElementsByClassName("doneButton");
for(i = 0; i < doneButtons.length; i++){
	doneButtons[i].addEventListener("click", function(){
		/* Den klickade knappens förälder hämtas och sparas sparas i liButtons. Med hjälp av removeChild kan Klarmarkera-knappen tas bort från liButtons. Den behövs inte längre när uppgiften är avklarad.*/
		var liButtons = this.parentNode;
		liButtons.removeChild(this);
		
		// liButtons förälder, ett <li> element, hämtas och sparas i listItem. Klar-listan hämtas via id och listItem läggs till där med appendChild.
		var listItem = liButtons.parentNode;
		var done = document.getElementById("done");
		done.appendChild(listItem);
	});
}


/*Radera-knapp på enskild todo. Denna kod behövs för de todos som är hårdkodade in i index.html.
1. Alla raderaknappar hämtas via klass och sparas som en NodeList i variabeln deleteButtons.
2. NodeListen loopas igenom och varje knapp får en EventListener som lyssnar efter klick.
3. Inuti funktionen hämtas den klickade knappens förälder och sparas i listItem.
4. ListItems förälder (elementet <ul>) raderar barnet listItem (den <li> där den klickade knappen finns).
*/

var deleteButtons = document.getElementsByClassName("deleteButton");

for(i = 0; i < deleteButtons.length; i++){
deleteButtons[i].addEventListener("click", function(){
	var listItem = this.parentNode.parentNode;
	listItem.parentNode.removeChild(listItem);
});
}

/*
Rensa listan-knapp:
1. Knappen hämtas via id.
2. Knappen får en eventListener som lyssnar efter klick.
3. Todo-listan hämtas via id.
4. Innehållet i listan sätts till en tom sträng och allt som fanns där tidigare försvinner.
*/
var deleteAllButton = document.getElementById("deleteAllButton");
deleteAllButton.addEventListener("click", function () {
	var list = document.getElementById("todos");
	list.innerHTML = "";
});