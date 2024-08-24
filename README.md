Node JS is a Singlt Threaded which means

No matter how many cores you have , node uses only 1 core of your CPU

This is fine for I/O Operations , But if the code has Long Running CPU Intensive Functions , 
The Performance of the Application will be affected.

To help with this , We can make use of cluster module.

The Cluster module enables the creation of child processes a.k.a workers , that can run simulataneously

Imagine these are multiple instances of our Node Project.

These workers share the Same Server Port


Understanding Cluster with 2 Files

Both Files have 2 Routes

            Route 1 : / => This is a Home Page

            Route 2 : /slow-page => This is a Slow Page which takes some time to send response

    no-cluster.js

            Trigger Route 2 and immediately Trigger Route 1 : You will see Route 1 will also take time to Respond

            This tells our application cannot handle concurrent requests

    cluster.js


            Using Cluster Module , If we trigger Route 2 and immediately trigger Route 1 , the Route 1 will respond immediately as if there are no delay

            This is because , We created 2 Workers to  handle the application , So the Concurrent Requests are handled Easily

            That Means We have 2 Instances of our Node JS Application and Each Application can Handle Requests Individually.


            Cluster
            /   \
           /     \
        Main     Child  
       Process   Processes (Workers)

       The Main process only can create , remove workers and can Distribute the Requests to Workers .
       Main Process CANNOT receive incoming requests

       Key Points
           1. Cluster Module creates separate child processes called workers
           2. Cluster Module allows workers to share memory
           3. Workers Run in Same Port
           4. Each worker  has its own event loop and can process requests concurrently.
           5. Cluster Module provides built-in load balancing and uses Round Robin Algorithm to distribute Incoming Requests
           6. Cluster Module is better suited for CPU-bound tasks (e.g., heavy calculations, image processing)
