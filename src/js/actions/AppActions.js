var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/Appconstants');

var AppActions = {
    searchMovies:function(movie){
        
        AppDispatcher.handleViewAction({
            actionType:AppConstants.SEARCH_MOVIES,
            movie:movie
        });
    },
    
    receiveMovieResults:function(movies){        
        AppDispatcher.handleViewAction({
            actionType:AppConstants.RECEIVED_MOVIE_RESULTS,
            movies:movies
        });
    }
    
}

module.exports = AppActions;