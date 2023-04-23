const commentFormHandler = async function (event) {
	event.preventDefault();

	const post_id = document.querySelector('.newComment').dataset.post;

	const comment_description = document.querySelector('#comment_description').value.trim();
	console.log(post_id, comment_description)
	if (comment_description) {
		const response = await fetch('/api/comment', {
			method: 'POST',
			body: JSON.stringify({
				post_id,
				comment_description,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			document.location.reload();
		} else {
			alert('Failed comment');
		}
	}
	
};

document
	.querySelector('.newComment')
	.addEventListener('submit', commentFormHandler);