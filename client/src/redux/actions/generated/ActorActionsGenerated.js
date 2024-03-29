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
 *  TO CUSTOMIZE FUNCTIONS IN ActorActionsGenerated.js PLEASE EDIT ../ActorActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import ActorApi from "../../../api/ActorApi";

let actionsFunction = {

  //CRUD METHODS

  // Create actor
  createActor: function(actor) {
    return function(dispatch) {
      return ActorApi
        .createActor(actor)
        .then(actor => {
          dispatch(actionsFunction.createActorSuccess(actor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createActorSuccess: function(actor) {
    return { type: types.CREATE_ACTOR_SUCCESS, payload: actor };
  },


  // Delete actor
  deleteActor: function(id) {
    return function(dispatch) {
      return ActorApi
        .deleteActor(id)
        .then(actor => {
          dispatch(actionsFunction.deleteActorSuccess(actor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteActorSuccess: function(actor) {
    return { type: types.DELETE_ACTOR_SUCCESS, payload: actor };
  },


  // Get actor
  loadActor: function(id) {
    return function(dispatch) {
      return ActorApi
        .getOneActor(id)
        .then(actor => {
          dispatch(actionsFunction.loadActorSuccess(actor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadActorSuccess: function(actor) {
    return { type: types.GET_ACTOR_SUCCESS, payload: actor };
  },

  // Load  list
  loadActorList: function() {
    return function(dispatch) {
      return ActorApi
        .getActorList()
        .then(list => {
          dispatch(actionsFunction.loadActorListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadActorListSuccess: function(list) {
    return { type: types.LIST_ACTOR_SUCCESS, payload: list };
  },

	
  // Save actor
  saveActor: function(actor) {
    return function(dispatch) {
      return ActorApi
        .saveActor(actor)
        .then(actor => {
          dispatch(actionsFunction.saveActorSuccess(actor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveActorSuccess: function(actor) {
    return { type: types.UPDATE_ACTOR_SUCCESS, payload: actor };
  },


};

export default actionsFunction;
