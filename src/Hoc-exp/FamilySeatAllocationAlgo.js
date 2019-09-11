/* 
    Write the algorithum for  seat allocation for 4 members of a families ,family either can sit toughter on 
    four consigutive seats  or sit with 2 person toughter lets take example 
    we have  10 seats in each row

    A   B   C  |  D  E  F  G  |   H   I  J 
	----------------------------------------
	  NA  X  X      X  X  X  X      X   X NA
    X   NA NA     NA NA X  X      X   X NA
        
        in above example  1A and 1J  is allocated then 2 family can sit in one row 
        in 2ed row 2B 2C 2D 2E 2J is allocated then one family can sit 

*/
//N - number of rows
//S - Allocated seats
function solution(N, S) {
    const sectionsCol= {
    "sec1":["A","B","C"],
    "sec2":["D","E","F","G"],
    "sec3":["H","I","J"]
    };

    var canSitToghter = {}; 
    if(N===1 && S===""){
      return 2;
    }
    
    var familyCount = 0;
    //checking for rows
    for(var i=1;i<N+1;i++){
      var twoCanSitTog = true;
      canSitToghter["row"+i] = {};
      var siteAllow = {};
      var seatAllotCount = 0;
      for(var p in sectionsCol){
          
          //sectionsCol[p]
          
          for(var j of sectionsCol[p]){
              if(j=="B" || j=="C"){
                  if(!(S.indexOf((i)+j)>-1)){
                      seatAllotCount+=1;
                  }else{
                    seatAllotCount=0;
                    break;
                  }
              }
              if(j=="D" || j=="E" || j=="F" || j=="G"){
                   if(!(S.indexOf((i)+j)>-1)){
                      seatAllotCount+=1;
                      if(seatAllotCount===4){
                          familyCount+=1;
                          seatAllotCount=0;
                      }
                  }else{
                    seatAllotCount=0;
                    //break;
                  }
              }
              if(j=="H" || j=="I" || j=="J" || j=="K"){
                  
                       if(!(S.indexOf((i)+j)>-1)){
                      seatAllotCount+=1;
                      if(seatAllotCount===4){
                          familyCount+=1;
                          seatAllotCount=0;
                          
                      }
                  }else{
                    seatAllotCount=0;
                    break;
                  }
              }
          }
       }
    }
    console.log(familyCount);
    return familyCount;   
}