
         let obj= JSON.parse(localStorage.getItem('Score')) ||{
                win:0,
                losses:0,
                tie: 0,
                Total_Matches: 0

            };
            var scoreDisplay =document.querySelector('.js-score-display');
            
            function scoredisplay(){
            scoreDisplay.innerHTML=`<h4>Win: ${obj.win}   Losses: ${obj.losses}   Tie: ${obj.tie}   Total Matches: ${obj.Total_Matches}</h4>`

            }
            
            //befoment this we  stored obj object in local storage; see in script function Gamepay(). in any if statement
            
            // console.log(obj)
            // to get and check that out value stored in localstorage
            // console.log(localStorage.getItem('Score'));
            // game Logic Starts from here 
                let result;
                let MoveComp = '';
                MoveComp=functions();
                let playerselector1='';
                
            function Gamepay(playerselector){
                MoveComp = functions();
                playerselector1=playerselector;
                    MoveComp=functions();
                if(playerselector==='Rock'){
                
               
               if(MoveComp==='Rock'){
                result='Match Tie';
               }
               else if(MoveComp==='Paper')
               {
                result='Computer Win';
               }else
               {
                result='You Win';
               }
                
                if(result==='You Win'){
                        obj.win+=1;
                        obj.Total_Matches++;
                    }else if(result==='Computer Win'){
                        obj.losses+=1;
                        obj.Total_Matches++;
                    }else if(result==='Match Tie'){
                        obj.tie+=1;
                        obj.Total_Matches++;

                    }
                    
                    localStorage.setItem('Score', JSON.stringify(obj)) //- we staroed obj object in local storage
                    
                    // console.log(sd.innerHTML);
                    moveselectoring();
                    console.log(moveselectoring());
                    scoredisplay();

            //    alert(`Computer Selected: ${MoveComp}   You Selected:${playerselector}   Final Result: ${result}
            //         Win: ${obj.win}   Losses: ${obj.losses}   Tie: ${obj.tie}   Total Matches: ${obj.Total_Matches}`)
                }
                else if(playerselector==='Paper'){
                    MoveComp = functions();
               if(MoveComp ==='Rock'){
                result='You Win';
               }
               else if(MoveComp ==='Paper')
               {
                result='Tie';
               }else{
                result='Computer Win';
               }

                if(result==='You Win'){
                        obj.win+=1;
                        obj.Total_Matches++;
                    }else if(result==='Computer Win'){
                        obj.losses+=1;
                        obj.Total_Matches++;
                    }else if(result==='Tie'){
                        obj.tie+=1;
                        obj.Total_Matches++;

                    }
                     localStorage.setItem('Score', JSON.stringify(obj)) //- we staroed obj object in local storage
                        moveselectoring();
                        // console.log(moveselectoring());
                        scoredisplay();

            //    alert(`Computer Selected: ${MoveComp}   You Selected:${playerselector}   Final Result: ${result}
            //          Win: ${obj.win}   Losses: ${obj.losses}   Tie: ${obj.tie}   Total Matches: ${obj.Total_Matches}`)

                }else if(playerselector==='Scissor'){
                    MoveComp = functions();
                    
                    if(MoveComp ==='Rock'){
                        result='Computer Win';
                    }
                    else if(MoveComp ==='Paper')
                    {
                        result='You Win';
                    }else{
                        result='Tie';
                    }

                    if(result==='You Win'){
                        obj.win+=1;
                        obj.Total_Matches++;
                    }else if(result==='Computer Win'){
                        obj.losses+=1;
                        obj.Total_Matches++;
                    }else if(result==='Tie'){
                        obj.tie+=1;
                        obj.Total_Matches++;

                    }
                     localStorage.setItem('Score', JSON.stringify(obj)) //- we staroed obj object in local storage
                    moveselectoring();

                    scoredisplay();

                    // alert(`Computer Selected: ${MoveComp}   You Selected:${playerselector}   Final Result: ${result}
                    //  Win: ${obj.win}   Losses: ${obj.losses}   Tie: ${obj.tie}   Total Matches: ${obj.Total_Matches}`)
                    }
                    
            }

            function moveselectoring(){
                    let sd=document.querySelector('.choosen');
                       
                        if(obj.Total_Matches===0){
                            sd.innerHTML=`Lets Start The game`;
                            console.log(sd.innerHTML);
                            
                        }else{
                            
                            sd.innerHTML=` <h4> Computer Selected: <img class="imgs" src="./image/${MoveComp}.png" alt="">   
                            You Selected: <img class="imgs" src="./image/${playerselector1}.png" alt=""> 
                            Final Result: ${result}</h4>`
                            
                        }
                    }

            // this function plays the computer side role
            function functions(){
                 ComputerPickNum = Math.random()*10;
               if(ComputerPickNum<=3){
                    MoveComp='Rock';
               }else if(ComputerPickNum>3 && ComputerPickNum<=6.5){
                    MoveComp='Paper';
               }else if(ComputerPickNum>6.5 && ComputerPickNum<=10){
                MoveComp='Scissor';
               }
               return MoveComp;

            }
            function clicksound(){
                let cs=document.querySelector('.butn');
                cs.innerHTML=`<source src="image/click.mp3" type="audio/mpeg">`
                cs.play();
                console.log(cs.innerHTML);
            }

             function Gameover(){
                let cs=document.querySelector('.Gameover');
                cs.innerHTML=`<source src="image/gameOver.mp3" type="audio/mpeg">`
                cs.play();
            }
            function musicMute(){
                let music=document.querySelector('.Music')
                let unmute=document.querySelector('.mute');
                if(unmute.innerHTML==='OFF-Sound'){
                    unmute.innerText=`On-Sound`;

                    music.pause();
                }else{
                    unmute.innerHTML='OFF-Sound';
                    music.play();
                };
            }
