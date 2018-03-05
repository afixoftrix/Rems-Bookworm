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