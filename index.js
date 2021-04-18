const sqlite3 = require("sqlite3").verbose();  // use sqlite
const dbFileName = "BallELO.db";
const db = new sqlite3.Database(dbFileName);  // object, not database.:wq

function AddPlayer(name){
	const creationdate = Math.round(Date.now() / 1000);
	const insertquery = "INSERT INTO Players (id,name, elo, wincount, losscount, creationstamp) VALUES (@0,@1,@2,@3,@4,@5)";

    db.run(insertquery, uuidv4(),name,500,0,0,creationdate, (err) => {if (err) { console.log(err); }});

}

function EloChange(player1, player2, winner){
	const getplayer1Data = "SELECT * FROM Players where id = @0";
	const getplayer2Data = "SELECT * FROM Players where id = @0";

	const createnewgamehistory = "INSERT INTO GameHistory (id, player1, player2, winner, player1elochange, player2elochange, newelo1, newelo2 VALUES(@0,@1,@2,@3,@4,@5,@6,@7";

	const updatewinnerdata = "UPDATE Players set wincount = @0, elo = @1 where id =@2";
	const updateloserdata = "UPDATE Players set losecount = @0, elo = @1 where id =@2";
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

AddPlayer("Jason");
AddPlayer("Ken");
AddPlayer("Richard");
AddPlayer("John Sung");
