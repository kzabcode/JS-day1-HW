//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i = 0; i < dog_string.length; i++){
        if (i[0] = dog_names[0]){
            return "Matched dog_name"
        } else {
            return "No Matches"
        }
    }
}

console.log(findWords())


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    let i = arr.length;
    while (i--) i % 2 === 0 && (arr.splice(i, 1, "even index"));
    console.log(arr)
}

// function replaceEvens(arr){
//     let x = arr.filter((element, index) => {
//         if (index % 2 == 0){
//             return "even index"
//         } else {
//             return element
//         }
//     })
// }

console.log(replaceEvens(Given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]