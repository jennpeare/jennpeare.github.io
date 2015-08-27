var app = angular.module('app', []);

app.controller('tableCtrl', function($scope) {

  $scope.columns = ['First Name', 'Last Name', 'School', 'Major', 'GPA', 'Role', 'Email', 'Phone'];

  $scope.people = [
    {
      first: 'Jenny',
      last: 'Shi',
      school: 'Rutgers University',
      major: 'Computer Science',
      gpa: '3.94',
      role: 'Developer',
      email: 'jennpeare@gmail.com',
      phone: '(908) 745-8034'
    },
    {
      first: 'Billy',
      last: 'Lynch',
      school: 'Rutgers University',
      major: 'Computer Science, Mathematics',
      gpa: '3.80',
      role: 'Developer',
      email: 'wlynch92@gmail.com',
      phone: '(123) 456-7890'
    }
  ];
});
