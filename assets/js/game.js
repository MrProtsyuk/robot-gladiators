var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
  
    return value;
  };


var fight = function(enemy) {
    // repeat and execute as long as the enemy is alive
    while(playerInfo.health > 0 && enemy.Health > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player chooses to fight, then fight
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you would like to quit?");
            
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money from player
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money" , playerInfo.money);
                break;
            }
        }
        //remove enemy health by subtraction.
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.Health = Math.max(0, enemy.Health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.Name + ". " + enemy.Name + " now has " + enemy.Health + " health remaining."
            );
            // check enemy's health
            if (enemy.Health <= 0) {
                window.alert( + " has died!");
                break;
            }
            else {
                window.alert( + " still has " + enemy.Health + " health left.");
            }
            // Subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
            var damage = randomNumber(enemy.Attack - 3, enemy.Attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            // Log a resulting message to the console so we know that it worked.
            console.log(
                enemy.Name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
                // check player's health
                if (playerInfo.health <= 0) {
                    window.alert(playerInfo.name + " has died!");
                    break;
                }
                else {
                    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                }
            }
        };

        var playerInfo = {
            name: window.prompt("Whats is your robot's name?"),
            health: 100,
            attack: 10,
            money: 10,
            reset: function() {
                this.health = 100;
                this.money = 10;
                this.attack = 10;
            },
            refillHealth: function() {
                if (this.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                this.health += 20;
                this.money -= 7;
                }
                else {
                    window.alert("You don't have enough money!");
                }
            },
            upgradeAttack: function() {
                if (this.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                this.attack += 6;
                this.money -+ 7; 
                }
                else {
                    window.alert("You don't have enough money!");
                }
            }
        };

        var enemyInfo = [
            {
                name: "roborto",
                attack: randomNumber(10, 14)
            },
            {
                name: "Amy Android",
                attack: randomNumber(10, 14)
            },
            {
                name: "Robo Trumble",
                attack: randomNumber(10, 14)
            }
        ];
        
        var startGame = function() {
            //reset player stats
           playerInfo.reset();

        };
            
            for(var i = 0; i < enemyInfo.length; i++){
                if(playerInfo.health > 0) {
                    window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
                    
                    var pickedEnemyObj = enemyInfo[i];
                    pickedEnemyObj.health = randomNumber(40, 60);
                    fight(pickedEnemyObj);
                    
                    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                        
                        if (storeConfirm) {
                            shop();
                        }
                    }
                    
                    else {
                        window.alert("You have lost your robot in battle! GAME OVER!");
                        break;
                    }
                }
                endGame();
        };
        
        var endGame = function() {
            if (playerInfo.health > 0) {
                window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
            }
            else {
                window.alert("You've lost your robot in battle.");
            }
            
            
            var playAgainConfirm = window.confirm("Would you like to play again?");
            
            if (playAgainConfirm) {
                startGame();
            }
            else {
                window.alert("Thank you for playing Robot Gladiators! Come back soon!");
            }
        };
        
        var shop = function() {
            // ask player what they'd like to do
            var shopOptionPrompt = window.prompt(
                "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
                );
                
                // use switch to carry out action
                switch (shopOptionPrompt) {
                    case "REFILL":
                        case "refill":
                            playerInfo.refillHealth();
                            break;
                            case "UPGRADE":
                                case "upgrade":
                                    playerInfo.upgradeAttack();
                                    break;
                                    case "LEAVE":
                                        case "leave":
                                            window.alert("You did not pick a valid option. Try again.");
                                            
                                            shop();
                                            break;
                                        }
                                    };
                                    
                                    startGame();