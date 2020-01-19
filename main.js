// Create an object that represents your pet:
// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior.
const ourPupper = {
    name: "Piper",
    species: "Mut",
    favoriteToys: [] ,
    play: function (toy) {
        if (toy === "Ball" && "Rope") {
        this.favoriteToys.push(toy)
        console.log(`${ourPupper.name}, "says YAY!"`)
        }
        else {
            console.log(`${ourPupper.name}, "POOPED!"`)
        }
    },
    nicknames: ["Piper Diaper", "Pup Pup"],
    age: 3,
    bark: function (speakToo) {
        // window.alert(`${ourPupper.name} says "WOOF! WOOF!" to ${speakToo}`)
    } ,
    cry: function (sad) {
console.log(`${ourPupper.name} ${sad} if we don't take him for a walk`)
    },
    pant: function (tired) {
// window.alert(`${ourPupper.nicknames} gets ${tired} after running!`)
    }
}
 ourPupper.bark("Phoenix, Madeleine, Lili and Mamma")
 ourPupper.cry("is soooo sad")
 ourPupper.pant("so so tired")
 ourPupper.play("Ball")
 ourPupper.play("Cat")
 ourPupper.play("Rope")


