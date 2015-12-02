/**
 * Available tasks list
 */
module.exports = {
  availabletasks: {
    options: {
      filter: 'include',
      tasks: [
        'build:make:install',
        'build:install',
        'build:make',
        'build:upgrade',
        'clone:linky-clicky',
        'clone:repos',
        'pull:deployer',
        'shell'
      ],
      groups: {
        'Build and install tasks': [
          'build:make:install',
          'build:install',
          'build:make',
          'build:upgrade'
        ],
        'Git and repository management': [
          'clone:deployer',
          'clone:linky-clicky',
          'clone:repos',
          'pull:deployer',
        ]
      }
    }
  }
};
