document.addEventListener("DOMContentLoaded", () => {
  //Used to select elements by id~
  const titleElement = document.getElementById("page-title");

  titleElement.style.backgroundColor = "blue";
  //Used to select elements by classnames
  const famContact = document.getElementsByClassName("family");

  //Used to select elements by tagnames
  const tagName = document.getElementsByTagName("p");

  const firstWorkContact = document.querySelector(".work");

  const thirdChild = document.querySelector("div button:nth-child(3)");

  const allButtons = document.querySelectorAll("button");

  console.log(famContact);
  console.log(titleElement);
  console.log(tagName);
  console.log(firstWorkContact);
  console.log(thirdChild);
  console.log(allButtons);

  //This function loops over each of the buttons using the foreach method.
  allButtons.forEach((button) => {
    console.log(button);
  });

  const topic = document.getElementById("topic");
  console.log(topic.innerHTML);
  topic.innerHTML = "Hey where are you going to?";
  console.log(topic.innerHTML);

  const comparison = document.getElementById("comparison");

  //This shows it how it is like in the html with respect to styling and the diferent properties given to it.
  console.log(comparison.innerText);
  //This outputs the property exactly as it appears in the markdown.
  console.log(comparison.textContent);

  let address = `ABC Street,
   Spintex Road,
    Accra,
     Ghana.`;
  const innerTextExample = document.getElementById("inner-text");

  const textContentExample = document.getElementById("text-content");

  innerTextExample.innerText = address;
  textContentExample.textContent = address;

  console.log(innerTextExample, textContentExample);

  const imageElement = document.querySelector("img");
  console.log(imageElement.getAttribute("src"));

  console.log(imageElement.getAttribute("alt"));

  //Logging out the original alternate text attribute.
  console.log("BEFORE:", imageElement.getAttribute("alt"));
  //The setAttribute method that could be used to change the attribute of an element.
  //It takes in 2 arguments, the first is the name of the attribute you want to change and the second one is the new value you want to give the attribute.

  imageElement.setAttribute(
    "alt",
    "just checking out the setAttribute method."
  );
  console.log("AFTER:", imageElement.getAttribute("alt"));
  //NOTE: When you pass an argument to the setAttribute method and that attribute doesn't exit on the element, it will create a new attribute. For example, you can add a height property to the image element like so:

  console.log("BEFORE:", imageElement.getAttribute("height"));
  imageElement.setAttribute("height", "200");
  console.log("AFTER:", imageElement.getAttribute("height"));

  const header = document.querySelector("h1");
  header.style.color = "aqua";
  //In javascript, css properties with hyphens are written in camelCase format.
  header.style.fontWeight = "900";
  header.style.textTransform = "upperCase";
  header.style.padding = "5PX";
  header.style.float = "left";
  console.log(header.style);
  console.log(header.className);
  header.className = "title";
  console.log(header.className);

  const foodParagraph = document.getElementById("jollof");

  foodParagraph.classList.add("rice", "and", "chicken");

  console.log(foodParagraph.classList);

  foodParagraph.classList.remove("nigerian");

  foodParagraph.classList.replace("food", "nigerian");
  console.log(foodParagraph.classList.contains("nigerian"));
  console.log(foodParagraph.classList);

  //The toggle method is used to check if a property contains the given classname and if it doesn't, it adds it. If it did contain it, it removes it.
  foodParagraph.classList.toggle("american");

  console.log(foodParagraph.classList);

  const italicsText = document.getElementById("italics");

  console.log(italicsText);
  console.log(italicsText.parentNode.parentNode);

  const containerEl = document.getElementById("container");
  const containerChildren = containerEl.children;
  const containerChildrenNodes = containerEl.childNodes;

  console.log(containerChildren);
  console.log(containerChildrenNodes);
  console.log(containerEl);

  const myButton = document.getElementById("myButton");

  console.log(myButton);

  myButton.addEventListener("click", () => {
    alert(`Button Clicked!`);
    myButton.style.backgroundColor = "red";
  });

  header.oncopy = () => alert("You copied the header text!");
});
