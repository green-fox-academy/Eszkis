import { BlogPost } from './BlogPost'

/* Reuse your BlogPost class
Create a Blog class which can
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost */

class Blog {
  blogs: BlogPost[]

  constructor() {
    this.blogs = [];
  }

  add(newBlog: BlogPost) {
    this.blogs.push(newBlog);
  }

  delete(witchOne: number) {
    this.blogs.splice((witchOne - 1), 1)
  }

  update(witchOne: number, newBlog: BlogPost) {
    this.blogs[(witchOne - 1)] = newBlog;
  }
}

let Blog1 = new Blog;
let BlogPost1 = new BlogPost('Test1', 'Test1', 'Test1', 'Test1');
let BlogPost2 = new BlogPost('Test2', 'Test2', 'Test2', 'Test2');
let BlogPost3 = new BlogPost('Test3', 'Test3', 'Test3', 'Test3');
let BlogPost4 = new BlogPost('Test4', 'Test4', 'Test4', 'Test4');

Blog1.add(BlogPost1);
Blog1.add(BlogPost2);
Blog1.add(BlogPost3);
Blog1.add(BlogPost4);
console.log(Blog1);
Blog1.delete(4)
console.log(Blog1);
Blog1.update(1, BlogPost4)
console.log(Blog1);




