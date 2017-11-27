# Mongo Scraper

Week Ten Homework Part 2: [NYT React Search](http://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/09-11-2017-UCB-Class-Repository-FSF-FT/blob/master/10-week/homework/part-2/homework_instructions.md).

## Installation

1. Clone repo and install NPM packages:

    ```
    git clone https://github.com/dbmarshall/nyt-react.git
    cd nyt-react/
    yarn install 
    cd client/
    yarn install 
    cd ../
    ```

2. Start server (local environment only):

    ```
    yarn start
    ```

3. Load local or Heroku deployment (see below), then enter search terms, save articles, and create annotations for saved articles.

## Available Node Commands and URLs

**Local:** 

* Should live-reload upon `yarn start`: [http://localhost:3000/](http://localhost:3000/) 

**Heroku Deployment:** 

* Load [https://nytreact-davidm.herokuapp.com/](https://nytreact-davidm.herokuapp.com/) 

## Misc Notes

* Overlooked note about requirement of using `react-router` until final due date, so that is not implemented and app appears as in [wireframe](http://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/09-11-2017-UCB-Class-Repository-FSF-FT/raw/master/10-week/homework/part-2/HW_Assignment.png), without navigation.
* Results and Saved components only render when data becomes available for either. 
* Can't save duplicate articles. 
* Can't save empty comment.
* Github repo master branch pushes autodeploy to Heroku (sweet).

## Author

* **David Morse** ([dbmarshall.github.io](https://dbmarshall.github.io))

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

