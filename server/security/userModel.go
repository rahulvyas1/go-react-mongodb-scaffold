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
package security

import "github.com/globalsign/mgo/bson"

// Data model
type User struct {
	ID       bson.ObjectId `bson:"_id,omitempty" json:"_id"`
	Mail     string        `json:"mail"`
	Name     string        `json:"name"`
	Password string        `json:"password"`
	Roles    []string      `json:"roles"`
	Surname  string        `json:"surname"`
	Username string        `json:"username"`
	Token    string        `json:"token"`
}
