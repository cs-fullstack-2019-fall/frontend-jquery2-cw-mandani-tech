/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white yellow when you click on one of them*/


$('.hello').css('backgroundColor','yellow');


/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */


$('h1').mouseenter(function ()
{
    console.log('event fired');
    $('h1').css('height','50px','width','50px');


});

$('h1').mouseleave(function ()
{
    console.log('event fired');
    $('h1').css('height','','width','');
});

// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
let elementp=$('p.hello  ');
elementp.click(function (){
    elementp.append('.');
});