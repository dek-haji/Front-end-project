const remoteURL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : "http://localhost:5002/api/";
// const jsURL = `${remoteURL}/js`
// const reactURL = `${remoteURL}/react`
// const bootstrapURL = `${remoteURL}/bootstrap`
// const othersURL = `${remoteURL}/others`


export default Object.create(null, {
    get: {
        value: function (URL, id) {
            return fetch(`${URL}/${id}`).then(e => e.json())
        }
    },

    getNoteType: {
        value: function (remoteURL, id) {
            return fetch(`${remoteURL}/notes?noteTypeId=${id}`).then(e => e.json())
        }
    },
    all: {
        value: function (URL) {
            console.log("url", URL)
            return fetch(`${URL}`).then(e => e.json())
        }
    },
    specific: {
        value: function (category) {
            let sessionId = sessionStorage.getItem("userId")
            return fetch(`${remoteURL}/${category}?userId=${sessionId}`).then(e => e.json())
        }
    },
    delete: {
        value: function (id, URL) {
            return fetch(`${URL}/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(e => e.json())
        }
    },
    post: {
        value: function (newObj, URL) {
            return fetch(`${URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newObj)
            }).then(data => data.json())
        }
    },
    put: {
        value: function (URL, editObj) {
            return fetch(`${URL}/${editObj.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editObj)
            }).then(data => data.json());
        }
    },
    patch: {
        value: function (editObj, URL) {
            return fetch(`${URL}/${editObj.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editObj)
            }).then(data => data.json());
        }
    },
    getUsers: {
        value: function(sessionId) {
        return fetch(`http://localhost:5002/users?userId=${sessionId}`).then(e => e.json());
    }},
    getAllUsers: {
        value: function () {
            return fetch(`${remoteURL}/users`).then(e => e.json());
        },
        postUser: {
            value: function (newUser) {
                return fetch(`${remoteURL}/users`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                }).then(data => data.json())
            }
        }
    },
    search: {
        value: function(input) {
      return fetch(`${remoteURL}/notes?title_like=${input}`).then(e => e.json());
    }
  }})