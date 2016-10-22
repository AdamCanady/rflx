# rflx

Note: If something in here doesn't work, definitely try to Google it, but also
ping me. I wrote this without testing anything whatsoever, so there may be
typos and bugs.

## Getting Started

To run this project, you'll need Meteor. Meteor is a web development suite 
that's used to rapidly prototype apps. It does a lot of magic stuff for you 
so you can get to the good parts of making amazing stuff.

Open Terminal.app (you can search for it in spotlight), then paste this command:

    curl https://install.meteor.com/ | sh
    
That should install everything you need to run this project!

Now, download all the files associated with this project. Run this in the
terminal:

    git clone https://github.com/adamcanady/rflx
    
Awesome! If you recall from Intro CS, your computer has a directory structure 
that looks something like this:

    / <- the root of your filesystem, all things live under this folder
    /Users <- all user files live here
    /Applications <- applications that are accessible by all users live here
    /Users/[username] <- a given user's HOME folder. This is where the terminal
        starts out.
    /Users/[username]/rflx <- location where you just cloned this project to.
    
When you're at the command line, here are some useful commands:
    
    cat [file] <- print out the contents of a file
    ls <- list the contents of the current directory
    ls [path] <- list the contents of the [path] directory. For example, try
        ls /
    cd <- with no 'arguments' this takes you directly to your home folder,
        /Users/[username]
    cd [path] <- with a path argument, this takes you to that path so you can
        run things that are inside it.
        
A path may look like one of the following:
    
    /Users/[username]/rflx/client/main.css <- an absolute path to a specific file
        on your hard drive
    ./rflx/README.md <- a relative path to this file from your home folder.
    
If you run:
    
    cd rflx
    
from your home folder, you'll end up inside this project's folder. Try that!

Once you're in the `rflx` folder, run Meteor (which we installed first):

    meteor
    
Nice, you should see a message after a few minutes similar to:

    ⋊> ~/rflx meteor                                                                                                                  07:55:14
    [[[[[ ~/rflx ]]]]]                            
    
    => Started proxy.                             
    => Started MongoDB.                           
    => Started your app.                          
    
    => App running at: http://localhost:3000/
    
This means everything is working!

Now it's time to edit some stuff to see what changes :Discussions

## Editing tha code

Get a text editor. [Sublime Text](https://www.sublimetext.com/) is what a lot of
people use, but it nags you every few file-saves if you don't purchase it.

Perhaps start with [Brackets](http://brackets.io/) or [TextWrangler](http://www.barebones.com/products/TextWrangler/).

The important part is to pick one, download it, and start writing some code! :)

Here's a quick way to open the code in your editor of choice, once you download it:
Say you're in the `rflx` directory (you opened a new terminal and ran `cd rflx`).
Now run `open -a Brackets.app .`.
This opens Brackets.app and gives it the `.` folder as it's first argument, which
is the path it should open with. Recall that `.` alone signifies the current 
directory and `..` signifies the directory 'above' this one (`..` is the directory 
which contains the current directory we're in).


## Explore around!

Edit some of the words and refresh the page. You should see things change! Neato!

Want to learn more? Check out one of the tutorials at [Meteor.com](https://www.meteor.com/tutorials).