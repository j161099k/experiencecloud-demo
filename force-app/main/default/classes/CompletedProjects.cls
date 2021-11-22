public with sharing class CompletedProjects {
    
    @AuraEnabled(Cacheable=true)
    public static List<Completed_Project__c> getProjects()
    {
        List<Completed_Project__c> completedProjects = [SELECT Id, Name, Url__c, IsSupported__c, InDevelopment__c FROM Completed_Project__c];
        
        return completedProjects;
    }

    @AuraEnabled
    public static string saveProject()
    {
        
    }
}
