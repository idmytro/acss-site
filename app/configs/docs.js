module.exports = [
    {
        category: '',
        children: [
            {
                label: 'Quick Start',
                routeName: 'docs',
                navParams: {
                    key: 'quick-start'
                }
            },
            {
                label: 'FAQ',
                routeName: 'docs',
                navParams: {
                    key: 'frequently-asked-questions'
                }
            }
        ]
    },
    {
        category: 'GUIDES',
        children: [
            {
                label: 'Atomizer tool',
                routeName: 'docs',
                navParams: {
                    type: 'guides',
                    key: 'atomizer'
                }
            },
            {
                label: 'Class names',
                routeName: 'docs',
                navParams: {
                    type: 'guides',
                    key: 'class-names'
                }
            }
        ]
    },
    {
        category: 'TUTORIALS',
        children: [
            {
                label: 'Grid system',
                routeName: 'docs',
                navParams: {
                    type: 'tutorials',
                    key: 'grid'
                }
            },
            {
                label: 'RWD',
                routeName: 'docs',
                navParams: {
                    type: 'tutorials',
                    key: 'responsive-web-design'
                }
            }
        ]
    }
];
