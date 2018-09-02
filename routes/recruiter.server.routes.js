module.exports = function(app){

 var recruiters = require('./../controllers/recruiters.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');


app.route('/api/clients')
    .get(recruiters.Clientlist)
	.post(users.requiresLogin, recruiters.createClient);
app.route('/api/clients/edit/:clientId')
	.get(recruiters.read)
	.put(users.requiresLogin, recruiters.updateClient);	
app.route('/api/jobs')
    .get(recruiters.Joblist)
	.post(users.requiresLogin, recruiters.createJob);	
app.route('/api/jobs/edit/:jobId')
	.get(recruiters.read)
	.put(users.requiresLogin, recruiters.updateJob);	
app.route('/api/track')
	.post(users.requiresLogin, recruiters.track);

app.route('/api/recruiters/:recruiterId')
	.get(recruiters.read)
    .delete(users.requiresLogin, recruiters.delete);

app.route('/api/recruiters/edit/:recruiterId')
	.get(recruiters.read)
// 	.put(users.requiresLogin, recruiters.update);




	app.route('/Dashboard').get(users.requiresLogin,recruiters.Dashboard);   
	app.route('/CareerBlog').get(users.requiresLogin,recruiters.CareerBlog);
	app.route('/CreateArticle').get(users.requiresLogin,recruiters.CreateArticle);
	app.route('/ViewArticle/:articleId').get(users.requiresLogin,recruiters.ViewArticle);
	app.route('/EditArticle/:articleId').get(users.requiresLogin,recruiters.EditArticle);
	app.route('/DeleteArticle/:articleId').get(users.requiresLogin,recruiters.DeleteArticle);
	app.route('/TrackApplicants').get(users.requiresLogin,recruiters.TrackApplicants);
	app.route('/Applicants').get(users.requiresLogin,recruiters.Applicants);
	app.route('/CreateApplicant').get(users.requiresLogin,recruiters.CreateApplicant);
	app.route('/ViewApplicant/:resumeId').get(users.requiresLogin,recruiters.ViewApplicant);
	app.route('/EditApplicant/:resumeId').get(users.requiresLogin,recruiters.EditApplicant);
	app.route('/Clients').get(users.requiresLogin,recruiters.Clients);
	app.route('/CreateClient').get(users.requiresLogin,recruiters.CreateClients);
	app.route('/ViewClient/:clientId').get(users.requiresLogin,recruiters.ViewClient);
	app.route('/EditClient/:clientId').get(users.requiresLogin,recruiters.EditClient);
	app.route('/JobOpenings').get(users.requiresLogin,recruiters.JobOpenings);
	app.route('/CreateJobOpenings').get(users.requiresLogin,recruiters.CreateJobOpenings);
	app.route('/ViewJobOpening/:jobId').get(users.requiresLogin,recruiters.ViewJobOpening);
	app.route('/EditJobOpening/:jobId').get(users.requiresLogin,recruiters.EditJobOpening);
	app.route('/CareerTips').get(users.requiresLogin,recruiters.CareerTips);
	app.route('/Emails').get(users.requiresLogin,recruiters.Emails);
	app.route('/CreateEmail').get(users.requiresLogin,recruiters.CreateEmail);
	app.route('/Tests').get(users.requiresLogin,recruiters.Tests);
	app.route('/UserAdministration').get(users.requiresLogin,recruiters.UserAdministration);
	app.route('/aboutUs').get(users.requiresLogin,recruiters.UserAdministration);
	app.route('/AddNewRecruiter').get(users.requiresLogin,recruiters.AddNewRecruiter);

	
	
	app.param('recruiterId', recruiters.recruiterByID);
	app.param('resumeId', recruiters.resumeByID);
	app.param('clientId', recruiters.clientByID);
	app.param('jobId', recruiters.jobByID);
	app.param('articleId', recruiters.articleByID);

};
