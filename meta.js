module.exports = {
    helpers: {
        raw: function(options) {
            return options.fn(this)
        }
    },
    skipInterpolation: "**/*.vue",
    prompts: {
        name: {
            'type': 'string',
            'required': true,
            'message': 'Project name',
            'default': 'nuxt-template-for-shared-hosting'
        },
        description: {
            'type': 'string',
            'required': false,
            'message': 'Project description',
            'default': 'A Nuxt PWA starter template for Deploying in Apache Shared Hosting'
        },
        author: {
            'type': 'string',
            'message': 'Author',
            'default': '(RightBrainTechBD <www.jbc.bd@gmail.com>)'
        },
    },
    completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
