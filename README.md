# Stax Overflow Post Form

!['banner image'](https://images.unsplash.com/photo-1519692933481-e162a57d6721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D)

## Table of Contents

- [Stax Overflow Post Form](#stax-overflow-post-form)
  - [Table of Contents](#table-of-contents)
    - [About this page](#about-this-page)
    - [What are the contents for?](#what-are-the-contents-for)
    - [Key features](#key-features)
    - [Guide on how to install](#guide-on-how-to-install)
    - [Languages used](#languages-used)
    - [Licenses](#licenses)

### About this page

<div align="center">This page is a clone of Stack Overflow, created using pure HTML. It
serves as a platform for developers to share knowledge, ask questions,
and collaborate on various topics related to programming and software
development. Whether you are looking for solutions to coding problems,
seeking career advice, or wanting to share your own tutorials and
tips, this is the place for you.</div>

### What are the contents for?

- **Post Title:** Insert your title of the topic you like
- **I want to send this:** You can schedule the time you want to send.
- **Content:** Fill out the detailed post and what the post is about there.
- **Topic:** Several checkmarks to determine which topic(s) is about.
- **Agree to the terms and conditions:** This is mandatory, you need to abide by the forum rules to create a healthy environment, by not agreeing to this will result in a disabled submit button.
- **"Post your masterpiece" button:** Make sure to double-check your post before sending it, let everyone see your thoughts!

### Key features

- You can create forum posts, discuss stuff, share ideas and thoughts, using both text and code.
- Make and organize an event.
- Toggle its post categories to share with your friends and other devs alike.
- Customize the post form to include snippet codes and many more!
- This form can help ensure the quality of the posts and adhere to the community guidelines.

### Guide on how to install

1. Assuming that you already installed Git and already know how to use [Github](https://www.w3schools.com/whatis/whatis_github.asp), no? then let's head to [this link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
2. This is a private repository, so you have to clone it using SSH, but before that let's use an email that is already authorized by Github to view the private repository. [More on that here](https://leangaurav.medium.com/setup-ssh-key-with-git-github-clone-private-repo-using-ssh-d983ab7bb956).
3. Generate an SSH key on your machine using the registered email:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   Using an older system? then use this command:
   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```
   Note: you have to put a password to that key and it will require you to fill a password everytime you want to interact with the repository.
4. Copy the SSH public key to your keyboard by using this command:
   ```bash
   cat ~/.ssh/id_rsa.pub
   ```
5. Navigate to your **Github account (Click on your Github's profile picture on the top right) > Settings > SSH and GPG keys > New SSH key**:
   - Title: fill the key title (which devices are you using with)
   - Key type: Authentication key
   - Key: (paste your key there)
   - Add SSH key
6. Head to the desired folder (example: `/Desktop/Projects/`) and clone the repository there
   ```bash
   git clone git@github.com:revou-fsse-oct24/module-1-alfifrr.git
   ```
   Don't forget to access the cloned repository
   ```bash
   cd /module-1-alfifrr
   ```
7. Assuming that you're using Visual Studio Code, access the `index.html` file using [this Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or clicking on it directly to see on your browser (but you have to reload manually using `F5` key or refresh button every time you made some changes). Also you can access the `README.md` file using this shortcut: `CTRL+K` then `V`

### Languages used

- HTML **(.html)**
- Markdown **(.md)**

!['HTML5 Logo'](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML_logo_and_wordmark.svg.png)

!['Markdown Logo'](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1024px-Markdown-mark.svg.png)

### Licenses

This repository is licensed under the MIT License. &copy; 2024 Alfian Ferdinan  
HTML logo attribution by W3C, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=12736763  
Markdown logo attribution by Dustin Curtis - https://github.com/dcurtis/markdown-mark/tree/master/svg, CC0, https://commons.wikimedia.org/w/index.php?curid=31095459
