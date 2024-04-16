// first task 
const userData={
    userId:"user23",
    profile:{
        name:"Jane Doe",
        age:30,
        social:{
            twitter:"@janedoe",
            Facebook:"janedoe"
        },
        interests:["music","reading","tech"]
    }
};

// console.log(userData.profile.name)
// console.log(userData.profile.social.Facebook)
// console.log(userData.profile.interests[1])

let Name, Social , Interest 
for ( const key in userData){
    for (const subkey in userData[key]){
        if (subkey=="name"){
            Name=userData[key][subkey]
        }
        
    }
} 
// second task

// userData.profile.social.twitter="@doejane";
// userData.profile.interests.push("travelling");
// console.log(userData)


// Third task
