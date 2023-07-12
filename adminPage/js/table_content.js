

// To Create the Leaderboard Barchart
const ctx = document.getElementById('myChart');

// The list of Registered Users
var userList=[{user:'Priyanshu Choudhary',BestTime:23.4,MatchPlayed:10,Rank:0},
            {user:'Kartikya Singhal',BestTime:24.5,MatchPlayed:2,Rank:0},
            {user:'Tanish Gupta',BestTime:15.4,MatchPlayed:8,Rank:0},
            {user:'Mridul Kumar Pal',BestTime:20.2,MatchPlayed:5,Rank:0},   
            {user:'Sanskar Aggarwal',BestTime:24.2,MatchPlayed:4,Rank:0},
            {user:'Prince',BestTime:14.2,MatchPlayed:7,Rank:0},
            {user:'Himanshu Kaushik',BestTime:19.8,MatchPlayed:2,Rank:0},
            {user:'Harsh Lohan',BestTime:17.5,MatchPlayed:1,Rank:0},
            {user:'Sam Karan',BestTime:18.8,MatchPlayed:8,Rank:0},
            {user:'Sachin Tendulkar',BestTime:29.0,MatchPlayed:18,Rank:0},
            {user:'Manish Pal',BestTime:13.8,MatchPlayed:9,Rank:0},
            
        ]
         

// Sort the User's List
function sort(userList){
    for(var i = 0;i<userList.length-1;i++)
    {
        for(var j=0;j<userList.length-i-1;j++)
        {
            if(userList[j].BestTime>userList[j+1].BestTime)
            {
                var temp=userList[j].BestTime;
                userList[j].BestTime=userList[j+1].BestTime;
                userList[j+1].BestTime=temp;
            }
        }
    }
    return userList;
}

// Printing Table function
function printTable(userList)
{
    var tableuserList=document.getElementById('table');
    var table='<table><thead><tr><th>S.No.</th><th>Name</th><th>Best Time</th><th>Match Played</th><th>Rank</th></tr></thead><tbody>';
    userList = sort(userList);
    for(var i = 0;i<userList.length;i++)
    {
        table+='<tr><td>'+(i+1)+'</td><td>'+userList[i].user +'</td><td>'+userList[i].BestTime+'</td><td>'+userList[i].MatchPlayed+'</td><td>'+userList[i].Rank+'</td></tr>';
    }
    table+='</tbody></table>';

    tableuserList.innerHTML=table;
}

// Settting the rank of users and Printing the table for first time
function setRank(){
    userList = sort(userList);
    for(var i=0;i<userList.length;i++){
        userList[i].Rank = i+1;
    }
    printTable(userList);
}


// Search Function
function search(userList,value){
    var new_userList = [];
    var len = value.length;
    value = value.toLowerCase();
    for(var i=0;i<userList.length;i++){
        var subs = userList[i].user.substring(0,len).toLowerCase();
        if(subs == value){
            new_userList.push(userList[i]);
        }
    }
    console.log(new_userList[0]);
    return new_userList;
}


// set Leaderboard 
function setLeaderboard(userList){
    var tops = [];
    userList = sort(userList);
    for(var i=0;i<3;i++){
        tops.push(userList[i].user);
    }
    new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [tops[1],tops[0],tops[2]],
          datasets: [{
            // label: '# of Votes',
            data: [2, 3, 1],
            backgroundColor:[
                '#C0C0C0',
                '#FFD700',
                '#CD7F32',
            ],
            borderColor:[
                '#A9A9A9',
                '#DAA520',
                'Brown',
            ],
            borderWidth: 1,
          }],
          
        },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false
                  }
                },
                y: {
                    display:false,
                    grid: {
                        display: false
                  }
                },
                xAxes: [{
                    barThickness: 6,  // number (pixels) or 'flex'
                    maxBarThickness: 8 // number (pixels)
                }]
            },
            plugins: {
                legend: {
                  display: false
                },
                title: {
                    display: true,
                    text: 'Leaderboard',
                    color: 'Black',
                    position: 'top',
                    align: 'center',
                    font: {
                       weight: 'bold',
                       size: 24,
                    },
                    padding: 8,
                    fontSize:20,
                   
                 }
              },          
         }
      });
}



// Set Counters and percentage
function setUsersCount(userList){
    var showup=document.getElementById('showUsers');
    var total=userList.length+2;  // Consider 2 extra users that are inactive by default
    var active=total-2; // Consider 2 extra users that are inactive by default
    if(total<10) total='0'+total;
    if(active<10) active='0'+active;
    var inactive=total-active;
    if(inactive<10) inactive='0'+inactive;
    var totalUser='<span>Total Users :'+total+'</span><br><span>Active Users :'+active+'</span><br><span>Inactive Users :'+inactive+'</span>';
    showup.innerHTML=totalUser;


    var percen = Math.floor((active/total)*100);
    var degrees = Math.floor((active/total)*180);
    var perObj = document.getElementById('percentage');
    perObj.innerHTML=percen+'%';

    $('.circle-wrap .circle .mask.full').css('transform','rotate('+degrees+'deg)');
    $('.circle-wrap .circle .fill').css('transform','rotate('+degrees+'deg)');
    document.documentElement.style.setProperty('--degree-end', degrees+'deg');
}



// to filter the search results
$('#user').on("keyup",function(){
    var value = $(this).val();
    var filter_data = search(userList,value);
    printTable(filter_data);
})

// Initialize the Dashboard
function initializeDashboard(userList){
    setUsersCount(userList);
    setLeaderboard(userList);
    setRank(userList);
}

// Calling main fuction
initializeDashboard(userList);




