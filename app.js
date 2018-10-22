// Budget Control Module
var budgetController = (function(){
    
})();



// UI Control Module
var UIController = (function(){
    
})();



// Main Controller
var controller = (function(budgetCtrl, UICtrl){
    
    var ctrlAddItem = function(){
        
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13){
            ctrlAddItem();
        }
    });
    
    
    
})(budgetController, UIController);