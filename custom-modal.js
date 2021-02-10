const CustomModal = {
	activeOnScroll: false,
	colorTxt: '',
	colorBg: '',
	colorBr: '',
	configs: function () {
		localStorage.setItem('statusActiveModal', '');
	},
	viewModaOnScroll: function () {
		if (localStorage.getItem('statusActiveModal') === '') {
			window.addEventListener('scroll', (_) => {
				const statusActiveModal = localStorage.getItem(
					'statusActiveModal'
				);
				statusActiveModal === '' && !activeOnScroll && this.viewModal();
				localStorage.setItem('statusActiveModal', false);
			});
		}
	},
	viewModal: function () {
		this.toggleClassName();
	},
	toggleClassName: function () {
		document.querySelector('.blur').classList.toggle('active');
		document.querySelector('.popup').classList.toggle('active');
		document.querySelector('.popup__container').classList.toggle('active');
	},
	setColors: function () {
		const popupEl = document.querySelector('.popup');
		popupEl.style.color = colorTxt;
		popupEl.style.background = colorBg;
		popupEl.style.borderColor = colorBr;
	},
	start: function ({
		startOnLoad = false,
		colorText = '#000000',
		colorBackground = '#ffffff',
		colorBorder = '',
	}) {
		activeOnScroll = startOnLoad;
		colorTxt = colorText;
		colorBg = colorBackground;
		colorBr = colorBorder;

		this.configs();
		this.viewModaOnScroll();
		this.setColors();

		startOnLoad && this.viewModal();

		const popupElement = document.querySelector('.popup__container');

		popupElement.addEventListener('click', (e) => {
			if (popupElement.id === e.target.id) {
				this.toggleClassName();
			}
		});
	},
};
