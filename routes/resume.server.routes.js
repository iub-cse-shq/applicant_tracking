module.exports = function(app){

 var resumes = require('./../controllers/resumes.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/resumes')
    .get(resumes.list)
	.post(users.requiresLogin, resumes.create);

  app.route('/api/resumes/:resumeId')
	.get(resumes.read)
    .delete(users.requiresLogin, resumes.delete);

	app.route('/api/resumes/edit/:resumeId')
	.get(resumes.read)
	.put(users.requiresLogin, resumes.update);
	
	
app.route('/resumes/all').get(resumes.listView);  // show all resume 
app.route('/resumes/new').get(resumes.createView);  // create and view only  
app.route('/resume/:resumeId').get(resumes.singleView);  // single resume
app.route('/resume/:resumeId/content').get(resumes.showContent);  // show content of a single resume

// app.route('/ApplicantDashboard').get(resumes.ApplicantDashboard);   
// app.route('/MyProfile').get(resumes.ApplicantDashboard);
// app.route('/ApplicantEmail').get(resumes.ApplicantDashboard);
// app.route('/ApplicantTest').get(resumes.ApplicantDashboard);
// app.route('/ApplicantCareerTips').get(resumes.ApplicantDashboard);


app.param('resumeId', resumes.ResumeByID);


}


