## Backend Assessment - Q1

#### This is a fast API backend which has a few endpoints exposed:

**_Here I used a `posts = []` variable to hold all the posts. Ideally we would have a database._**

`@app.get("/posts")` - Gets all posts.<br>
`@app.get("/posts/{post_id}")` - Gets a specific post given it's `post_id`.<br>
`@app.post("/posts")` - Creates a new post.<br>
`@app.put("/posts/{post_id}")` - Updates a specific post given it's `post_id`.<br>
`@app.delete("/posts/{post_id}")` - Deletes a specific post given it's `post_id`.<br>
<br>
#### To setup:

**Prerequisites:**
Install Python with pip

**Install FastApi:**

```bash
pip install fastapi
```

**To run the app:**

```bash
fastapi dev app.py
```
