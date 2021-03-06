const mongoose = require("mongoose");
const Movie = require("./movieModels");

exports.addMovie =  async (movieObj) => {

    try{
        await Movie.create(movieObj)
    }catch (error){
        console.log(error)
    }
};

exports.listMovies = async() => {
try {
    return await Movie.find({});
}catch(error){
    console.log(error)
};
};

// create an update one or update many function

exports.updateMovie = async (id, movieObj) => {
    try {
        await Movie.updateOne(id, movieObj);
        

    }catch(error){
        console.log(error);
    };
};

//create a delete or delete many function
exports.deleteFilm = async (Movie, target) => {
    try{
        //deleting identifier which is target variable
    const deleted = await Movie.deleteOne(target);
    console.log(deleted);
} catch (error){
    console.log(error);
}
};