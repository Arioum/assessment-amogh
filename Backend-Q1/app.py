from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
import uuid

app = FastAPI()


class Post(BaseModel):
    id: int
    name: str
    description: str = None


posts = [
    Post(id=1, name="Post title 1", description="This is Post content"),
    Post(id=2, name="Post title 2", description="This is Post content")
]


@app.get("/posts")
def test():
    return posts


@app.get("/posts/{post_id}")
def read_post(post_id: int):
    for post in posts:
        print(post)
        if post.id == post_id:
            return post
    raise HTTPException(status_code=404, detail="Post not found")


@app.post("/posts")
async def create_post(request: Request):
    post = await request.json()
    if "name" not in post or "description" not in post:
        raise HTTPException(
            status_code=400,
            detail="Post creation requires both 'name' and 'description' fields"
        )

    new_post_id = uuid.uuid4().int & (1 << 31)-1
    new_post = Post(id=new_post_id, name=post["name"],
                    description=post["description"])
    posts.append(new_post)
    return {"message": "New post created", "post_details": new_post}


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


@app.delete("/posts/{post_id}")
def delete_post(post_id: int):
    for post in posts:
        if post.id == post_id:
            posts.remove(post)
            return {"message": "Post deleted"}
    raise HTTPException(status_code=404, detail="Post not found")
