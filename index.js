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
});
