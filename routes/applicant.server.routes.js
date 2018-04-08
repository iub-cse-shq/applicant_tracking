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
	
	
	
	
// app.route('/applicants/all').get(applicants.listView);  // show all applicant 
// app.route('/applicants/new').get(applicants.createView);  // create and view only  
// app.route('/applicant/:applicantId').get(applicants.singleView);  // single applicant
// app.route('/applicant/:applicantId/content').get(applicants.showContent);  // show content of a single applicant

// app.route('/ApplicantDashboard').get(applicants.ApplicantDashboard);   
app.route('/ApplicantDashboard').get(users.requiresLogin, applicants.ApplicantDashboard);   
app.route('/MyProfile').get(users.requiresLogin, applicants.MyProfile);
app.route('/ApplicantEmail').get(applicants.ApplicantEmail);
app.route('/ApplicantTest').get(applicants.ApplicantTest);
app.route('/ApplicantCareerTips').get(applicants.ApplicantCareerTips);
// app.route('/ViewMyResume/:applicantId').get(applicants.ViewMyResume);
app.route('/ViewMyResume').get(applicants.ViewMyResume);
app.route('/CreateMyResume').get(applicants.CreateMyResume);
app.route('/EditMyResume').get(applicants.EditMyResume);

app.param('applicantId', applicants.applicantByID);
// app.param('resumeId', applicants.resumeByID);

}
