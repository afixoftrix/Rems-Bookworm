## Bookworm Tutorial

This is a repository I created to follow Rem Zolotykh [videos](https://www.youtube.com/watch?v=Pi5apIbuiYg&list=PLuNEz8XtB51KthRFiVtI8cmXNL9qlQJ5U). In this video series, Rem shows how to build a full web app. The video doesn't explain much of the technology being used. So, I pause the video, learn the technology, before continuing the video.

#### Notes
I will attempt to make any notes on anything worth mentioning on here.

There is a difference between using braces `{}` and not using braces in arrow functions. You can write :
```
 () => {
     someMethod.drawsToScreen()
}
```
This will not return anything. The method will run but the actual anonymous function will not return anything. If you write: 
```
 () => someMethod.drawsToScreen();
```
The anonymous function returns the method. This is actually a shorthand for:
```
 () => {
     return someMethod.drawsToScreen()
}
```
Log: 03-08-2018
I now understand the basics of how to log in and log out work with react redux mongo express node. Full stack is not pretty ridiculously large. My focus now is getting a more detailed understanding of redux and how it works with react. 

So far I know that we have reducers which take state and action and make changes to the redux store based on the action. I will need to read the documentation, watch more tutorials and then get some practice with the technology.
