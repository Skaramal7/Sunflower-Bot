module.exports = async (client,msg) =>{
    const jokes = [
        '*What is a Fish with no eyes?\nA Fsh*',
        '*What are 2 witches living together?\nbroommates*',
        '*How does a Non-Binary Samurai Kill people?\nThey / Them*',
        '*What is an Aligator using a Vest?\nAn Investigator*',
        '*What Did one Wall say to the Other Wall?\nI’ll Meet you at the Corner.*',
        '***A:** I’m on a Seafood Diet.\n**B:** What’s a seafood diet?\n**A:** When I "See a food" I eat it*',
        '*If a Man doesn’t appreciate your Fruit jokes...\nYou gotta Let that Mango!*',
        '*What did the Computer say to The Other after a 16h Car ride?\n"Damn that Was a Hard Drive!"*',
        '*What’s the difference Between in-laws & out-laws?\nOutlaws are Wanted*',
        '*My Dad used to Hit me with Cameras\nI still have Flashbacks*',
        '*What do you Call a dead Magician?\nAn Abracadaver*',
        '*The school Phoned me today and Said, "Your son’s has been Telling Lies."\nI replied, "Tell him, he’s Bloody good. I don’t have Any Kids."*',
        '*Why did the Bullet end up Losing they’re Job?\nThey got Fired*',
        '*There’s a Snow Storm warning for NY, including Wall Street\nWhat a terrible Time for Shorts*',
        '*What do you Call a Teenager who never Grows up?\nConstantine*',
        '*If you Become seriously Depressed, try drinking a Gallon of water Just before you Go to Bed\nThat’ll give you a Reason to get Out of bed in the Morning*',
    ];
    const response = jokes[Math.floor(Math.random() * jokes.length)];
    msg.channel.send(response);
    }