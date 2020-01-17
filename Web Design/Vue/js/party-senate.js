

  // ------------------Create Vue Object------------------------

  var app = new Vue({

    el: '#app',
    data: 
             { mostMembers: 0,
              leastMembers: 0,
              reps: 0,
              dems: 0,
              inds: 0, 
              repsVotedWithParty: 0,
              demsVotedWithParty: 0, 
              indsVotedWithParty: 0 }
  
  
  })
  
     // ------------------Function to Order by Most Loyalty------------------------

              function orderByMostLoyalty(a, b) {

                if(a.votes_with_party_pct<b.votes_with_party_pct){
                  return -1;
                } else if ( a.votes_with_party_pct>b.votes_with_party_pct) { 
                  return 1;
                } else {
                  return 0;
                }
              }


        // ------------------Function to Order by Least Loyalty------------------------

              function orderByLeastLoyalty(a, b) {

                if(a.votes_with_party_pct<b.votes_with_party_pct){
                  return 1;
                } else if ( a.votes_with_party_pct>b.votes_with_party_pct) { 
                  return -1;
                } else {
                  return 0;
                }
              }
          

         // ------------------Function to Order by Most Attendance------------------------

         function orderByMostAttendance(a, b) {
          if (a.missed_votes_pct < b.missed_votes_pct && a.total_votes !==0) {
            return -1;
          } else if (a.missed_votes_pct > b.missed_votes_pct || a.total_votes === 0) {
            return 1;
          } else {
            return 0;
          }
        }


  // ------------------Function to Order by Least Attendance------------------------

        function orderByLeastAttendance(a, b) {
          if (a.missed_votes_pct < b.missed_votes_pct || a.total_votes === 0)  {
            return 1;
          } else if (a.missed_votes_pct > b.missed_votes_pct && a.total_votes !==0) {
            return -1;
          } else {
            return 0;
          }
        }






  // ------------------declaring Variables------------------------

          let reps;
          let repsVotedWithParty = 0;    
          let dems;
          let demsVotedWithParty = 0;    
          let inds;
          let indsVotedWithParty = 0;    
          let mostLoyalMembers;
          let leastLoyalMembers;




  // ------------------get Average Perc per Party------------------------


              function getPerc( value ){
                return Math.round(value*100)/100;
              };



  // ------------------request data vars------------------------------------------------


              var urlApi= "https://api.propublica.org/congress/v1/113/senate/members.json"

              var myKey={
                'headers': {
                  'X-API-Key': 'POAmfSj5GIRl7VYUg2LmEF0nxleIfApezpxO8gVS'
                }
              };
              
              var members;



  // ------------------fetching data to props------------------------------------------------

              fetch(urlApi, myKey)
              .then(res => res.json())
              .then(data =>{ mostMembers = Array.from(data.results[0].members);
                            leastMembers = Array.from(data.results[0].members);
              }) 
              .then( () => {mostMembers.sort(orderByMostLoyalty);
                           leastMembers.sort(orderByLeastLoyalty);
                            })

              .then(() => {reps = mostMembers.filter(mostMembers => mostMembers.party === 'R');
                           dems = mostMembers.filter(mostMembers => mostMembers.party === 'D');
                           inds = mostMembers.filter(mostMembers => mostMembers.party === 'I');
             })

             .then(() => {app.mostMembers = mostMembers;
                          app.leastMembers = leastMembers;
                          app.reps = reps;
                          app.dems = dems;
                          app.inds = inds;
             })

            .then(() => { reps.forEach(member => repsVotedWithParty += member.votes_with_party_pct);
                          repsVotedWithParty = getPerc(repsVotedWithParty/reps.length);
                          app.repsVotedWithParty = repsVotedWithParty;

                          dems.forEach(member => demsVotedWithParty += member.votes_with_party_pct);
                          demsVotedWithParty = getPerc(demsVotedWithParty/dems.length);
                          app.demsVotedWithParty = demsVotedWithParty;

                          inds.forEach(member => indsVotedWithParty += member.votes_with_party_pct);
                          indsVotedWithParty = getPerc(indsVotedWithParty/inds.length);
                          app.indsVotedWithParty = indsVotedWithParty;  
            })





