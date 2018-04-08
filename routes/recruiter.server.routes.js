module.exports = function(app){

 var recruiters = require('./../controllers/recruiters.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/recruiters')
    .get(recruiters.list)
	.post(users.requiresLogin, recruiters.create);

  app.route('/api/recruiters/:recruiterId')
	.get(recruiters.read)
    .delete(users.requiresLogin, recruiters.delete);

	app.route('/api/recruiters/edit/:recruiterId')
	.get(recruiters.read)
	.put(users.requiresLogin, recruiters.update);
	
	
	
	
// app.route('/recruiters/all').get(recruiters.listView);  // show all recruiter 
// app.route('/recruiters/new').get(recruiters.createView);  // create and view only  
// app.route('/recruiter/:recruiterId').get(recruiters.singleView);  // single recruiter
// app.route('/recruiter/:recruiterId/content').get(recruiters.showContent);  // show content of a single recruiter

// app.route('/Dashboard').get(users.requiresLogin, recruiters.Dashboard);   
app.route('/Dashboard').get(recruiters.Dashboard);   
app.route('/TrackApplicants').get(recruiters.TrackApplicants);
app.route('/Applicants').get(recruiters.Applicants);
app.route('/CreateApplicant').get(recruiters.CreateApplicant);
app.route('/ViewApplicant').get(recruiters.ViewApplicant);
app.route('/EditApplicant').get(recruiters.EditApplicant);
app.route('/Clients').get(recruiters.Clients);
app.route('/CreateClients').get(recruiters.CreateClients);
app.route('/ViewClients').get(recruiters.CreateClients);
app.route('/EditClients').get(recruiters.CreateClients);
app.route('/JobOpenings').get(recruiters.JobOpenings);
app.route('/CreateJobOpenings').get(recruiters.CreateJobOpenings);
app.route('/ViewJobOpenings').get(recruiters.CreateJobOpenings);
app.route('/EditJobOpenings').get(recruiters.CreateJobOpenings);
app.route('/CareerTips').get(recruiters.CareerTips);
app.route('/Emails').get(recruiters.Emails);
app.route('/Tests').get(recruiters.Tests);
app.route('/UserAdministration').get(recruiters.UserAdministration);
app.route('/CreateNewUser').get(recruiters.CreateNewUser);


app.param('recruiterId', recruiters.recruiterByID);
// app.param('resumeId', recruiters.resumeByID);

}
