<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let post = {
		comments: [
			{ id: 1, author: "댓글 작성자1", text: "좋은 글입니다!" },
			{ id: 2, author: "댓글 작성자2", text: "유익한 정보 감사합니다." },
		],
	};

	let newComment = "";

	const addComment = () => {
		if (newComment.trim() === "") return;

		post.comments = [
			...post.comments,
			{
				id: Date.now(),
				author: "익명", // 실제로는 로그인된 사용자 정보 사용
				text: newComment,
			},
		];
		newComment = "";
	};
</script>

<div class="page-container">
	<div class="content-wrapper">
		<div class="container">
			<h1>{data.post.title}</h1>
			<div class="meta-info">
				작성자: {data.post.nickname} | 작성일: {data.post.created_at}
			</div>

			{#if data.post.file}
				<img
					class="picture"
					src={`/uploads/${data.post.file}`}
					alt={`daily ${data.post.id} img`}
				/>
			{/if}

			<div class="content">
				<pre>
{data.post.description}
				</pre>
			</div>

			<div class="comments-section">
				<h2>댓글</h2>
				{#each post.comments as comment (comment.id)}
					<div class="comment">
						<div class="comment-author">{comment.author}</div>
						<div class="comment-text">{comment.text}</div>
					</div>
				{/each}

				<div class="add-comment">
					<h3>댓글 작성</h3>
					<textarea
						bind:value={newComment}
						placeholder="댓글을 입력하세요"
					></textarea>
					<button on:click={addComment}>댓글 작성</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.picture {
		max-height: 300px; /* 최대 높이를 300px로 설정 */
		width: auto; /* 가로 크기는 자동으로 비율에 맞게 조정 */
		object-fit: contain;
	}

	.page-container {
		display: flex;
		flex-direction: column;
		padding: 0 10px;
	}

	.content-wrapper {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-grow: 1;
		padding: 20px 0;
	}

	.container {
		max-width: 800px;
		width: 100%;
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		box-sizing: border-box;
	}

	h1 {
		margin-top: 0;
		color: #333;
	}

	.meta-info {
		color: #888;
		font-size: 0.9em;
		margin-bottom: 20px;
	}

	.content {
		margin-bottom: 30px;
		color: #555;
		line-height: 1.6;
	}

	.comments-section {
		margin-top: 40px;
	}

	.comment {
		margin-bottom: 15px;
		border-bottom: 1px solid #eee;
		padding-bottom: 10px;
	}

	.comment-author {
		font-weight: bold;
		color: #333;
	}

	.comment-text {
		color: #555;
	}

	.add-comment {
		margin-top: 20px;
	}

	textarea {
		width: 100%;
		padding: 10px;
		border-radius: 4px;
		border: 1px solid #ddd;
		resize: none;
		box-sizing: border-box;
		min-height: 100px;
	}

	button {
		margin-top: 10px;
		padding: 12px;
		background-color: #4caf50;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 1em;
		cursor: pointer;
	}

	button:hover {
		background-color: #45a049;
	}

	@media (max-width: 768px) {
		.container {
			padding: 15px;
		}

		h1 {
			font-size: 1.5em;
		}

		.meta-info {
			font-size: 0.8em;
		}
	}
</style>
