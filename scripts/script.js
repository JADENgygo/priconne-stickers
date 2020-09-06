window.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('button')
	buttons.forEach(e => {
		e.addEventListener('click', () => {
			const dummy = document.createElement('div');
			dummy.textContent = 'https://jadengygo.github.io/princess-connect-stickers/img/' + e.id + '.png';
			dummy.style.visible = 'hidden'
			document.body.appendChild(dummy);
			document.getSelection().selectAllChildren(dummy);
			document.execCommand('copy');
			document.body.removeChild(dummy);

			UIkit.notification.closeAll();
			UIkit.notification({
				message: '画像リンクをコピーしました',
				pos: 'top-center',
				timeout: 500
			});
		});
	});
});

