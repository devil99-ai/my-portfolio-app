import { Injectable } from '@angular/core';
import { Project } from '../_modules/Project';
import { Tag } from '../_modules/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Selenium Project", pictures: ["/selenium.ico","/selenium2.ico","/JAVA.ico"], projectlink: "//www.github.com", summary: "Web Page testing using Selenium", description: "Selenium is a library coming with multiple language here we are using java and selenium to test webpages with webdrivers like chromedriver which use chrome browser for testing, firefox driver for testing web pages in firefox browser etc.",testCases:["Login to webpages","selecting multiple tabs","taking screenshots of webpages","alert handling","register in webpages","extract data and validation"], tags: [Tag.JAVA, Tag.SELENIUM]},
    {id: 1, name: "Cypress Project", pictures: ["/cypress.ico","/javascript.ico"], projectlink: "//www.github.com", summary: "Web Page testing with Cypress framework", description: "Cypress is a testing framework which use JavaScript to write test cases it is an advance framework easy to write and easy to implement with better interface. Examples like testing all the functionalities of webpages",testCases:["webpage tests","End2End testing","taking steps screenshots using cypress"], tags: [Tag.JAVASCRIPT,Tag.CYPRESS]},
    {id: 2, name: "API Testing", pictures: ["/API.ico","/api-testing-methodologies-types.ico","/JAVA.ico"], projectlink: "//www.github.com", summary: "Testing and Automates webpages using APIs ", description: "API testing is a type of software testing that focuses on verifying the functionality, reliability, performance, and security of Application Programming Interfaces (APIs). Unlike traditional GUI testing, API testing involves sending requests to the API and validating the responses, without interacting with the user interface",testCases:["Login using apis","fetch data from webpages using apis","delete data using apis","add data using apis","ssl handeling"], tags: [Tag.JAVA,Tag.API]},
    {id: 3, name: "Selenium Grid Testing", pictures: ["/docker.ico","/grid.ico","/grid2.ico","selenium.ico"], projectlink: "//www.github.com", summary: "Running Test cases using docker and Grid ", description: "Selenium Grid is a component of the Selenium suite that specializes in grid testing1. It allows you to run test cases in different machines across different platforms. It has capabilities to running multiple test cases parallelly and in parllel browsers",testCases:["Basic Grid Test","Grid Test using docker","running multiple test cases","Running cases in multiple browsers","Advance grid testing frameworks"], tags: [Tag.JAVA,Tag.SELENIUM, Tag.DOCKER]},
    {id: 4, name: "TestNg Framework", pictures: ["/TestNg.ico","/selenium.ico","/selenium2.ico","/JAVA.ico"], projectlink: "//www.github.com", summary: "Creating Test framework using testNg ", description: "TestNG is a testing framework for the Java programming language created by Cedric_Beust and inspired by JUnit and NUnit. The design goal of TestNG is to cover a wider range of test categories: unit, functional, end-to-end, integration, etc., with more powerful and easy-to-use functionalities.",testCases:["Writing test cases using TestNg FrameWork","Generating test reports using Testng","Excel Testing","XML Reports","Running Test Cases using testng xml"], tags: [Tag.JAVA,Tag.SELENIUM, Tag.TESTNG]},
    {id: 5, name: "JUnit Framework", pictures: ["/junit.ico","/selenium.ico","/selenium2.ico","/JAVA.ico"], projectlink: "//www.github.com", summary: "Creating Test framework using JUnit ", description: "TestNG is a testing framework for the Java programming language created by Cedric_Beust and inspired by JUnit and NUnit. The design goal of TestNG is to cover a wider range of test categories: unit, functional, end-to-end, integration, etc., with more powerful and easy-to-use functionalities.",testCases:["Writing test cases using TestNg FrameWork","Generating test reports using Testng","Excel Testing","XML Reports","Running Test Cases using testng xml"], tags: [Tag.JAVA,Tag.SELENIUM, Tag.TESTNG]},
    {id: 6, name: "Cucumber + TestNG Framework", pictures: ["/cucumber.ico","/cucumber2.ico","/cucumber-testng-sample.ico"], projectlink: "//www.github.com", summary: "Creating Test framework using Cucumber and TestNG ", description: "Cucumber is a testing framework which allows to write test cases in simple gherkins language to define test steps named as feature file using that test cases are written and executed using testng.",testCases:["Cucumber framework to perform multiple test cases","Generating Cucumber test report","Fetching customized test reports","E2E testing"], tags: [Tag.JAVA,Tag.SELENIUM, Tag.TESTNG, Tag.CUCUMBER]},
    {id: 7, name: "Cucumber + JUnit Framework", pictures: ["/cucumber.ico","/Cucumber-vs-JUnit.ico"], projectlink: "//www.github.com", summary: "Creating Test framework using Cucumber and JUnit ", description: "Runiing Test cases in cucumber framework using JUnit test",testCases:["Cucumber framework to perform multiple test cases","Generating Cucumber test report","Fetching customized test reports","E2E testing"], tags: [Tag.JAVA,Tag.SELENIUM, Tag.JUNIT, Tag.CUCUMBER]},
    {id: 8, name: "JDBC", pictures: ["/JDBC.ico","/JDBC-Architecture.ico","/JAVA.ico"], projectlink: "//www.github.com", summary: "Database Testing and Automation", description: "JDBC stands for Java Database Connectivity. JDBC is a Java API to connect and execute the query with the database.",testCases:["E2E database testing","fetch, update, delete, create database"], tags: [Tag.JAVA, Tag.JDBC, Tag.DATABASE]}

  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);
    if(project === undefined){
      throw new TypeError('There is no project that matches the id: '+id);
    }
    return project;

  }
  GetProjectsByFilter(filterTags:Tag[]){
    let filteredProjects: Project[]=[];

    this.projects.forEach(function(project){
      let foundAll = true;

      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag)==false){
          foundAll=false;
        } 
      });
      if(foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects; 
  }
}
