# yearn-comms

This is a collection of communication, announcements, tweets, newsletters, and other articles about yearn.

## How to run
- Install `yarn`.
- Run `yarn` to install dependencies.
- Run `yarn run dev` to run the blog.
- Navigate to `http://localhost:3000` to access the blog.

## How to contribute
- All the articles, announcements, newletters and tweets are stored in the `public/_posts` folder.  
- All the translations should be `.md` files, with a name matching the locale you want to write the article in. The supported name files are :   
  > `en.md`, `fr.md`, `es.md`, `de.md`, `pt.md`, `el.md`, `tr.md`, `vi.md`, `zh.md`, `hi.md`, `ja.md`, `ru.md`  

- Once a new article is published, a new subfolder will be created with the slug of the article. This will be the URI to access this article: 
  > Article name: "What is a DAO" -> Slug should be `what-is-a-dao` -> URI will be `/article/what-is-a-dao`

- The default article is the one named `en.md`
- Contributors should fork the repository and click the `Add new File` button on Github, copy the content of the `en.md` file and name the file `<locale>.md`
- Contributors could fill the `translator:` field with their name/tag in the header of the article to get credited on the website
- Contributors could translate the `title:` field in the header of the article

## Relevant Structure
```
yearn-comms/
├── README.md
├── components/
│   ├── icons/                              # Set of SVG icons translated to React components.
│   └── xxxx.js                             # List of components used accross the blog.
├── contexts/
│   ├── useLocalization.js                  # Context to handle the localization system.
│   └── useUI.js                            # Context to handle the light/dark theme.
├── hooks/
│   └── useLocalStorage.js                  # Hook to store some state in the local storage.
├── localization/
│   └── [locale].json                       # Set of localized strings.
├── pages/
│   └── *.js                                # All the pages and system of the blog. Used by NextJS.
├── public/
│   ├── _posts/
│   │   ├── _announcements/*                # Set of folders and subfolders containing the announcements.
│   │   ├── _articles/*                     # Set of folders and subfolders containing the articles.
│   │   ├── _financials/*                   # Set of folders and subfolders containing the financials.
│   │   ├── _newsletters/*                  # Set of folders and subfolders containing the newsletters.
│   │   ├── _podcasts/*                     # Set of folders and subfolders containing the podcasts.
│   │   └── _tweets/*                       # Set of folders and subfolders containing the tweets.
│   ├── favicons/                           # Favicons used by the blog
│   ├── default.jpeg                        # default cover image used by the blog
│   └── og.png                              # Open Graph image used by the blog
├── utils/
│   └── *.js                                # Set of useful functions used by the blog system.
└── style/Default.css                       # Default CSS used by the blog.

```
