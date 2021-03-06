module.exports = {
    "extends": "standard",
        "env": {
        "browser": false,
            "node": true,
            "jest": true
    },
    "parser": "babel-eslint",
        "plugins": [
            "import"
        ],
            "rules": {
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ]
    }
}