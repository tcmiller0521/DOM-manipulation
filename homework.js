/**
 * PROMPT: Using only JavaScript (do not touch the index.html or styles.css file), create a circle that will fill
 * the square and touch all of the edges of the square. Refer to "finished-example.png" to see an example.
 */

 /** BEGIN CODE **/
 const square = document.querySelector('.square');

 let circle=document.createElement('div');
 square.appendChild(circle);

 circle.style.width = '198px';
 circle.style.height = '198px';
 circle.style.border = 'thin solid black';
 circle.style.borderRadius = '100%';
 circle.style.margin = 'auto'
 



