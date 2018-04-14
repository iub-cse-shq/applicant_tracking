Applicant Tracking System 
=========

##  Recruit the best talent. Build great teams.




***Description:***
Applicant Tracking System helps ease the workload of Recruiters and Hiring managers. It is a simple way to reach more qualified candidates and track, share, and evaluate applicant information. It is not only a filtering database, but a great organizational tool for hiring. Hiring managers can send emails directly to applicants to either inform them that they didn’t make the cut, or ask for an interview.  


Features
--------


•	Posting New JobOpenings 
•	Storing Resumes 
•	Storing Client Database 
•	Managing Applicants
•	Correspondence with the Applicants
•	Track Applicants
•	Virtual Assessment Tests
•	E-Learining for Applicants





****************************************************************

**How to set up the code**

1. Install [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center?jmp=nav) on your computer

2. Download this code, and from command prompt run:

   `npm install`


   `bower install`


3. To run the code, run:

    `node server.js`

    
4. In the browser open http://localhost:3000/, and you should see the index page

**Exposed APIs**:

GET **/api/articles** (returns list of articles)

POST **/api/articles** (create new article)

GET **/api/articles/:articleId** (returns an article with matching id)

DELETE **/api/articles/:articleId** (deletes the matching article)

GET **/api/articles/edit/:articleId** (returns an article with matching id)

PUT **/api/articles/edit/:articleId** (updates the matching article)
