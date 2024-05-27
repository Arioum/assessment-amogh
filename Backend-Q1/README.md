## Backend Assessment - Q1

#### This is a fast API backend which has a few endpoints exposed:

**_Here I used a `posts = []` variable to hold all the posts. Ideally we would have a database._**

`@app.get("/posts")` - Gets all posts.<br>
`@app.get("/posts/{post_id}")` - Gets a specific post given it's `post_id`.<br>
`@app.post("/posts")` - Creates a new post.<br>
`@app.put("/posts/{post_id}")` - Updates a specific post given it's `post_id`.<br>
`@app.delete("/posts/{post_id}")` - Deletes a specific post given it's `post_id`.<br>
<br>
#### To setup project locally:

**Prerequisites:**
Install Python with pip


**1. Clone this repo**

```
git clone https://github.com/Arioum/assessment-amogh.git
```

**2. Do the following steps:**

```
cd assessment-amogh
cd Backend-Q1
```

**3. Install FastApi:**

```bash
pip install fastapi
```

**4. Start the app:**

```bash
fastapi dev app.py
```

**5. URL To test the endpoints:**

```bash
http://127.0.0.1:8000
```
