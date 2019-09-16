var veryHungry = false;

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Lil Red Riding Hood"; // title

  document.getElementById('author').innerHTML="Nali"; // author


  
  // All of your code goes under here
  

  var story = ' The Lil Red Riding Hood was looking for her way back home. ' + many() + delicious(); // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function many() {
  let hours = Math.floor(random(1, 7)); // Random number rounded down
  if(hours = 1) {
    return "Gets a ride and gets straight home. Happy ending."
  } else if(hours == 2 ||hours == 3 || hours == 4) {
    return "The girl Comes across a big scary wolf. " + inspects()
  } else if(hours == 5 || hours == 6||  hours == 7){
  return  "Takes too long, gets lost, dies, story ends. "
  }
}

function delicious() {
  if(veryHungry == true) {
    return "the wolf murdered everyone by the time she got home and it became a story The End."
  } else {
    let inspection = inspects();
    return inspection;
  }
}

function inspects() {
  let insp =  Math.floor(random(1, 7));
  if(insp ==1|| insp ==2||insp ==3|| insp ==4 ) {
    return "The wolf decides not to kill the lil girl, but instead he follows her. He sees her house and as she still on the trail there, he gets to the house before her. "+ die()
  } else{(insp <= 5)
    return "The wolf kills the grandma and the girl and is a happy ending for the wolf."
  }
}
function die() {
  let insp = Math.floor(random(1, 7));
  if(insp <= 2) {
    return "The Wolf kills the grandma and leaves the  girl to die alone."
  } else if(insp== 3 || insp == 4) {
    return "The girl sees the wolf walking into her house and find a guy cutting trees to kill the wolf, The End. "
  } else if(insp == 5 || insp == 6){
  return  "The girl sees the wolf going into her house and as she walks in she hears noise in the closet and shoots through the door with her dads rifle and when see opens it, it's her grandma covered in blood and the wolf's right behind her. "
  }
}



//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    
