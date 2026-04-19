let arr=[{name:"Aryan",
          marks:{
            maths:90,
            science:80
          }
        }
      ,{
        name:"Rohan",
        marks:{
          maths:70,
          science:60
        }
      },
      {
        name:"Sohan",
        marks:{
          maths:80,
          science:70
        }
      }
    ];

    
    for(ar of arr){
      console.log(ar.name);
      for(mark in ar.marks){
        console.log(mark + ": " + ar.marks[mark]);
        console.log(ar.marks[mark]);
      }
    }
