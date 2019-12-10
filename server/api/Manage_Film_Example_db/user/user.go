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
package user

import (
	"skaffolder/Manage_Film_Example/config"
	"skaffolder/Manage_Film_Example/security"

	"github.com/go-chi/chi"

	"encoding/json"
	"errors"
	"net/http"
	"github.com/globalsign/mgo/bson"
	"github.com/go-chi/render"
)

type Config struct {
	*config.Config
}

func New(configuration *config.Config) *Config {
	return &Config{configuration}
}

// Routes
func (config *Config) Routes() *chi.Mux {
	router := chi.NewRouter()

	// start routing

	router.Group(func(router chi.Router) { 
		router.Use(security.HasRole("ADMIN"))
		router.Post("/{id}/changePassword", config.changePasswordCustom)
	})

	router.Group(func(router chi.Router) { 
		router.Use(security.HasRole())
		router.Post("/", config.create)
	})

	router.Group(func(router chi.Router) { 
		router.Use(security.HasRole())
		router.Delete("/{id}", config.delete)
	})

	router.Group(func(router chi.Router) { 
		router.Use(security.HasRole())
		router.Get("/{id}", config.get)
	})

	router.Group(func(router chi.Router) { 
		router.Use(security.HasRole())
		router.Get("/", config.list)
	})

	router.Group(func(router chi.Router) { 
		router.Use(security.HasRole())
		router.Post("/{id}", config.update)
	})

	// end routing

	// Write here your custom APIs
	// EXAMPLE :

	/**
	router.Group(func(router chi.Router) {
		router.Get("/", config.listCustom) // Create the listCustom method in this file
	})
	*/

	return router
}

/*
Name: changePassword
Description: Change password of user from admin
Params:
*/
func (config *Config) changePasswordCustom(writer http.ResponseWriter, req *http.Request) {

	// Get body vars
	type PwdUser struct {
		Id            string `json:"id"`
		PasswordAdmin string `json:"passwordAdmin"`
		PasswordNew   string `json:"passwordNew"`
	}
	var body PwdUser
	json.NewDecoder(req.Body).Decode(&body)

	// Check admin password
	var result User
	err := config.Database.C("User").Find(bson.M{"username": "admin", "password": body.PasswordAdmin}).One(&result)
	if err != nil {
		render.Status(req, 403)
		err = errors.New("Old password not valid")
		render.JSON(writer, req, nil)
		return
	}

	// Update password
	config.Database.C("User").UpdateId(bson.ObjectIdHex(body.Id), bson.M{"$set": bson.M{"password": body.PasswordNew}})

	render.JSON(writer, req, nil)
}