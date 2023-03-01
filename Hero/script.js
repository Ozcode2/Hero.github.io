
  // Initial health values
  let hiroshimaHealth = 200
  let nagasakiHealth = 200

   // add code for attacking playerCharacter
  const opponentCharacter = {
    attack: function () {
      if(nagasakiHealth > 0) {
      console.log("Opponent character attacks player character!")
    hiroshimaHealth -= 10
    // add fight sounds
    document.getElementById("fightVoice").play()
    document.getElementById("punchSound").play()
  }
    document.getElementById("hiroshimaHealth").innerHTML = hiroshimaHealth
    if (hiroshimaHealth == 0) {
      // add fight sounds
      document.getElementById("painSound").play()
      document.getElementById("RecordVoice").play()
    }

    }
  }

    // set time interval for attacking opponent character
    setInterval(function () {
    if (hiroshimaHealth > 0) {
      opponentCharacter.attack()
    }
  }, 1500)

    // add attack function for nagasaki
    function attackNagasaki() {
      // Decrement Hiroshima's health
      if(nagasakiHealth > 0 && hiroshimaHealth != 0)
      nagasakiHealth -= 10
      // add fight sounds
      document.getElementById("fightVoice").play()
      document.getElementById("punchSound").play()
      // Update health display
      document.getElementById("nagasakiHealth").innerHTML = nagasakiHealth

      // Check for game over
      if (nagasakiHealth == 0) {
        
        // add pain sound
        document.getElementById("RecordSound").play()
        document.getElementById("painSound").play()
      }
    }

     // add healing function for hiroshima
    function healNagasaki() {
      // Increment Nagasaki's health
      if(nagasakiHealth < 200) {
       nagasakiHealth += 10;
      // Update health display
        document.getElementById("nagasakiHealth").innerHTML = nagasakiHealth;
      }
      // add healing sound
      document.getElementById("Health").play()

    }
    
    // add healing function for hiroshima
    function healingHiroshima() {
      if(hiroshimaHealth < 200) {
      // increment hiroshimaHealth
      hiroshimaHealth += 10

      // Update health display
      document.getElementById("hiroshimaHealth").innerHTML = hiroshimaHealth
    }
      // add healing sound

      document.getElementById("Health").play();

  } 

  

  // Game loop to check player health and declare winner
  setInterval(() => {
    const hiroshimaHealth = document.getElementById("hiroshimaHealth")
    const nagasakiHealth = document.getElementById("nagasakiHealth")
    const winner = document.getElementById("winner")
   
    if (hiroshimaHealth.innerHTML === "0") {
      winner.innerHTML = "Nagasaki wins!"
    } else if (nagasakiHealth.innerHTML === "0") {
      winner.innerHTML = "Hiroshima wins!"
    }

    // clear winner after 5 seconds
    setTimeout(() => {
      winner.innerHTML = ""
    }, 500)
  }, 1000)
    
    // add function that will show what happens when start button is clicked
    function start() {
    hiroshimaHealth = 200
    nagasakiHealth = 200
    // Update health display
    document.getElementById("hiroshimaHealth").innerHTML = hiroshimaHealth
    document.getElementById("nagasakiHealth").innerHTML = nagasakiHealth
    // add game sound
    document.getElementById("Start").play()
  }

  
    