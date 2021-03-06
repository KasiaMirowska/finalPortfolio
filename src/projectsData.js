 const projects = [
    {
        id: 1,
        name: 'From Art to Coding...',
        className: 'blog',
        description: `"My path towards web development ...and other random thoughts". A mobile responsive personal blog built in Gatsby, React and GraphQl, deployed through Netlify`,
        images: ['https://images-for-portfolio.s3.us-east-2.amazonaws.com/blog/home.png','https://images-for-portfolio.s3.us-east-2.amazonaws.com/blog/blog.png','https://images-for-portfolio.s3.us-east-2.amazonaws.com/blog/entry.png'],
        projectLink: 'https://from-art-to-code.netlify.app/',
        githubLinkClient: 'https://github.com/KasiaMirowska/ArtBlog',
        githubLinkServer: '',
        techList: ['• JavaScript ', '• Gatsby ','• GraphQl ', '• React', '• HTML5 ', '• CSS3 ', '• Styled Components ', '• Netlify '],
     },
    {
        id: 2,
        name: 'Othello Game',
        className: 'othello-game',
        description: `A mobile responsive strategy board game for two players, played on an 8×8 uncheckered board. Added additional feature of picking color choices for players.`,
        images: ['https://images-for-portfolio.s3.us-east-2.amazonaws.com/othello-game/b%26wStart.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/othello-game/colorsStart.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/othello-game/game.png'],
        projectLink: 'https://othello-game.kasia2.vercel.app/game',
        githubLinkClient: 'https://github.com/KasiaMirowska/othello-KasiaMirowska',
        githubLinkServer: '',
        techList: ['• JavaScript ', '• React ', '• React-Redux ', '• HTML5 ', '• CSS3 ', '• Sass ', '• Flexbox ', '• Zeit '],
     },
    {
        id: 3,
        name: 'Crown Clothing',
        className: 'crown-clothing',
        description: `An mobile responsive e-commerce web application featuring full online clothing store with google sign-in and payment processing. Checkout github for various branches featuring Redux Thunk versus Redux Saga and Apollo GraphQl.`,
        images: ['https://images-for-portfolio.s3.us-east-2.amazonaws.com/e-commerce/home.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/e-commerce/signin.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/e-commerce/collection.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/e-commerce/collection-cart.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/e-commerce/checkout.png'],
        projectLink: 'https://kasia-crown-commerce.herokuapp.com/',
        githubLinkClient: 'https://github.com/KasiaMirowska/eCommerce',
        githubLinkServer: '',
        techList: ['• JavaScript ', '• React ', '• Redux ', '• React-Hooks', '• GraphQL', '• Firebase', '• Stripe ', '• NoSQL ', '• HTML5 ', '• CSS3 ', '• Sass ', '• Styled-Components', '• Flexbox ', '• Heroku '],
     },
     {
        id: 4,
        name: 'GREENthumbsUP',
        className: 'green-thumbs',
        description: ` A Full-Stack mobile first responsive web application designed to influance change in restaurant business. It allows a user to research local restaurants and create a enviroment oriented review. Once reviewed a restaurant becomes part of a new database of Earth friendly places that adhere to enviromnet conscientious practices.`,
        images: ['https://green-images.s3.amazonaws.com/portfolio+screens/home.png', 'https://green-images.s3.amazonaws.com/portfolio+screens/login.png', 'https://green-images.s3.amazonaws.com/portfolio+screens/home2.png', 'https://green-images.s3.amazonaws.com/portfolio+screens/sort.png', 'https://green-images.s3.amazonaws.com/portfolio+screens/afterSort.png', 'https://green-images.s3.amazonaws.com/portfolio+screens/yelpSearch.png', 'https://green-images.s3.amazonaws.com/portfolio+screens/yelpPlaces.png', 'https://green-images.s3.amazonaws.com/portfolio+screens/review.png', 'https://green-images.s3.amazonaws.com/portfolio+screens/review2.png'],
        projectLink: 'https://green-thumbs-up.now.sh/',
        githubLinkClient: 'https://github.com/KasiaMirowska/greenThumbs-app',
        githubLinkServer: 'https://github.com/KasiaMirowska/greenThumbs-api',
        techList: ['• JavaScript ', '• Node ', '• React ', '• React-Context ', '• Express ', '• Postgres ', '• SQL ', '• HTML5 ', '• CSS3 ', '• Jest ', '• Mocha ', '• Chai ', '• Enzyme ', '• Zeit ', '• Heroku '],
     },
    {
        id: 5,
        name: 'Yogi Track',
        className: 'yogi-track',
        description: ` A Full-Stack mobile first responsive web application for yoga teachers and enthusiasts helping a user to explore and learn avariety of poses, providing an english and sanskrit name for each pose with alphabetic sort based on either. The user can then create an account where he/she can save poses into yoga-flows as inspirations for a class or record of personal practice with notes and personal rating system.`,
        images: ['https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/home.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/login.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/flow-pick.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/flow-pose.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/flow-pose2.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/poses.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/pose-card.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/yoga+cap/pose-card2.png'],
        projectLink: 'https://yoga-capstone.now.sh/landing',
        githubLinkClient: 'https://github.com/KasiaMirowska/yoga-app',
        githubLinkServer: 'https://github.com/KasiaMirowska/yoga-api',
        techList: ['• JavaScript ', '• Node ', '• React ', '• React-Context ', '• Express ', '• Postgres ', '• SQL ', '• HTML5 ', '• CSS3 ', '• Jest ', '• Mocha ', '• Chai ', '• Enzyme ', '• Zeit ', '• Heroku ', '• AWS'],
    },
    {
        id: 6,
        name: 'Noteful',
        className:'noteful',
        description: `A Full-Stack mobile first responsive web application designed to keep track of to-do lists and memos `,
        images: ['https://images-for-portfolio.s3.us-east-2.amazonaws.com/noteful+img/home+png.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/noteful+img/fold-content.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/noteful+img/note.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/noteful+img/newNote.png', 'https://images-for-portfolio.s3.us-east-2.amazonaws.com/noteful+img/newFolder.png'],
        projectLink: 'https://noteful-app-client-bms8il0pd.now.sh/',
        githubLinkClient: 'https://github.com/KasiaMirowska/Noteful-Context-refactored',
        githubLinkServer: 'https://github.com/KasiaMirowska/notefulSERVER',
        techList:['• JavaScript ', '• Node ', '• React ', '• React-Context ', '• Express ', '• Postgres ', '• SQL ', '• HTML5 ', '• CSS3 ', '• Jest ', '• Mocha ', '• Chai ', '• Enzyme ', '• Zeit ', '• Heroku '], 
    },
    {
        id: 7,
        name: 'Bookmarks-app',
        className:'bookmarks',
        description: `A simple application created for saving internet bookmarks`,
        images: ['https://images-for-portfolio.s3.us-east-2.amazonaws.com/other+screens/home.png','https://images-for-portfolio.s3.us-east-2.amazonaws.com/other+screens/sort.png','https://images-for-portfolio.s3.us-east-2.amazonaws.com/other+screens/new.png'],
        projectLink: 'https://kasiamirowska.github.io/bookmarkProject-KasiaMirowska/',
        githubLinkClient: 'https://github.com/KasiaMirowska/bookmarkProject-KasiaMirowska',
        githubLinkServer: '',
        techList: ['• JavaScript ', '• jQuery ', '• HTML5 ', '• CSS3 ', '• GithubPages' ],  
    },
    {
        id: 8,
        name: 'Waitstaff Calculator',
        className:'calculator',
        description: `An early project calculating tips and taxes for waitstaff`,
        images: ['https://images-for-portfolio.s3.us-east-2.amazonaws.com/other+screens/cal1.png','https://images-for-portfolio.s3.us-east-2.amazonaws.com/other+screens/cal2.png'],
        projectLink: ' https://kasiamirowska.github.io/waitstaff-calculator/',
        githubLinkClient: 'https://github.com/KasiaMirowska/waitstaff-calculator',
        githubLinkServer: '',
        techList: ['• JavaScript ', '• jQuery ', '• HTML5 ', '• CSS3 ', '• GithubPages '], 
    }
]


export default projects;
