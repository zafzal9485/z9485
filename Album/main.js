//This program will involve a function, it will be used to display objects of a music album,
//however it will be optional to show how many tracks are in the album..
function make_album(Artist, Album, tracks) {
    //you'll notice a question mark with tracks, that is a way of coding to show that it is an optional parameter.
    return { Artist: Artist, Album: Album, tracks: tracks };
}
//These are'nt the accurate actual albums i have arbitrarily written them down to show that the code works.
var album1 = make_album("Ali Zafar", "Sayonee", 5);
var album2 = make_album("Atif Aslam", "Taqdeer", 10);
//Now i will make a 3rd entry in which i will not enter the number of tracks of the artist in the album.
var album3 = make_album("Shreya Goswel", "Chura lia hai tumne jo dil ko");
//after writing the whole code, we also have to print the albums, so we will need the print command.
console.log(album1);
console.log(album2);
console.log(album3);
