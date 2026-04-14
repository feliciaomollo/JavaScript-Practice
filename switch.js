let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break; //add a break statement else it will go on a loop.
  default:
    alert( "I don't know such values" );
}