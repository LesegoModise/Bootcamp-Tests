
var provinceCode = regNum.substring(0, 2); //This is the substring method call that takes on two arguments. The first being that it should take the first 2 'letters' of the string to recognise the registration number.
switch (provinceCode) {
    case 'CY':
        return 'Bellville';
    case 'CJ':
        return 'Paarl';
    case 'CA':
        return 'Cape Town';
    default:
        return 'Some other place!'; //You do not have to put in the registration number for the code to pass. That is because any other registration number will not pass anyway.
}
