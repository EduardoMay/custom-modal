const CustomModal = {
	activeOnScroll: false,
	colorTxt: '',
	colorBg: '',
	colorBr: '',
	sizeBr: '',
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
		document.querySelector('.popup').classList.toggle('active');
		document.querySelector('.popup__container').classList.toggle('active');
	},
	setColors: function () {
		const popupEl = document.querySelector('.popup');
		popupEl.style.color = colorTxt;
		popupEl.style.background = colorBg;
		popupEl.style.borderColor = colorBr;
		popupEl.style.borderWidth = sizeBr;
	},
	start: function ({
		startOnLoad = false,
		colorText = '#000000',
		colorBackground = '#ffffff',
		colorBorder = '',
		sizeBorder = '1rem',
	}) {
		activeOnScroll = startOnLoad;
		colorTxt = colorText;
		colorBg = colorBackground;
		colorBr = colorBorder;
		sizeBr = sizeBorder;

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
