class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

module.exports = {
    Cube:Cube
}





let users = [
    {
        nom:"toto",
        prenom:"tata",
        mail:"tata@taat.fr",
        mdp:"asdjañl",
        orders: [
            {
                id: "añsdaslkj"
            },
            
        ]
    },
    {
        nom:"toto",
        prenom:"tata",
        mail:"tata@taat.fr",
        mdp:"asdjañl",
        orders: [
            {
                id: "añsdaslkj"
            },
            
        ]
    },
    {
        nom:"toto",
        prenom:"tata",
        mail:"tata@taat.fr",
        mdp:"asdjañl",
        orders: [
            {
                id: "añsdaslkj"
            },
            
        ]
    }
]

if (users[2].orders[0].id === InputDeviceInfo.value) {
    //redirection vers la home page
}

localStorage.setItem("users", users)



//onclick


function signup(values){
    //users[]
    
}










