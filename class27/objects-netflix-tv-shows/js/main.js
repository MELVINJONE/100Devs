//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTVShows {
    constructor(title, genre, rating, language) {
        this.title = title
        this.genre = genre
        this.rating = rating
        this.language = language
    }
    release() {
        console.log('tcharannnn');
    }
    close() {
        console.log('the end');
    }
}

let bridgerton = new MakeNetflixTVShows('Bridgerton', 'romance', '10/10', 'English')