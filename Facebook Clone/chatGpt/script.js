function createPost() {
    let content = document.getElementById('postContent').value;
    if(content.trim() === '') return;
    let post = document.createElement('div');
    post.className = 'post';
    post.textContent = content;
    document.getElementById('feed').prepend(post);
    document.getElementById('postContent').value = '';
}