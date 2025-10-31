console.log("Expence tracker project");

function createExpenseTracker(username,initialBudget) {
    
    let user = {
        user:username,
        budget:initialBudget
    };

    let expenceData =[];
    let expenceId=1;

    const getTotalExpence = () => expenceData.reduce((total,exp)=> total + exp.amount,0);
    
    return {
        addingExpence : (amount,category,description) => {
            if(amount <=0) {
                console.log("Amount should be greater than 0"); 
                return;               
            }
            if(getTotalExpence() + amount > user.budget) {
                console.log("Budget exceeded! Cannort add expence");
                return;
            }
            const expence ={id:expenceId++,amount,category,description};
            expenceData.push(expence);
            console.log("Added expence:",expence);            
        },
        removeExpence:(id) =>{
            const Index = expenceData.findIndex((exp)=>exp.id === id);
            const removedExpence=expenceData.splice(Index,1);
            console.log("Removed Expence", removedExpence[0]);
        },
        //- Updating Expense
        updateExpence:(id,newData) =>{
            const expence = expenceData.find((exp)=>exp.id === id);
            if(!expence) {
                console.log("Expance is not found");
                return;                
            }
            Object.assign(expence,newData);
            console.log("Updated expence:",expence);
        },
        //- Getting total expenses done by the user
        getTotalExpenceByUser:() =>{
            console.log(`Total expence By ${username}`,getTotalExpence());
        },
        //- Getting expense by category
        getExpenceByCategory: (category) =>{
            const expence =expenceData.filter(exp => exp.category === category);
            console.log(`Getting expense by ${category} category`,expence);
        },
        //- Get the Highest Expense 
        getHighestExpencee : ()=>{
            const highExpence = expenceData.reduce((acc,exp)=>{
                return exp.amount > acc.amount ? exp : acc
            });
            console.log("Highest Expense ", highExpence.amount);
        },
        // - Get the Lowest Expense
        getLowestExpencee : ()=>{
            const lowExpence = expenceData.reduce((acc,exp)=>{
                return exp.amount < acc.amount ? exp : acc
            });
            console.log("Low Expense ", lowExpence.amount);
        },
        //- Get the user info
        getUserInfo : () =>{
            console.log(user);
        },
        //- Show all the expenses
        showAllExpences:()=>{
            console.log(expenceData);            
        },
        //- Update User data
        updateUserData : (userData) =>{
            Object.assign(user,userData);
            console.log(user);
            
        }
    }
}

const expencetracker = createExpenseTracker("Siva",6000);
console.log(expencetracker.addingExpence(300,"shopping","Buying shoes"));
console.log(expencetracker.addingExpence(200,"shopping","Buying clothes"));
console.log(expencetracker.addingExpence(1000,"food","Dinner in hotel"));
// expencetracker.removeExpence(2);
expencetracker.updateExpence(2,{amount:400,category:"food",description:"Updated bill with icecream"});
expencetracker.getTotalExpenceByUser();
expencetracker.getExpenceByCategory("food");
expencetracker.getHighestExpencee();
expencetracker.getLowestExpencee();
expencetracker.getUserInfo();
expencetracker.showAllExpences();
expencetracker.updateUserData({user:"Siva Prasad",budget:7000})
