import _ from 'lodash';

import myProjects from './script.js'

const javaScriptRunFunction = (function() {
  

  myProjects.renderProjectsHeader();

  myProjects.renderProjects();


  myProjects.projectCardEventListeners();
  

})();

javaScriptRunFunction