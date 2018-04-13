module.exports = function(app){

 var recruiters = require('./../controllers/recruiters.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/recruiters')
    .get(recruiters.list)
	.post(users.requiresLogin, recruiters.create);

app.route('/api/clients')
    .get(recruiters.Clientlist)
	.post(users.requiresLogin, recruiters.createClient);

app.route('/api/track')
	.post(users.requiresLogin, recruiters.track);

  app.route('/api/recruiters/:recruiterId')
	.get(recruiters.read)
    .delete(users.requiresLogin, recruiters.delete);

	app.route('/api/recruiters/edit/:recruiterId')
	.get(recruiters.read)
	.put(users.requiresLogin, recruiters.update);
	

// app.route('/Dashboard').get(users.requiresLogin, recruiters.Dashboard);   
app.route('/Dashboard').get(recruiters.Dashboard);   
app.route('/TrackApplicants').get(recruiters.TrackApplicants);
app.route('/Applicants').get(recruiters.Applicants);
app.route('/CreateApplicant').get(recruiters.CreateApplicant);
app.route('/ViewApplicant/:resumeId').get(recruiters.ViewApplicant);
app.route('/EditApplicant/:resumeId').get(recruiters.EditApplicant);
app.route('/Clients').get(recruiters.Clients);
app.route('/CreateClient').get(recruiters.CreateClients);
app.route('/ViewClient/:clientId').get(recruiters.ViewClient);
app.route('/EditClient/:clientId').get(recruiters.EditClient);
app.route('/JobOpenings').get(recruiters.CareerTips);
app.route('/CreateJobOpening').get(recruiters.CareerTips);
app.route('/ViewJobOpening').get(recruiters.CareerTips);
app.route('/EditJobOpening').get(recruiters.CareerTips);
app.route('/CareerTips').get(recruiters.CareerTips);
app.route('/Emails').get(recruiters.Emails);
app.route('/Tests').get(recruiters.Tests);
app.route('/UserAdministration').get(recruiters.UserAdministration);
app.route('/AddNewUser').get(recruiters.AddNewUser);


app.param('recruiterId', recruiters.recruiterByID);
app.param('resumeId', recruiters.resumeByID);
app.param('clientId', recruiters.clientByID);

};
