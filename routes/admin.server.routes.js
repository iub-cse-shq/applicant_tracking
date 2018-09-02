module.exports = function(app){

 var admins = require('./../controllers/admins.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

//client CREATE,UPDATE,|| delete
app.route('/api/clients')
    .get(admins.Clientlist)
	.post(users.requiresLogin, admins.createClient);//23
	
app.route('/api/AddNewRecruiter')
    .get(admins.Recruiterlist);
	
app.route('/api/clients/edit/:clientId')
	.get(admins.read)
	.put(users.requiresLogin, admins.updateClient);	//4
	
app.route('/api/clients/:clientId')
	.get(admins.read)
    .delete(users.requiresLogin, admins.delete);
    
//app.route('/Client').get(admins.Clientnew);//1


	//client [clientnew,clintlist,createClient,updateClient]
app.route('/api/jobs')
    .get(admins.Joblist)
	.post(users.requiresLogin, admins.createJob);	
	
app.route('/api/jobs/edit/:jobId')
	.get(admins.read)
	.put(users.requiresLogin, admins.updateJob);
//track applicant
app.route('/api/track')
	.post(users.requiresLogin, admins.track);
	
	
	

// app.route('/api/recruiters/:recruiterId')
 //	.get(admins.read)
   //  .delete(users.requiresLogin, admins.delete);

 //app.route('/api/recruiters/edit/:recruiterId')
 //	.get(admins.read)
 //	.put(users.requiresLogin, admins.update);
 	
 	
 	
app.route('/UserAdministration').get(users.requiresLogin,admins.UserAdministration);  
app.route('/TrackApplicants').get(users.requiresLogin,admins.TrackApplicants);
app.route('/Applicants').get(users.requiresLogin,admins.Applicants);
app.route('/CreateApplicant').get(users.requiresLogin,admins.CreateApplicant);
app.route('/ViewApplicant/:resumeId').get(users.requiresLogin,admins.ViewApplicant);
app.route('/EditApplicant/:resumeId').get(users.requiresLogin,admins.EditApplicant);

app.route('/Clients').get(users.requiresLogin,admins.Clients);
app.route('/CreateClient').get(users.requiresLogin,admins.CreateClients);
app.route('/ViewClient/:clientId').get(users.requiresLogin,admins.ViewClient);
app.route('/EditClient/:clientId').get(users.requiresLogin,admins.EditClient);
app.route('/JobOpenings').get(users.requiresLogin,admins.JobOpenings);
app.route('/CreateJobOpenings').get(users.requiresLogin,admins.CreateJobOpenings);
app.route('/ViewJobOpening/:jobId').get(users.requiresLogin,admins.ViewJobOpening);
app.route('/EditJobOpening/:jobId').get(users.requiresLogin,admins.EditJobOpening);
app.route('/CareerTips').get(users.requiresLogin,admins.CareerTips);
app.route('/Emails').get(users.requiresLogin,admins.Emails);
app.route('/Tests').get(users.requiresLogin,admins.Tests);
app.route('/UserAdministration').get(users.requiresLogin,admins.UserAdministration);
app.route('/AddNewRecruiter').get(users.requiresLogin,admins.AddNewRecruiter);


app.param('recruiterId', admins.recruiterByID);
app.param('resumeId', admins.resumeByID);
app.param('clientId', admins.clientByID);
app.param('jobId', admins.jobByID);




};
