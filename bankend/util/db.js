import mysql from 'mysql'

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "hospitala"

})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    }else{
        console.log("connect")
    }
})

export default con;