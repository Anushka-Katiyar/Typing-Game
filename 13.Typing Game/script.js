// document.addEventListener("DOMContentLoaded", ()=>{
//     //select the elements
//     const textToTypeElement =document.getElementById("text-to-type");
//     const typingInputElement=document.getElementById("typing-input");
//     const speedElement=document.getElementById("speed");
//     const accuracyElement=document.getElementById("accuracy");
//     console.log({
//         textToTypeElement,
//         typingInputElement,
//         speedElement,
//         accuracyElement,
//     });

//     //text to disp
//  const sampleTexts=["you","me","when","they"];

//  //initial value
//  let currentIndex=0;
//  let startTime=new Date();
//  let errors=0;

//  //function to initialize or restart the game
//  function initializeGame(){
//     const text=sampleTexts[Math.floor(Math.random()* sampleTexts.length)];
//     textToTypeElement.textContent=text;
//     typingInputElement.value='';
//     currentIndex=0;
//     startTime=new Date();
//     errors=0;
//     //update fun
//     updateFeedback();
//  }
//  //function to update the speed and accuracy feedback
//  function updateFeedback(){
//    const currentTime=new Date();
//    const elapsedTime=(currentTime-startTime)/60000
//    if(elapsedTime<=0){
//       speedElement.textContent=0;
//    }else{
//       const wordsTyped=typingInputElement.value.trim().split(/\s+/).length;
//       const speed=Math.round(wordsTyped/elapsedTime);
//       speedElement.textContent=speed;
//    }
//    //calculate the accuracy
//    const accuracy=currentIndex>0?Math.round(((currentIndex-errors)/currentIndex)*100):100;
//    accuracyElement.textContent=accuracy;
// }
//  //function to check typed character
//  function checkCharacter(inputChar, targetChar){

//    if(inputChar!==targetChar){
//       errors++
//       //play error sound
//       new Audio('/error.mp3').play();
//       return false;
//    }else{
//       return true;
//    }
//  }
//  //function to display message to the user
//  function displayMessage(message){
//    const messageArea=document.getElementById('message-area');
//    messageArea.textContent=message;
//    //clear the message after 3 sec
//    setTimeout(()=>{
//       messageArea.textContent="";
//    },3000);
//  }
//  //event listener for typing input
//  typingInputElement.addEventListener("input",(e)=>{
// const typedText=typingInputElement.value;
// const targetText=textToTypeElement.textContent;
// if(currentIndex<targetText.length){
//    const isCorrect=checkCharacter(typedText[currentIndex],targetText[currentIndex]);

//    textToTypeElement.innerHTML=targetText.substring(0,currentIndex)+`<span class='${isCorrect?'correct':'incorrect'}'>${targetText[currentIndex]}</span>`+targetText.substring(currentIndex+1);
//    currentIndex++;
//    if(currentIndex===targetText.length){
//       displayMessage("Text completed started the new one.")
//       initializeGame();
//    }
// }
//     //update feedback
//     updateFeedback();
//  });
//  //start the game
//  initializeGame();
// });
document.addEventListener("DOMContentLoaded", () => {
   // Select the elements
   const textToTypeElement = document.getElementById("text-to-type");
   const typingInputElement = document.getElementById("typing-input");
   const speedElement = document.getElementById("speed");
   const accuracyElement = document.getElementById("accuracy");
   const messageArea = document.getElementById('message-area');
 
   console.log({
     textToTypeElement,
     typingInputElement,
     speedElement,
     accuracyElement,
   });
 
   // Sentence fragments for dynamic generation
   const subjects = ["The cat", "A dog", "My friend", "She", "He", "They"];
   const verbs = ["jumps", "runs", "eats", "writes", "drinks", "plays"];
   const objects = ["in the park", "on the hill", "a letter", "some water", "a ball"];
 
   // Function to generate random sentences
   function generateRandomSentence() {
     const subject = subjects[Math.floor(Math.random() * subjects.length)];
     const verb = verbs[Math.floor(Math.random() * verbs.length)];
     const object = objects[Math.floor(Math.random() * objects.length)];
     return `${subject} ${verb} ${object}.`;
   }
 
   // Initial values
   let currentIndex = 0;
   let startTime = new Date();
   let errors = 0;
 
   // Function to initialize or restart the game
   function initializeGame() {
     const text = generateRandomSentence(); // Generate random sentence
     textToTypeElement.textContent = text;
     typingInputElement.value = '';
     currentIndex = 0;
     startTime = new Date();
     errors = 0;
     updateFeedback();
   }
 
   // Function to update the speed and accuracy feedback
   function updateFeedback() {
     const currentTime = new Date();
     const elapsedTime = (currentTime - startTime) / 60000; // time in minutes
     if (elapsedTime <= 0) {
       speedElement.textContent = 0;
     } else {
       const wordsTyped = typingInputElement.value.trim().split(/\s+/).length;
       const speed = Math.round(wordsTyped / elapsedTime);
       speedElement.textContent = speed;
     }
     // Calculate the accuracy
     const accuracy = currentIndex > 0 ? Math.round(((currentIndex - errors) / currentIndex) * 100) : 100;
     accuracyElement.textContent = accuracy;
   }
 
   // Function to check typed character
   function checkCharacter(inputChar, targetChar) {
     if (inputChar !== targetChar) {
       errors++;
       // Play error sound
       new Audio('/error.mp3').play();
       return false;
     } else {
       return true;
     }
   }
 
   // Function to display message to the user
   function displayMessage(message) {
     messageArea.textContent = message;
     // Clear the message after 3 sec
     setTimeout(() => {
       messageArea.textContent = "";
     }, 3000);
   }
 
   // Event listener for typing input
   typingInputElement.addEventListener("input", (e) => {
     const typedText = typingInputElement.value;
     const targetText = textToTypeElement.textContent;
     if (currentIndex < targetText.length) {
       const isCorrect = checkCharacter(typedText[currentIndex], targetText[currentIndex]);
       textToTypeElement.innerHTML = targetText.substring(0, currentIndex) +
         `<span class='${isCorrect ? 'correct' : 'incorrect'}'>${targetText[currentIndex]}</span>` +
         targetText.substring(currentIndex + 1);
       currentIndex++;
       if (currentIndex === targetText.length) {
         displayMessage("Text completed, starting a new one.");
         initializeGame();
       }
     }
     // Update feedback
     updateFeedback();
   });
 
   // Start the game
   initializeGame();
 });
