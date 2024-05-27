from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
import uuid

app = FastAPI()

# Creates a pydantic model (used for validation)
class Post(BaseModel):
    id: int
    name: str
    description: str = None

# This variable holds all our posts
posts = [
    Post(id=1, name="Post title 1", description="This is Post content"),
    Post(id=2, name="Post title 2", description="This is Post content")
]

# This route will return all the available posts
@app.get("/posts")
def test():
    return posts

# This route will return us a specific post specified by its ID
@app.get("/posts/{post_id}")
def read_post(post_id: int):
    for post in posts:
        if post.id == post_id:
            return post
    raise HTTPException(status_code=404, detail="Post not found")

# This route will create a new post and store it on the "posts" variable
@app.post("/posts")
async def create_post(request: Request):
    post = await request.json()
    # The below conditions make sure that all the required fields are present for the post creation
    if "name" not in post or "description" not in post:
        raise HTTPException(
            status_code=400,
            detail="Post creation requires both 'name' and 'description' fields"
        )
    # Creates a post ID for the new_post
    new_post_id = uuid.uuid4().int & (1 << 31)-1
    new_post = Post(id=new_post_id, name=post["name"], description=post["description"])
    posts.append(new_post)
    return {"message": "New post created", "post_details": new_post}

# This route will update an existing post given by its ID.
@app.put("/posts/{post_id}")
async def update_post(post_id: int, request: Request):
    updated_data = await request.json()

    for post in posts:
        if post.id == post_id:
            if "name" in updated_data:
                post.name = updated_data["name"]
            if "description" in updated_data:
                post.description = updated_data["description"]
            return {"message": "Post updated", "post_details": post}
    raise HTTPException(status_code=404, detail="Post not found")

# This route will find and delete a post specified by its ID
@app.delete("/posts/{post_id}")
def delete_post(post_id: int):
    for post in posts:
        if post.id == post_id:
            posts.remove(post)
            return {"message": "Post deleted"}
    raise HTTPException(status_code=404, detail="Post not found")
