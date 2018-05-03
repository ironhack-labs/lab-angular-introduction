# ![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# DE | Angular Introduction

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_f40ce9b78e2468e7a5aae3b9f6dcc3d5.png)

## Learning Goals

After this lesson, you will be able to:

- Create a static Angular application with Angular CLI.
- Build an Angular application with one component.
- Build an Angular application with two nested components.
- Build an Angular application using nested iterators.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/).
- Clone your fork into your `~/code/labs` folder.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a pull request from your master branch to the original repository's master branch.

In the pull request name, add your campus, name, and last name separated by a dash "-".

## Deliverables

All the files in the three folders provided in the starter code, with the necessary code to satisfy the requirements described below.

## Introduction

In this lesson we are going to work with Angular for the first time. The goal here is to work on three small projects where you can practice the concepts we've learned thus far.

### Starter Code

This lesson is composed of three iterations. In each iteration, we will complete a small, independent project. In the first iteration, we provide you the basic skeleton of the app, while in the other two iterations, you will have to create it.

## Iteration #1: Photo Album

In the first iteration we are going to build a photo album. Imagine you have an album at home. On it, you can find a photo and its description. This is what we are going to build.

We will build this album in the `AppComponent` component. The album will have three photos and their descriptions, and **it's not necessary to have an array to store these values**.

Easy, right? Add some styles to the page to give your photo album a little flair!

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_846567994930e52ae46f8468b3800719.png)

## Iteration #2: Article with comments

In the second project of this lesson we are going to create a blog article with comments. We are going to create two different components:

- The `MainComponent` component will contain the article, composed of a `title`, an `image`, and a `description`.
- The `CommentsComponent` component, that will contain several comments (feel free to add as many comments as you want).

At the bottom of the comments, we will add a comment form to add some reality to our article. We can't have comments without a form! (Don't worry, it doesn't need to work.  We will get to that later).

The first thing you will have to do is to generate the project with `Angular CLI`.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5849a042e121c77042ba32ab45471843.png)

## Iteration #3: NBA Champions

Last, but not least, we are going to create a Dashboard with NBA Champions of recent years. In this case, we will need to create one component, that will contain an array of Championships, with the following fields:

- `year` of the championship.
- Name of the `champion` team.
- A `champion-url` to show the team badge.
- A list with the best players of the champion team, called `best-players`

You can find the full list of [NBA Champions](https://en.wikipedia.org/wiki/List_of_NBA_champions) on wikipedia. In our application we have to show at least three of them. The result could be something like this:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4a103a5eba7001d7be790eec5353a44e.png)

<!-- :::info -->
**Note** that we are iterating over two different arrays to show all the information: `Championships` and `best-players` of every team.
<!-- ::: -->

/Happy coding!
