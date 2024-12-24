<script>
	import { tryPOST } from "$lib/utils/fetch";

	/** @type {import('./$types').PageData} */
	export let data;

	let isOpen = false;
	let formData = {};
	let message = "";

	function handleSubmit(event) {
		event.preventDefault();
		formData = Object.fromEntries(new FormData(event.target));
		isOpen = true;
	}

	async function handleConfirm() {
		const json = await tryPOST("/user/profile", formData);
		message = json.message;
		isOpen = false;
	}

	function handleCancel() {
		isOpen = false;
	}
</script>

<div class="content-wrapper">
	<div class="container">
		<h1>Profile</h1>
		<form on:submit={handleSubmit}>
			<label for="nickname">Nickname</label>
			<input
				type="text"
				name="nickname"
				id="nickname"
				bind:value={data.nickname}
				required
			/>
			<div>{message}</div>
			<button type="submit">Update</button>
		</form>
	</div>
</div>

{#if isOpen}
	<div class="modal-backdrop">
		<div class="modal">
			<p class="modal-message">Do you want to update?</p>
			<div class="modal-actions">
				<button class="btn confirm-btn" on:click={handleConfirm}
					>OK</button
				>
				<button class="btn cancel-btn" on:click={handleCancel}
					>Cancel</button
				>
			</div>
		</div>
	</div>
{/if}

<style>
	.content-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		padding: 20px 0;
	}

	.container {
		max-width: 600px;
		width: 100%;
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		box-sizing: border-box;
	}

	h1 {
		text-align: center;
		color: #333;
		margin-bottom: 20px;
	}

	label {
		font-size: 1.1em;
		color: #555;
		margin-bottom: 0.5em;
		display: block;
	}

	input {
		width: 100%;
		padding: 10px;
		margin-bottom: 1.5em;
		border-radius: 4px;
		border: 1px solid #ddd;
		box-sizing: border-box;
		font-size: 1em;
	}

	button {
		width: 100%;
		padding: 12px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 1.2em;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}

	/* 모달 배경 */
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	/* 모달 창 */
	.modal {
		background: white;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
		width: 90%;
		max-width: 400px;
		text-align: center;
	}

	.modal-message {
		font-size: 1rem;
		margin-bottom: 1.5rem;
		color: #333;
	}

	.modal-actions {
		display: flex;
		justify-content: center;
		gap: 1rem; /* 버튼 사이 간격 조정 */
	}

	.btn {
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 5px;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.confirm-btn {
		background: #007bff;
		color: white;
	}

	.confirm-btn:hover {
		background: #0056b3;
	}

	.cancel-btn {
		background: #e0e0e0;
		color: #333;
	}

	.cancel-btn:hover {
		background: #c0c0c0;
	}

	/* 반응형 디자인 */
	@media (max-width: 768px) {
		.container {
			padding: 15px;
		}

		input,
		button {
			font-size: 0.9em;
		}
	}
</style>
