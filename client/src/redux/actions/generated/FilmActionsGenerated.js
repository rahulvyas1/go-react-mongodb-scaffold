/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5def95f9a4f4b55911b3e201
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN FilmActionsGenerated.js PLEASE EDIT ../FilmActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import FilmApi from "../../../api/FilmApi";

let actionsFunction = {

  //CRUD METHODS

  // Create film
  createFilm: function(film) {
    return function(dispatch) {
      return FilmApi
        .createFilm(film)
        .then(film => {
          dispatch(actionsFunction.createFilmSuccess(film));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createFilmSuccess: function(film) {
    return { type: types.CREATE_FILM_SUCCESS, payload: film };
  },


  // Delete film
  deleteFilm: function(id) {
    return function(dispatch) {
      return FilmApi
        .deleteFilm(id)
        .then(film => {
          dispatch(actionsFunction.deleteFilmSuccess(film));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteFilmSuccess: function(film) {
    return { type: types.DELETE_FILM_SUCCESS, payload: film };
  },


  // Find by cast
  findBycast: function(key) {
    return function(dispatch) {
      return FilmApi
        .findBycast(key)
        .then(item => {
          dispatch(actionsFunction.findBycastSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBycastSuccess: function(item) {
    return { type: types.FINDBYCAST_FILM_SUCCESS, payload: item };
  },


  // Find by filmMaker
  findByfilmMaker: function(key) {
    return function(dispatch) {
      return FilmApi
        .findByfilmMaker(key)
        .then(item => {
          dispatch(actionsFunction.findByfilmMakerSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByfilmMakerSuccess: function(item) {
    return { type: types.FINDBYFILMMAKER_FILM_SUCCESS, payload: item };
  },


  // Get film
  loadFilm: function(id) {
    return function(dispatch) {
      return FilmApi
        .getOneFilm(id)
        .then(film => {
          dispatch(actionsFunction.loadFilmSuccess(film));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadFilmSuccess: function(film) {
    return { type: types.GET_FILM_SUCCESS, payload: film };
  },

  // Load  list
  loadFilmList: function() {
    return function(dispatch) {
      return FilmApi
        .getFilmList()
        .then(list => {
          dispatch(actionsFunction.loadFilmListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadFilmListSuccess: function(list) {
    return { type: types.LIST_FILM_SUCCESS, payload: list };
  },

	
  // Save film
  saveFilm: function(film) {
    return function(dispatch) {
      return FilmApi
        .saveFilm(film)
        .then(film => {
          dispatch(actionsFunction.saveFilmSuccess(film));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveFilmSuccess: function(film) {
    return { type: types.UPDATE_FILM_SUCCESS, payload: film };
  },


};

export default actionsFunction;
