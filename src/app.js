require("./db/connection")
const mongoose = require("mongoose");

const yargs = require("yargs")
const {addMovie, listMovies, updateMovie} = require("./movies/movieMethods");

const app = async (yargsObj) => {
    try{
        if (yargsObj.add) {
            await addMovie({title: yargsObj.title,
                actor: yargsObj.actor,
                director: yargsObj.director})
console.log(await listMovies());
        } else if(yargsObj.list){
            console.log(await listMovies());
        }else if (yargsObj.update){
            let id = { title: yargsObj.update};
            let change = {}
            if (yargsObj.title){
                change = {...change,title: yargsObj.title};
            }
            if (yargsObj.actor){
                change = {...change,actor: yargsObj.actor};
            }
            if (yargsObj.director){
                change = {...change,director: yargsObj.director};
            }
        await updateMovie(id,change);
    console.log("Entry Updated");
        }

        else {
            console.log("Incorrect command, try again")
        }
        await mongoose.disconnect();
    }catch(error){
console.log(error)
    };
};

app(yargs.argv);