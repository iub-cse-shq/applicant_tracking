module.exports = function(app){

 var applicants = require('./../controllers/applicants.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/applicants')
    .get(applicants.list)
	.post(users.requiresLogin, applicants.create);

 app.route('/api/applicants/:applicantId')
	.get(applicants.read)
    .delete(users.requiresLogin, applicants.delete);

 app.route('/api/applicants/edit/:applicantId')
	.get(applicants.read)
	.put(users.requiresLogin, applicants.update);
	
app.route('/api/jobs')
    .get(applicants.Joblist)
	.post(users.requiresLogin, applicants.createJob);
	app.route('/api/jobs/edit/:jobId')
	.get(applicants.read)
	.put(users.requiresLogin, applicants.updateJob);


app.route('/ApplicantDashboard').get(users.requiresLogin, applicants.ApplicantDashboard);   
app.route('/MyProfile').get(users.requiresLogin, applicants.MyProfile);
app.route('/ApplicantEmail').get(users.requiresLogin,applicants.ApplicantEmail);
app.route('/ApplicantTest').get(users.requiresLogin,applicants.ApplicantTest);
app.route('/ApplicantCareerTips').get(users.requiresLogin,applicants.ApplicantCareerTips);
app.route('/viewArticle').get(users.requiresLogin,applicants.viewArticle);
app.route('/ViewMyResume').get(users.requiresLogin,applicants.ViewMyResume);
app.route('/CreateMyResume').get(users.requiresLogin,applicants.CreateMyResume);
app.route('/EditMyResume').get(users.requiresLogin,applicants.EditMyResume);
app.route('/JobOpening').get(users.requiresLogin,applicants.JobOpenings);
app.route('/ViewJobOpening/:jobId').get(users.requiresLogin,applicants.ViewJobOpening);
app.route('/EditJobOpening/:jobId').get(users.requiresLogin,applicants.EditJobOpening);

app.param('applicantId', applicants.applicantByID);

}
