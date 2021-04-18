const sqlite3 = require("sqlite3").verbose();  // use sqlite
const dbFileName = "BallELO.db";
const db = new sqlite3.Database(dbFileName);  // object, not database.:wq

function initPlayersDB(){

    const cmdStr = 'CREATE TABLE Players (id TEXT UNIQUE, name TEXT, elo INT, wincount INT, losscount INT, creationstamp INT)'
    db.run(cmdStr,tableCreationCallback);

    function tableCreationCallback(err) {
        if (err) {
            if (err.errno == 1){//Table already exists
            	console.log("Table already exists",err);
                return;
            }
            else{//Table could not be created
                console.log("Table creation error",err);
            } 
        } else {//Table was created
            console.log("Table created");
            return;
        }
    }
}

function initGameHistoryDB(){

    const cmdStr = 'CREATE TABLE GameHistory (id TEXT UNIQUE, player1 TEXT, player2 TEXT, winner TEXT, player1elochange INT, player2elochange INT, newelo1 INT, newelo2 INT)'
    db.run(cmdStr,tableCreationCallback);

    function tableCreationCallback(err) {
        if (err) {
            if (err.errno == 1){//Table already exists
            	console.log("Table already exists",err);
                return;
            }
            else{//Table could not be created
                console.log("Table creation error",err);
            } 
        } else {//Table was created
            console.log("Table created");
            return;
        }
    }
}

initGameHistoryDB();
initPlayersDB();