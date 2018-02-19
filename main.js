/*
Lägg till-knappen:
1. Knappen hämtas via id.
2. Knappen får en Eventlistener som lyssnar efter klick.
3. När användaren genomförs koden i den anonyma funktionen. Inne i funktionen skapas en prompt där användaren skriver uppgiften som hen vill lägga till.
4. Ett nytt list-item skapas och fylls med användarens input.
5. Listan med todos hämtas och den nya uppgiften läggs till med appendChild.
6. Klar- och raderaknappar skapas och läggs till på vårt nya list-item.
*/

document.getElementById("addButton");
addButton.addEventListener("click", function () {
	var task = prompt("Skriv den nya uppgiften här");
	
	var li = document.createElement("li");
	li.innerHTML = "<p>" + task + "</p>";
	
	var todos = document.getElementById("todos");
	todos.appendChild(li);
	
	var doneButton = document.createElement("button");
	doneButton.class = "donebutton";
	doneButton.innerHTML = "Klarmarkera";
	li.appendChild(doneButton);
	
	var deleteButton = document.createElement("button");
	deleteButton.class = "deletebutton";
	deleteButton.innerHTML = "Radera";
	li.appendChild(deleteButton);

});