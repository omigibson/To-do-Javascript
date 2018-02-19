/*
Lägg till-knappen:
1. Knappen hämtas via id.
2. Knappen får en Eventlistener som lyssnar efter klick.
3. När användaren klickar på knappen genomförs koden i den anonyma funktionen. En prompt skapas där användaren skriver uppgiften som hen vill lägga till.
4. Ett nytt list-item skapas och fylls med användarens input.
5. Listan med todos hämtas och den nya uppgiften läggs till med appendChild.
6. Klar- och raderaknappar skapas, får egna eventListeners, och läggs till på användarens nya list-item.
*/

var addButton = document.getElementById("addButton");

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
	deleteButton.addEventListener("click", function(){
	var listItem = this.parentNode;
	listItem.parentNode.removeChild(listItem);
});
	li.appendChild(deleteButton);

});

/*Radera-knapp på enskild todo:
1. Alla raderaknappar hämtas via klass och sparas som en NodeList i variabeln deleteButtons.
2. NodeListen loopas igenom och varje knapp får en EventListener som lyssnar efter klick.
3. Inuti funktionen hämtas den klickade knappens förälder och sparas i listItem.
4. ListItems förälder (elementet <ul>) raderar barnet listItem (den <li> där den klickade knappen finns).
*/

var deleteButtons = document.getElementsByClassName("deleteButton");

for(i = 0; i < deleteButtons.length; i++){
deleteButtons[i].addEventListener("click", function(){
	var listItem = this.parentNode;
	listItem.parentNode.removeChild(listItem);
});
}